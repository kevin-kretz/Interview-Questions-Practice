/**
 * @param {string} s
 * @return {number} - Length of the last word in the string provided
 */
var lengthOfLastWord = function(s) {
    const trimmedS = s.trim();
    const words = trimmedS.split(" ");

    return words.at(-1).length;
};