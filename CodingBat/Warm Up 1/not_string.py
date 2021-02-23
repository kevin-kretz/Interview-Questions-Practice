"""
https://codingbat.com/prob/p189441

Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

not_string('candy') → 'not candy'
not_string('x') → 'not x'
not_string('not bad') → 'not bad'
""""
def not_string(str):
  if first_word_is_not(str):
    return(str)
  else:
    return("not " + str)

def first_word_is_not(str):
  split_string = str.split()
  return(split_string[0] == "not")
