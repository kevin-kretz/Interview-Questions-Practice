"""
https://codingbat.com/prob/p137202

You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

caught_speeding(60, False) → 0
caught_speeding(65, False) → 1
caught_speeding(65, True) → 0
"""

def caught_speeding(speed, is_birthday):
  lower_limit = 60
  upper_limit = 80
  
  if is_birthday:
    lower_limit += 5
    upper_limit += 5
  
  if speed <= lower_limit:
    return 0
  elif speed <= upper_limit:
    return 1
  else:
    return 2
