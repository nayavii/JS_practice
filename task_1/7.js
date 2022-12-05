// Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

// Пример: 
// checkLetterCase(‘A’) // ‘Оууу май, большая буква!’
// checkLetterCase(‘s) //  ‘Нет уж, маленькие буквы - скучно’

const checkLetterCase = function (letter) {
  if (letter === letter.toLowerCase()) {
    return 'Нет уж, маленькие буквы - скучно'
  }
  return 'Оууу май, большая буква!'
}

console.log (checkLetterCase ('a'))
