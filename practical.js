/*Write a function reverseLongest that takes a sentence and returns the same sentence with the longest word reversed without changing the casing
console.log(reverseLongest("I Love JavaScript Programming")); 
// "I Love JavaScript gnimmargorP" */
var longest=(text)=>text.split(' ').reduce((acc,el)=>acc.length>el.length?acc:el)
var reverseLongest=(text)=>text.split(' ').map(n=>n===longest(text)?n.split('').reverse().join(''):n).join(' ')


console.log(reverseLongest('I Love JavaScript Programming'))
console.log(reverseLongest('this is the final test'))