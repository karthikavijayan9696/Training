limit = int(input('Enter the limit: '))
print(f'Enter {limit} numbers: ')
num = []
num2 = []
for i in range(limit):
    num.append(int(input()))
for i in num:
    if (i % 2) != 0:
        if i != 0:
            num2.append(i)
print(max(num2))


