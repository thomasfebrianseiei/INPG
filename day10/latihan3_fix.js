//Diberikan sebuah function numberProcessing(numberArr) yang menerima satu parameter berupa array yang berisikan angka.//
 //Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat), bilangan ganjil dan bilangan genap.//
 
var numberArr = [];
function numberProcessing(numberArr) {
    var max = 0;
    var min = 0;
    var mean = 0;
    var odds =[];
    var evens = [];
 for (var i=0; i < numberArr.length; i++){
            if(numberArr[i] > max){
                max = numberArr[i]
            }
            else if(numberArr[i] < min){
                min =numberArr[i]
            } 
             mean = mean + numberArr[i];
           }
            mean /= numberArr.length;
  
for (var e=0; e < numberArr.length; e++){
     if(numberArr[e] % 2 !== 0) {
            odds.push(numberArr[e])
           } 
            if(numberArr[e] % 2 === 0) {
            evens.push(numberArr[e])
           }
 }
  return "Min : " + min + ", Max: " + max + ", Mean: " + mean.toFixed() + ", Odds: " + odds.join('-') + ", Evens: " + evens.join('-')
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"