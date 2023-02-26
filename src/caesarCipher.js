export default function caesarCipher(string, shift) {
  const charArray = string.split('');
  const newCharArray = [];

  charArray.forEach(char => {
    newCharArray.push(String.fromCharCode(newCharUnicode(char.charCodeAt(0), shift)));
  });

  return newCharArray.join('');
}

function newCharUnicode(charUnicode, shift) {
  let newUnicode = charUnicode + shift;

  if ((newUnicode >= 65 && newUnicode <= 90) || (newUnicode >= 97 && newUnicode <= 122)) {
    newUnicode;
  } else if (charUnicode >= 65 && charUnicode <= 90 && newUnicode > 90) {
    newUnicode = 64 + (newUnicode - 90);
  } else if (charUnicode >= 97 && charUnicode <= 122 && newUnicode > 122) {
    newUnicode = 96 + (newUnicode - 122);
  } else {
    newUnicode = charUnicode;
  }

  return newUnicode;
}

console.log(caesarCipher('C.M. Sunday', 4));