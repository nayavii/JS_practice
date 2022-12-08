// Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив где буквы которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем

// for

const changedCaseOfLetters1 = (letters) => {
  if (!Array.isArray(letters)) return;

  const result = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }
  }

  return result;
};

// while

const changedCaseOfLetters2 = (letters) => {
  if (!Array.isArray(letters)) return;

  const result = [];

  let i = 0;

  while (i < letters.length) {
    const letter = letters[i];

    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }
    i++;
  }

  return result;
};

//for of

const changedCaseOfLetters3 = (letters) => {
  if (!Array.isArray(letters)) return;

  const result = [];

  for (const letter of letters) {
    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }
  }

  return result;
};

//modern way

const changedCaseOfLetters4 = (letters) => {
  if (!Array.isArray(letters)) return;

  return letters.map((letter) => {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    }

    return letter.toUpperCase();
  });
};

console.log(changedCaseOfLetters3(["a", "B", "c"]));
