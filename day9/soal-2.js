function iterationNumber(a,b){
    var baris = [];
        for(var num = a; num < b; num ++){
          if(num % 2 === 0 )
        baris.push(num + " genap ");
          else
        baris.push(num +" ganjil ");
    }   
      return baris;
 }
    
console.log(iterationNumber(1, 100));  