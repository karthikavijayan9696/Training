count = int(input('How many of you liked the post: '))
names = []
if count == 0:
    print('Nobody likes this')
else:
    print(f'Enter names of {count} who liked the post ')
for i in range(count):
    names.append(input())
if count == 1:
    print(f'{names[0]} likes this')
elif count == 2:
    print(f'{names[0]} and {names[1]} likes this')
elif count == 3:
    print(f'{names[0]},{names[1]} and {names[2]} likes this')
else:
    print(f'{names[0]},{names[1]} and {count-2} others likes this')