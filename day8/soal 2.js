function baris(a,b){
    var o="";
    for(var angka= a ; a <= b ; a++){
        if(a % 2 === 0 )
        o += a + " genap " ;
        else
        o += a +" ganjil ";
    }
    return o ;
  }
    console.log(baris(33,99))
    console.log(baris(4,25))
    console.log(baris(99,122))