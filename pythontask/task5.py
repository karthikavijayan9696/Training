tuple_given = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
result = []
for i in range(len(tuple_given)+1):
    if (i % 2) == 0:
        if i != 0:
            result.append(i)
print(tuple(result))

