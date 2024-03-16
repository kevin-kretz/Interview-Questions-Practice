/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    const charMap = new Map();

    for (let left = 0, right = 0; right < s.length; right++) {
        const char = s[right];

        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }

        charMap.set(char, right);

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

lengthOfLongestSubstring("abcabcbb");