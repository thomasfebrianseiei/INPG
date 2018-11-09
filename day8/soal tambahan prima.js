function PrimeNum(a,b){
    var prime = [];
    for(var num = a; num < b; num ++){
        var aprimepenentu = [];
        for(var d = 1; d <= num; d++){
            if(num % d === 0){
                aprimepenentu.push(d);
            }      
        }
        if(aprimepenentu.length === 2){
            prime.push(num);
        }
    }
    return prime;
}
console.log(PrimeNum(1, 100));  