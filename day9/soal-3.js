function iterationNumber(a,b){
    var baris = [];
  for(var angka = a; angka <=b; angka++){
    else if(angka % 15 === 0) 
      baris.push('KASKUS'); 
    else if(angka % 6 === 0) 
       baris.push('KUS'); 
    else if(angka % 3 === 0) 
      baris.push('KAS'); 
    else 
      baris.push(angka);
     }return baris;
}
console.log(iterationNumber(1,30));  
