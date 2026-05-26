/**
 * LEVEL 1: RAW REACT AGENT FROM SCRATCH
 *
 * Target: Build an Agentic Loop that can solve math problems using a Calculator Tool.
 */

// Load environment variables from .env file using path relative to current script directory
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { OpenAI } = require('openai');

// Initialize OpenAI Client configured with NVIDIA NIM Base URL and Key
const openai = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: process.env.NVIDIA_BASE_URL
});

// =======================================================
// 🛠️ TOOL 1: The Calculator (The Agent's Hands & Feet)
// =======================================================
function calculator(action, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (isNaN(a) || isNaN(b)) {
        return "Error: Invalid inputs (Not a number)";
    }

    if (action === "add") {
        return a + b;
    }
    if (action === "sub") {
        return a - b;
    }
    if (action === "mul") {
        return a * b;
    }
    if (action === "div") {
        if (b === 0) {
            return "Error: Cannot divide by zero";
        }
        return a / b;
    }

    return "Error: Unknown action";
}

// =======================================================
// 🧠 REAL LLM CALL: Connecting to Nvidia Llama-3 NIM
// =======================================================
async function llm(prompt) {
    try {
        const response = await openai.chat.completions.create({
            // Standard fast instruction model on NVIDIA
            model: "meta/llama-3.1-70b-instruct",
            messages: [
                {
                    role: "system",
                    content: `You are a math solver agent. You must operate strictly in a loop of Thought -> Action -> Observation.
You can ONLY perform ONE action at a time. Do not write multiple actions.
Do NOT write the Final Answer until you have actually received the Observation of the calculation.

You have access to only one tool: calculator(action, a, b) where action can be: 'add', 'sub', 'mul', 'div'. 

You MUST reply strictly in the following format:
Thought: [your reasoning for the current step]
Action: calculator("action_name", a, b)

Do not assume the result of the action. Wait for the user to provide the "Observation:" of your action.

Once you have the final calculation result in your chat history under "Observation:", reply strictly in this format:
Thought: [reasoning]
Final Answer: [the final result]

Do not write code. Do not write anything outside this format.`

                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.1 // Low temperature ensures strict output formatting
        });

        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("LLM API Call failed:", error.message);
        return "Thought: API failed. Final Answer: Error connecting to model.";
    }
}

// =======================================================
// ⚙️ THE AGENT ENGINE: The Execution Loop
// =======================================================
async function runAgent(query) {
    let chatHistory = "Query: " + query + "\n";
    let iteration = 0;
    const maxIteration = 5;

    console.log("Starting Agent for query: " + query);

    while (iteration < maxIteration) {
        console.log(`\n=== Iteration: ${iteration + 1} ===`);

        // Call the Real LLM
        const response = await llm(chatHistory);
        console.log(response);

        // History mein LLM ka response append karo
        chatHistory += response + "\n";

        // Stop Condition Check
        if (response.includes("Final Answer:")) {
            console.log("\n=== SUCCESS: Goal Achieved! ===");
            break;
        }

        // Action Parsing Logic
        const match = response.match(/Action\s*:\s*(\w+)\((.+)\)/);

        if (match !== null) {
            const toolName = match[1]; // "calculator"
            const argsStr = match[2];  // '"add", 10, 20'

            try {
                // Parse args list using JSON trick
                const args = JSON.parse("[" + argsStr + "]");

                if (toolName === "calculator") {
                    const result = calculator(args[0], args[1], args[2]);
                    console.log("Observation: " + result);

                    // Feedback: Result ko observation bolkar history mein feed karo
                    chatHistory += "Observation: " + result + "\n";
                } else {
                    console.log("Observation: Unknown tool " + toolName);
                    chatHistory += "Observation: Unknown tool " + toolName + "\n";
                }
            } catch (e) {
                console.log("Observation: Argument parsing error");
                chatHistory += "Observation: Argument parsing error\n";
            }
        } else {
            // Agar action match nahi mila par "Final Answer" bhi nahi tha
            console.log("Observation: Format mismatched. Provide action or final answer.");
            chatHistory += "Observation: Format mismatched. Please write 'Action: calculator(\"action\", a, b)' or 'Final Answer: [result]'.\n";
        }

        iteration++;
    }

    if (iteration === maxIteration) {
        console.log("\n=== FAILED: Agent exceeded limit without final answer! ===");
    }
}

// Custom dynamic query to check agentic loop
runAgent("Calculate 100 divided by 5, then add 10 to it");
