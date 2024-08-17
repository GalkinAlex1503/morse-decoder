const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const strArr = [];
    const result = [];
    //parsing to morse
   for (let i = 0; i < expr.length; i += 10) {
       let workStr = expr.slice(i, i+ 10);
       for (let j = 0; j < workStr.length; j += 2) {
           if (workStr.slice(j , j + 2) !== "00") {
               workStr = workStr.slice(j);
               break;
           }
       }
       let symbolMorse = "";
       for (let k = 0; k < workStr.length; k += 2) {
           let workChunk = workStr.slice(k, k + 2);
           if (workChunk === "10") {
                symbolMorse += ".";
           } else if (workChunk === "11") {
               symbolMorse += "-";
           } else if (workChunk === "**") {
               symbolMorse += "**";
           }
       }
       strArr.push(symbolMorse);
   }
    //decoding
    for (let symbolMorse of strArr) {
        if ( symbolMorse === "**********" ) {
            result.push(" ");
        } else {
            result.push(MORSE_TABLE[symbolMorse]);
        }
    }
    return result.join("");
}

module.exports = {
    decode
}