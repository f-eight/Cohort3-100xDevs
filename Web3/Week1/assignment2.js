/*Assignment #2
What if I ask you that the input string should start with 100xdevs ? How would the code change? */

const crypto = require('crypto');

let input = 0;

while (true) {
    let str = '100xdevs' + input.toString();
    const hash = crypto.createHash('sha256').update(str).digest('hex');
    if (hash.substring(0, '00000'.length) === '00000') {
        console.log("Input" + ": " + str + "\n" + "Hash" + ": " + hash);
        break;
    }
    input++;
}