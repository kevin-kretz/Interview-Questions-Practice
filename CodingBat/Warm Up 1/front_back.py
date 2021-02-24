"""
https://codingbat.com/prob/p153599

Given a string, return a new string where the first and last chars have been exchanged.

front_back('code') → 'eodc'
front_back('a') → 'a'
front_back('ab') → 'ba'
"""

def front_back(str):
  if len(str) > 1:
    first = str[0]
    middle = str[1:-1]
    last = str[-1]
    
    return(last + middle + first)
  else:
    return(str)
