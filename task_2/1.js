// Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
// Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – этот пользователь не должен попасть в массив результата.

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

//for

const filterUsersByLetter1 = (userList, blackListedLetters) => {
  if (!Array.isArray(userList) || !Array.isArray(blackListedLetters)) return;

  const result = [];
  const lowerCasedBlackListedLetter = [];

  for (let i = 0; i < blackListedLetters.length; i++) {
    const letter = blackListedLetters[i].toLowerCase();

    lowerCasedBlackListedLetter.push(letter);
  }

  for (let i = 0; i < userList.length; i++) {
    const userName = userList[i];
    const firstLetterOfUserName = userName[0].toLowerCase();

    const isUserBlackListed = lowerCasedBlackListedLetter.includes(
      firstLetterOfUserName
    );

    if (!isUserBlackListed) {
      result.push(userName);
    }
  }

  return result;
};

//while

const filterUsersByLetter2 = (userList, blackListedLetters) => {
  if (!Array.isArray(userList) || !Array.isArray(blackListedLetters)) return;

  const result = [];
  const lowerCasedBlackListedLetter = [];

  let i = 0;
  while (i < blackListedLetters.length) {
    const letter = blackListedLetters[i].toLowerCase();

    lowerCasedBlackListedLetter.push(letter);
    i++;
  }

  let j = 0;
  while (j < userList.length) {
    const userName = userList[j];
    const firstLetterOfUserName = userName[0].toLowerCase();

    const isUserBlackListed = lowerCasedBlackListedLetter.includes(
      firstLetterOfUserName
    );

    if (!isUserBlackListed) {
      result.push(userName);
    }
    j++;
  }

  return result;
};

//for of

const filterUsersByLetter3 = (userList, blackListedLetters) => {
  if (!Array.isArray(userList) || !Array.isArray(blackListedLetters)) return;

  const result = [];
  const lowerCasedBlackListedLetter = [];

  for (const letter of blackListedLetters) {
    lowerCasedBlackListedLetter.push(letter.toLowerCase());
  }

  for (const userName of userList) {
    const firstLetterOfUserName = userName[0].toLowerCase();

    const isUserBlackListed = lowerCasedBlackListedLetter.includes(
      firstLetterOfUserName
    );

    if (!isUserBlackListed) {
      result.push(userName);
    }
  }

  return result;
};

//modernway

const filterUsersByLetter4 = (userList, blackListedLetters) => {
  if (!Array.isArray(userList) || !Array.isArray(blackListedLetters)) return;

  const lowerCasedBlackListedLetter = blackListedLetters.map((letter) =>
    letter.toLowerCase()
  );

  return userList.filter((userName) => {
    const firstLetter = userName[0].toLowerCase();

    return !lowerCasedBlackListedLetter.includes(firstLetter);
  });
};

console.log(filterUsersByLetter3(userList, ["p", "v"]));
