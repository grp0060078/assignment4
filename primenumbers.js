// Return all the prime numbers in an array in anonymous function

  function Primes(num) {
  
  let prime = [];
  for (let i = 1; i <= num; i++) {
    
       prime.push(i);
  }

  //Remove non-prime numbers from the array     
  prime.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            let index = prime.indexOf(number);
            return prime.splice(index, 1);       
        }
    }   
  });

 return prime;

}
Primes(1,2,3,4,5,6,7,8,9);
console.log(Primes(10))