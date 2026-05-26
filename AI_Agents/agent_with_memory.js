/**
 * LEVEL 2: REACT AGENT WITH SLIDING WINDOW MEMORY
 * 
 * Target: Implement structured array-based chat memory with auto-purging to prevent token explosion.
 */

require('dotenv').config({ path: __dirname + '/.env' });
const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: process.env.NVIDIA_BASE_URL
});

// =======================================================
// 🛠️ TOOLS (Hands & Feet)
// =======================================================
function calculator(action, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return "Error: Invalid inputs";
    
    if (action === "add") return a + b;
    if (action === "sub") return a - b;
    if (action === "mul") return a * b;
    if (action === "div") {
        if (b === 0) return "Error: Cannot divide by zero";
        return a / b;
    }
    return "Error: Unknown action";
}

// =======================================================
// 🧠 REAL LLM CALL (Passing the entire structured messages array)
// =======================================================
async function llm(messagesArray) {
    try {
        const response = await openai.chat.completions.create({
            model: "meta/llama-3.1-70b-instruct", 
            messages: messagesArray,
            temperature: 0.1
        });
        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("LLM API Call failed:", error.message);
        return "Thought: API failed. Final Answer: Error connecting to model.";
    }
}

// =======================================================
// ⚙️ THE AGENT ENGINE: Array-based Memory Loop
// =======================================================
async function runAgent(query) {
    console.log("Starting Memory-Agent for query: " + query);

    const MAX_MEMORY = 7;  // Maximum messages allowed (sliding window size)

    // STEP 1: System Prompt (Index 0 - Kabhi delete nahi hoga)
    const systemPrompt = {
        role: "system",
        content: `You are a math solver agent. You operate in a loop of Thought -> Action -> Observation.
You can ONLY perform ONE action at a time. Do NOT write the Final Answer until you have actually received the Observation.
You have access to: calculator(action, a, b) [add, sub, mul, div].

Format rules:
Thought: [reasoning]
Action: calculator("action_name", a, b)

Once you have the answer:
Thought: [reasoning]
Final Answer: [the result]

Do not write code.`
    };

    // STEP 2: Memory Array Initialize karo (System prompt + User query)
    let messages = [
        systemPrompt,
        { role: "user", content: query }
    ];

    let iteration = 0;
    const maxIteration = 5;

    // STEP 3: The Agent Loop
    while (iteration < maxIteration) {
        console.log(`\n=== Iteration: ${iteration + 1} ===`);
        console.log(`[Memory Size: ${messages.length} cards]`);

        // STEP 4: Brain ko call karo (poora messages array bhejo)
        const response = await llm(messages);
        console.log(response);

        // STEP 5: AI ka reply 'assistant' card banakar memory mein push karo
        messages.push({ role: "assistant", content: response });

        // STEP 6: Stop Check
        if (response.includes("Final Answer:")) {
            console.log("\n=== SUCCESS: Goal Achieved! ===");
            break;
        }

        // STEP 7: Action Parsing (Regex se tool extract karo)
        const match = response.match(/Action\s*:\s*(\w+)\((.+)\)/);

        if (match !== null) {
            const toolName = match[1];
            const argsStr = match[2];

            try {
                const args = JSON.parse("[" + argsStr + "]");

                if (toolName === "calculator") {
                    const result = calculator(args[0], args[1], args[2]);
                    console.log("Observation: " + result);

                    // STEP 8: Result ko 'user' card banakar memory mein push karo
                    messages.push({ role: "user", content: "Observation: " + result });
                } else {
                    messages.push({ role: "user", content: "Observation: Unknown tool " + toolName });
                }
            } catch (e) {
                messages.push({ role: "user", content: "Observation: Argument parsing error" });
            }
        } else {
            messages.push({ role: "user", content: "Observation: Format error. Use Action: calculator(\"action\", a, b) or Final Answer: [result]" });
        }

        // =================================================
        // STEP 9: SLIDING WINDOW - Memory Cleanup 🪟
        // =================================================
        // Agar memory cards MAX_MEMORY se zyada ho gaye,
        // toh sabse purana conversation card (index 1) delete karo.
        // Index 0 (System Prompt) ko KABHI mat chhedna!
        while (messages.length > MAX_MEMORY) {
            messages.splice(1, 1);  // Index 1 se 1 element nikal do
            console.log("[Memory Pruned] Oldest card removed. New size: " + messages.length);
        }

        iteration++;
    }

    if (iteration === maxIteration) {
        console.log("\n=== FAILED: Agent exceeded limit without final answer! ===");
    }

    // Bonus: Final memory state print karo
    console.log("\n--- Final Memory Snapshot ---");
    messages.forEach((msg, i) => {
        console.log(`[${i}] ${msg.role}: ${msg.content.substring(0, 80)}...`);
    });
}

runAgent("Calculate (10 + 20) * 2");
