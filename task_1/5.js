// Ваша цель создать функцию deleteChars(str), которая удаляет первый и последий символ строки,которая передаетсяв параметр, и возвращает новую строку без этих символов

const deleteChars = function (str) {
  return str.replace(str[0], ' ').replace(str.slice(-1), ' ');
}

console.log (deleteChars ('Has'))