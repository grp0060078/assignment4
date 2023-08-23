// Return all the palindromes in an array in anonymous function


 function palindrome (words) {

 return words.filter(function (word) {

    return word.split("").reverse().join("") == word;
  });
};

console.log(palindrome(["hello", "mom","dad","radar","banana","madam","kind"]));