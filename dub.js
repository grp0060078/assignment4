// Remove duplicates from an array in anonymous function

let array = ["apple", "mango", "apple","orange", "mango", "mango","1","2","1"];

  
function removeDuplicates(array) {

    return array.filter((item,index) => array.indexOf(item) === index);
}
console.log(removeDuplicates(array));