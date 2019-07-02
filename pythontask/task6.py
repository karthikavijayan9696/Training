class Circle:
    def __init__(self, r):
        self.result = 3.14*(r**2)


radius = int(input("Enter radius of circle: "))
obj = Circle(radius)
print(obj.result)