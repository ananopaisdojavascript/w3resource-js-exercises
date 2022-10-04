const swap = (str) => {
    let newText = '';
    str.split('').map(word => {
        if (word === word.toUpperCase()) {
            newText += word.toLowerCase();
        } else {
            newText += word.toUpperCase();
        }
    });
    return newText;
}

console.log(swap('AaBbc'))