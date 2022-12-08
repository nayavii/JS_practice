// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы попривествовать его немного иначе.


const sayHello = function(name) {
  if (name === `Mark` || name === `mark`) {
    return "Hi, Mark!";
  }

  const upperCasedFirstLetter = name.replace(name[0],name[0].toUpperCase());

  return `Hello, ${upperCasedFirstLetter}!`;
}

console.log (sayHello (`Anya`));


























