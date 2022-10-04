const capitalize = str => {
	let name = str;
	let firstCapitalLetter = name.slice(0, 1).toUpperCase();
	let restOfString = name.slice(1)
	return firstCapitalLetter + restOfString;
}

console.log(capitalize('js string exercises'));