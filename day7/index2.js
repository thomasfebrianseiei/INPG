var name = "agung"; 
var age = 21; 
var money= 500000;
if (name) {
    var sisa;
 if (age < 17 && money < 50000 || age >= 17 && money < 300000 ) {
    console.log("Uang tidak cukup. Anda harus pulang") ;
 }
 if (age < 17 && money >=50000){
    sisa = money - 50000
    console.log("Anda bisa pesan minum. Sisa uang anda: Rp " + sisa);   
 } 
 if (age >= 17 && money >= 300000) {
    sisa = money - 300000
    console.log("Anda bisa pesan minum. Sisa uang anda: Rp " + sisa); 
} 
}
else {
    console.log("Anda tidak boleh masuk!");
}