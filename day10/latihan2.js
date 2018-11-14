//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.//
//Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.//
//Contoh, jika arr adalah 'x', ' ', 'o', ' ', ' ', 'x', maka jarak terdekat dari 'o' ke 'x' adalah 2.//
//Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.//

var arr = [];
function targetTerdekat(arr) {
  var idx = 0;
  var ido = 0;
  var tampung = 0;
  var arrxo = [];
for (var x = 0; x < arr.length; x++){
      if (arr[x] === 'x'){
      idx = x
      arrxo.push(idx)
      }
      else if (arr[x] === 'o'){
       ido = x
      }
 var hasil= [];
 for (var o = 0; o < arrxo.length; o++){
     if (arrxo[o] < ido){
     tampung =(ido - arrxo[o]);
     }  
     else if(arrxo[o] > ido){
     tampung =(arrxo[o] - ido);
     }
      hasil.push(tampung)
      hasil.sort()
    } 
  }
  if (hasil[0] === undefined){
   return 0
  } else { 
   return hasil[0]
  }
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2