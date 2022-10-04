const stringParametrize = (str) => {
  return str.toLowerCase().split(" ").join("-").replace(".", "");
};

const someStr = "Robin Singh from USA.";

console.log(stringParametrize(someStr));
