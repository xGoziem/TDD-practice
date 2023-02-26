import reverseString from "../src/reverseString"; 

test('reverses the word "hello world"', () => {
  expect(reverseString('hello world!')).toMatch(/!dlrow olleh/);
});