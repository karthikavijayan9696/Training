f_name = "sample.txt"
f_name = open('sample.txt', 'r')
lines = 0
words = 0
chara = 0
for item in f_name:
    lines += 1
    chara += len(item)
    flag = 1
    for letter in item:
        if letter != ' ' and flag == 1:
            words += 1
            flag = 0
        elif letter == ' ':
            flag = 1

print(f'Number of lines: {lines}')
print(f'Number of words: {words}')
print(f'Number of characters: {chara}')
