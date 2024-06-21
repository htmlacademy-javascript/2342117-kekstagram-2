

//  Задача - 1
function isValidStringLength(inputStr, maxLen) {
  return inputStr.length <= maxLen;
}
// console.log(isValidStringLength('Проверочная строка', 22));


// Задача 2

const isPalindrome = function checkPalindrome(string = '') {
  const resultString = string.replaceAll(' ', '').toUpperCase();

  let currentChar = '';

  for (let i = resultString.length - 1; i >= 0; i--) {
    currentChar += resultString[i];
  }
  return resultString === currentChar;
};
// console.log(isPalindrome('топот'));
// console.log(isPalindrome('проверь себя'));

// Задача 3 - Для меня это сложная задача.

const extractNumber = (string) => {
  let result = '';
  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNan(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
    return result === '' ? NaN : Number(result);
  }

};
// console.log(extractNumber());
// console.log(extractNumber('123'));
