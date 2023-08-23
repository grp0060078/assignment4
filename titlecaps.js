// convert all the strings to title caps in a string array in anonymous function

function cap(words) {

let ar =[]
let upperCase = [];
for (let word of words) {

    
  upperCase.push(word.slice()[0].toUpperCase()[0]);

    read=(word.slice(1).toLowerCase());

   ar.push(upperCase+read)
   
}    return ar;
} 

let words = ['apple','mango','grapes'];

console.log(cap(words));