import caesarCipher from "../src/caesarCipher";

test('changes "GOZIE" to "ksdmi"', () => {
  expect(caesarCipher('GOZIE', 4)).toMatch(/ksdmi/);
});