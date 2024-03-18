# 383. Ransom Note

## Problem
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

### Constraints

1 <= `ransomNote.length`, `magazine.length` <= 105

`ransomNote` and `magazine` consist of lowercase English letters.


## Examples
### Example 1:
```
Input: ransomNote = "a", magazine = "b"
Output: false
```
### Example 2:
```
Input: ransomNote = "aa", magazine = "ab"
Output: false
````
### Example 3:
```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

## Solution
[View solution](./383-Ransom_Note.js)

**Time complexity:** `O(m + n)` or simplified to `O(n)` -  where `m` is the length of `ransomNote` and `n` is the length of `magazine`.

**Space complexity:** `O(k)` where `n` is the length of **unique** letters in `magainze`. In the worst case, all the letters in magazine are unique, causing `k` to be the length of `magazine`.