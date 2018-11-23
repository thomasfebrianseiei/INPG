//Diberikan sebuah function yang menerima satu parameter berupa string.//
//Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat//
//karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.//

function threeStepsAB (text) {
    var a;
    var b;
        
    for(var i = 0; i < text.length; i++){
      if(text[i] === 'a')
         a = i ;
      else if (text[i] === 'b')
           b = i ; 
    }
    return b - a === 4 || a - b === 4 
}

console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false