/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    else {
        const dictionary = {};
        let longestSubstring = 0;
        for (let i in s) {

            let maxSubstring = s.length - i; // The longest possible substring, assuming all characters are unique.
            const currentSubstring = new Set();

            // only check the substring if it's possible to beat the current longest substring
            if (maxSubstring > longestSubstring) {
                for (let j = i; j < s.length; j++) {
                    if (currentSubstring.has(s[j])) {
                        dictionary[i] = currentSubstring.size;
                        break;
                    }
                    else {
                        currentSubstring.add(s[j]);
                    }
                }
                if (longestSubstring < currentSubstring.size) {
                    longestSubstring = currentSubstring.size;
                }
                dictionary[i] = currentSubstring.size;
            }
        }

        const substrings = Object.values(dictionary);
        return Math.max(...substrings);
    }
};

lengthOfLongestSubstring(" ");