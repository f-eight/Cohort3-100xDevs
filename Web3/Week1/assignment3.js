/*Assignment #3
What if I ask you to find a nonce for the following input - 
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10*/


const crypto = require('crypto');

let input = 0;

while (true) {
    let str = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
    const hash = crypto.createHash('sha256').update(str).digest('hex');
    if (hash.substring(0, '00000'.length) === '00000') {
        console.log("Input" + ": " + str + "\n" + "Hash" + ": " + hash);
        break;
    }
    input++;
}