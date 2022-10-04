const abbreviateName = (str) => {
  const nameArr = str.split(" ");
  return `${nameArr[0]} ${nameArr[1].slice(0, 1)}.`;
};

const nome = "Robin Singh";
console.log(abbreviateName(nome));
