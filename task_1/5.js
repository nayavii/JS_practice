// Ваша цель создать функцию deleteChars(str), которая удаляет первый и последий символ строки,которая передаетсяв параметр, и возвращает новую строку без этих символов

const deleteChars = function (str) {
  return str.slice(1,-1)
}

console.log (deleteChars ('morning'))