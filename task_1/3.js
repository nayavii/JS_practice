// Напишите функцию min (a,b), которая возвращает меньшее из чисел a, b.

const min = function (a, b) {
  if (a < b) {
    return a;
  }
  
  return b;
}

console.log (min (10, 2));