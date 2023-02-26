import capitalize  from "../src/capitalize";

test('capitalizes the word "small"', () => {
  expect(capitalize('small')).toMatch(/Small/);
});