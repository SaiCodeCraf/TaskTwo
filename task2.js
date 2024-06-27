function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
const exampleString = 'webmaster';
const sortedString = alphabeticalOrder(exampleString);
console.log(sortedString); 
