var name = ""; 
var age = 21; 
var money= 500000;
if (name) {
 var money1;
 if (age < 17) {
    money1 = 50000 ;
 }
 if (age >= 17) {
    money1 = 300000 ;
 }
 if (money < money1) {
   console.log("Uang tidak cukup. Anda harus pulang") ;
 }
 if (money >= money1) {
    var sisa = money - money1
    console.log("Anda bisa pesan minum. Sisa uang anda: Rp " + sisa);   
 }
}
else {
    console.log("Anda tidak boleh masuk!")
}


