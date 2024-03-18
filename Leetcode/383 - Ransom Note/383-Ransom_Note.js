/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineMap = {}

    for (let letter of magazine) {
        if (magazineMap[letter]) {
            magazineMap[letter] += 1;
        }
        else {
            magazineMap[letter] = 1;
        }
    }

    for (let letter of ransomNote) {
        if (magazineMap[letter] <= 0 || !magazineMap[letter]) {
            return false;
        }
        else {
            magazineMap[letter]--;
        }
    }
    return true;

};

canConstruct("aa", "aab");