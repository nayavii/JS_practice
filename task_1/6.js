// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
// Если в слове четное количество букв, то и последняя буква должна быть заглавной.
// Пример:

// someFn(‘пиТеР’) // Питер
// someFn(‘javaScript’) // JavascripT

const someFunction = function (word) {

  const lastCapitalLetter = word.slice(-1).toUpperCase();
  const firstCapitalLetter = word[0].toUpperCase();
  const restChars = word.slice(1).toLowerCase(); 

  if (word.length % 2 === 0) {
    
    return firstCapitalLetter + restChars.slice(1, -1) + lastCapitalLetter;
  }
  
  return firstCapitalLetter + restChars;
}

console.log (someFunction('apple'))
