// Функция принимает массив чисел. Возвращает массив строк такого вида:

// for
const getDetailedInfo1 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const index = numbers.indexOf(number);

    result.push(`Value: ${number}; Index: ${index}; Squared: ${number ** 2}`);
  }

  return result;
};

//while

const getDetailedInfo2 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const result = [];

  let i = 0;

  while (i < numbers.length) {
    const number = numbers[i];
    const index = numbers.indexOf(number);

    const detailedString = `Value: ${number}; Index: ${index}; Squared: ${
      number ** 2
    }`;

    result.push(detailedString);
    i++;
  }

  return result;
};

// for of

const getDetailedInfo3 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const result = [];
  let index = 0;

  for (const number of numbers) {
    const detailedString = `Value: ${number}; Index: ${index}; Squared: ${
      number ** 2
    }`;
    result.push(detailedString);

    index++;
  }

  return result;
};

//modern way

const getDetailedInfo4 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  return numbers.map(
    (number, index) =>
      `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`
  );
};

console.log(getDetailedInfo3([1, 4, 3]));
