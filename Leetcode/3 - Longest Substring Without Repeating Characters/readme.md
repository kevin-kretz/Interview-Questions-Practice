# 3. Longest Substring Without Repeating Characters

## Problem

Given a string s, find the length of the longest
substring
without repeating characters.

### Constraints
0 <= `s.length` <= 5 * 104

`s` consists of English letters, digits, symbols and spaces.

## Examples
### Example 1
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```


### Example 2
```nput: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

```

### Example 3
```nput: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution
[View Solution](./3-Longest_Substring_Without_Repeating_Characters.js)

**Time Complexity:** `O(n^2)` The outer loop is O(n), the inner loop should save time, however, in the worst case scenario, it's time complexity is O(k) where k is the length of the remaining substring from the current position. Therefore the overall time complexity is O(n*k) or O(n^2).

**Space Complexity:** `O(n)` The set and the dictionary are both O(n) in space, where n is the length of the given string. Therefore, O(n + n), which simplifies to O(n) is the memory complexity.