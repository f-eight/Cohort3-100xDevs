/*Assignment #1
What if I ask you the following question — 
Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
A: You will have to brute force until you find a value that starts with 00000 */

const crypto = require('crypto');

let input = 0;

while (true) {
    let str = input.toString();
    const hash = crypto.createHash('sha256').update(str).digest('hex');
    if (hash.substring(0, '000000000'.length) === '000000000') {
        console.log("Input" + ": " + `${input}` + "\n" + "Hash" + ": " + hash);
        break;
    }
    input++;
}
