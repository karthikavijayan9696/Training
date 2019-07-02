import task15
import unittest


class Test(unittest.TestCase):

    def test_add_integers(self):

        result = task15.add(1, 2)
        self.assertEqual(result, 3)

    def test_sub_integers(self):

        result = task15.subtract(2, 2)
        self.assertEqual(result, 0)

    def test_mul_integers(self):

        result = task15.multiply(2, 2)
        self.assertEqual(result, 4)

    def test_div_raise(self):
        self.assertRaises(ZeroDivisionError,task15.divide, 1, 0)
        result = task15.divide(6, 2)
        self.assertEqual(result, 3)


if __name__ == '__main__':
    unittest.main()