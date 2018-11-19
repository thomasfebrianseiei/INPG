var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7]

function mode(numbers) {
    if(numbers.length === 0)
        return null;
    var mode1 = {};
    var maxE = numbers[0]
    var maxCount = 1;
    for(var i = 0; i < numbers.length; i++) {
        var e = numbers[i];
        if(mode1[e] == null)
            mode1[e] = 1;
        else
            mode1[e]++;  
        if(mode1[e] > maxCount) {
            maxE = e;
            maxCount = mode1[e];
        }
    }
    return maxE;
}
console.log(mode(numbers))