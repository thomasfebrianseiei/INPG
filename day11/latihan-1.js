function multiDimensi(a, b) {
    var arr = [];
    var arr1 = [];
    for (var i=1; i <= b; i++){
      arr.push(i)
    for (var e=1; e <= a; e++){
      arr1.push(arr)
    }
  }
      return arr1;
}
console.log(multiDimensi(2,5))
console.log(multiDimensi(3,4))
console.log(multiDimensi(5,2))
