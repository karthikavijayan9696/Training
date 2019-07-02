import re

string = input("Enter the string")
phone = re.findall(r'[\D\s]([0-9]{10})[\D\s]', string)

for i in phone:

  print(re.findall(r'([0-9]{10})', i))