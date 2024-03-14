/**
 * @param {string} s
 * @return {number} - the length of the last word in the provided string
 */
var lengthOfLastWord = function(s) {
    const trimmedS = s.trim();
    const words = trimmedS.split(" ");

    return words.at(-1).length;
};