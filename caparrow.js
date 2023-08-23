// convert all the strings to title caps in a string array

let cap=(words) =>{
let caps=[]

let upperCase = [];
for (let word of words) {

    
  upperCase.push(word.slice()[0].toUpperCase());

    read=(word.slice('1').toLowerCase());

   
   caps.push(upperCase+read)
}    return caps ;
} 

let words = ['apple','mango','grapes'];

console.log(cap(words));