// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы попривествовать его немного иначе.


const sayHello = function(name) {
  if (name.toUpperCase === `MARK`) {
    return "Hi, Mark!";
  }

  const firstCapitalLetter = name[0].toUpperCase();
  const restChars = name.slice(1).toLowerCase();

  return `Hello, ${firstCapitalLetter}${restChars}!`;
}

console.log (sayHello (`KeVin`));


























