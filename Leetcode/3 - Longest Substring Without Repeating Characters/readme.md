# 3. Longest Substring Without Repeating Characters

## Problem
[View on LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

Given a string s, find the length of the longest substring without repeating characters.

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
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

```

### Example 3
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution
[View Solution](./3-Longest_Substring_Without_Repeating_Characters_v2.js)

**Time Complexity:** `O(n)` where n is the length of the input string, because it iterates over the string once.

**Space Complexity:** `O(min(m,n))` where m is the size of the character set, because the character map can store at most m unique characters.