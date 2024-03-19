/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const wordPatternMap = {};
    const words = s.split(" ");

    if (words.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if(!wordPatternMap[pattern[i]]) {

            const alreadyAssignedWords = Object.values(wordPatternMap);
            if (alreadyAssignedWords.includes(words[i])) {
                return false;
            }
            else {
                wordPatternMap[pattern[i]] = words[i];
            }

        }
        else if (wordPatternMap[pattern[i]] !== words[i]) {
            return false;
        }
    }

    return true;
};

wordPattern("abba", "cat dog dog cat");