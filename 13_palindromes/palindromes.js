const palindromes = function (string) {
  const alphabetnumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphabetnumerical.includes(character))
    .join('');

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
