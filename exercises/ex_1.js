const lowercaseMessage = (string) => {
    return string.toLowerCase();
}

const transform = (string, oneFunction) => {
    return oneFunction(string);
}

console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));
