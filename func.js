function reverstring(str) {
    return strarr = str.split('')
    .reverse()
    .join('');
}

const output = reverstring('hello');
console.log(output);