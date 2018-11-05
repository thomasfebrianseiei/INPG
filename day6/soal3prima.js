for(var i=1; i<=100; i++){
    var prime = 2;
        for(var x = 1; x <= i/2; x++){
            if(i !== 1 && i !== 0 && i !== x){
                if(i % x === 0){
                   prime++;
                 }
            }
        }
    if(prime === 3){
        console.log(i+ " prima");
    }
}