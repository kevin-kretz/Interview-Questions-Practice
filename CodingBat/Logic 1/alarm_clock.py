"""
https://codingbat.com/prob/p119867

Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

alarm_clock(1, False) → '7:00'
alarm_clock(5, False) → '7:00'
alarm_clock(0, False) → '10:00'
"""

def alarm_clock(day, vacation):
  weekday = False
  
  if 1 <= day <= 5:
    weekday = True
  
  if vacation:
    if weekday:
      return("10:00")
    else:
      return("off")
  else:
    if weekday:
      return("7:00")
    else:
      return("10:00")
