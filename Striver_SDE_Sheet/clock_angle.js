/*
Problem Statement: 1344. Angle Between Hands of a Clock
------------------------------------------------------
Given two numbers, hour and minutes, return the smaller angle (in degrees) 
formed between the hour and the minute hand.



Example 2:
Input: hour = 3, minutes = 30
Output: 75

Example 3:
Input: hour = 3, minutes = 15
Output: 7.5
*/

function angleClock(hour, minutes) {
    let minAngle = minutes * 6;

    let hourAngle = (hour % 12) * 30 + (minutes) * 0.5

    let diff = Math.abs(hourAngle - minAngle);
    return Math.min(diff, 360 - diff);
}

console.log("Angle at 12:30:", angleClock(12, 30));
console.log("Angle at 3:30:", angleClock(3, 30));
console.log("Angle at 3:15:", angleClock(3, 15));

/*
Explanation:
For 12:30:
Minute hand angle = 30 * 6 = 180 degrees
Hour hand angle = (12 % 12) * 30 + (30) * 0.5 = 0 + 15 = 15 degrees
Difference = |180 - 15| = 165 degrees

For 3:30:
Minute hand angle = 30 * 6 = 180 degrees
Hour hand angle = (3 % 12) * 30 + (30) * 0.5 = 90 + 15 = 105 degrees
Difference = |180 - 105| = 75 degrees

For 3:15:
Minute hand angle = 15 * 6 = 90 degrees
Hour hand angle = (3 % 12) * 30 + (15) * 0.5 = 90 + 7.5 = 97.5 degrees
Difference = |97.5 - 90| = 7.5 degrees
*/
