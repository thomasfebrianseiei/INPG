for(var angka = 3; angka <= 30; angka++) {
    if(angka % 3 === 0 )
      console.log("HACK" + angka)
    else
      if (angka % 6 === 0)
      console.log("FOX" + angka);
    else
      console.log("HACKFOX" + angka);  
    }
    