const truncateString = (str, num) => (str > num) ? str : str = str.substring(0, num);

console.log(truncateString("Robin Singh", 4));