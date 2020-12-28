/*
**Testar a função com números de 0 a 100
*/


const fizzBuzz = (number) => { // escrita mais legível dos ifs
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
};
console.log(fizzBuzz(3), fizzBuzz(5), fizzBuzz(7), fizzBuzz(15), fizzBuzz('Hello'));

let i = 0;
const list = [];
while (i<=100) {
    list.push(i);
    i++;
}
// console.log(list)
for ( n of list ) {
    console.log(n, fizzBuzz(n));
}