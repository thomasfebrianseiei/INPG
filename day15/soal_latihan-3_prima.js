//Diberikan sebuah function yang menerima satu parameter berupa angka.//
//Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.//

function isPrime(number) {
  for(var a = 2; a < number ; a ++) {
    if(number % a === 0){
      return false;
    }
  }
  return true;
}

console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false