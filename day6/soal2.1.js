for(var angka = 3; angka <= 30; angka+= 3){
    if(angka % 15 === 0)
      console.log("HACKFOX" + angka);  
    else if(angka % 6 === 0 && angka % 3 === 0)
      console.log("HACK & FOX" + angka);
    else if(angka % 3 === 0)
      console.log("HACK" + angka);  
    }