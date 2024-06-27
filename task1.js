function reverseNumber(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('')
    return parseInt(reversedStr, 10);
}
const x = 32243;
const reversed = reverseNumber(x);
console.log(reversed); 

