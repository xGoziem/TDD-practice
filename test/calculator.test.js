import calculator from "../src/calculator";

test('one plus one is two', () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

test('one subtracted from three is two', () => {
  expect(calculator.subtract(3, 1)).toEqual(2);
});

test('one multiplies two is two', () => {
  expect(calculator.multiply(1, 2)).toEqual(2);
});

test('two divides four is two', () => {
  expect(calculator.divide(4, 2)).toEqual(2);
});
