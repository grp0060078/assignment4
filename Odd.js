// print odd numbers in an array anonymous function

function findOddNumbers(numbers) {

let oddNumbers =[];

for (let number of numbers) {

     if (number %2 !== 0) {

         oddNumbers.push(number);
     }
}

    return oddNumbers;
}
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(findOddNumbers(numbers));