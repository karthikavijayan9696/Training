import re
email = str(input('Enter your email: '))
match = re.match('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$', email)

if match:
    print('valid entry')
else
    print('invalid entry'):
