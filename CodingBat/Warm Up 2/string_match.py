"""
https://codingbat.com/prob/p182414

Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring.
So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.


string_match('xxcaazz', 'xxbaaz') → 3
string_match('abc', 'abc') → 2
string_match('abc', 'axc') → 0
"""

def string_match(a, b):
  count = 0
  
  for i in range(shorter_string(a, b)-1):
    if a[i] == b[i] and a[i+1] == b[i+1]:
      count += 1
      
  return(count)
  
def shorter_string(a, b):
  return(min(len(a), len(b)))
