/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let array = s.split(" ");
    let dictionary = {};
    let result = ""

    for (let i in array) {
        const correctIndex = array[i].slice(-1, array[i].length);
        const word = array[i].slice(0, -1);

        dictionary[correctIndex] = word;
    }

    for (let i = 1; i <= array.length; i++) {
        if (i === 1) {
            result += `${dictionary[i]}`
        }
        else {
            result += ` ${dictionary[i]}`
        }
    }
    return result;
};