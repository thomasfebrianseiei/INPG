function baris(a,z){
var ntengah = (a + z) /2 ;
 if (ntengah % 1 === 0 )
  return ntengah
 else
  return ntengah - 0.5   
}
console.log(baris(33,99))
console.log(baris(7,16))