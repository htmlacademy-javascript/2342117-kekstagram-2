// ! Задача - 1. Какой вариант оставить ?
//? первый вариант
function isValidStringLength(inputStr, maxLen) {
  return (inputStr.length <= maxLen);
}
console.log(isValidStringLength('Проверочная строка', 22));

//? второй вариант
// const isValidStringLength = (inputStr, maxLen) => (inputStr.length <= maxLen);
// console.log(isValidStringLength('Проверочная строка', 22));

//? третий
// const testedSentence = 'Проверочная строка';
// const maximumLength = 22;

// const isValidStringLength = function (inputStr, maxLen) {
//   if (inputStr.length <= maxLen) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isValidStringLength(testedSentence, maximumLength));


//? четвертый вариант - но почему-то не работает. ЧТо не так ?
// function isValidStringLength(inputStr, maxLen) {
//   return inputStr.length <= maxLen ? true : false;
// }
// console.log(isValidStringLength('Проверочная строка', 22));


//! Вторая задача - просто переписал из лайва
// консоль ругается, выдает такую ошибку - net::ERR_ABORTED 500 (Internal Server Error)
const isPalindrome = function checkPalindrome(isStr) {
  isStr = isStr.replaceAll(' ', '');
  isStr = isStr.toUpperCase();

  let result = ''; // зачем мы создали эту строку ?

  for (i = isStr.length - 1; i >= 0, i--;) {
    result += isStr.[i] // не могу понять что мы вкладываем в переменную и зачем?

    return isStr === result;
  }

  // ! Задача 3
  // вопрос  - извлекает цифры от 0 до 9 и возвращает целое число. А что, одна из этих цифр является не целой ?
  const extractNumber = (String) => {
    let result = '';
    String = String.toString();

    for (i = 0, i <= String.length - 1, i++) {
      if (Namber.isNan(parseInt(string[i], 10)) === false) { //можно как ребенку обьснить каждый поворот в этой строке ?
        result += string[i]; // и не могу понять что мы делаем квадратными скобками
      }
    }
    return result === '' ? Nan : Number(result);
  };

  checkStr();
