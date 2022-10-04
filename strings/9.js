const capitalizeWords = (str) => {
  const name = str;
  const nameArr = name.split(" ");
  const capitalize = [];

  for (let i = 0; i < nameArr.length; i++) {
    let firstCapitalLetter = nameArr[i].slice(0, 1).toUpperCase();
    let restOfString = nameArr[i].slice(1);
    capitalize.push(firstCapitalLetter + restOfString);
  }

  return capitalize.join(" ");
};

console.log(capitalizeWords("js string exercises"));
