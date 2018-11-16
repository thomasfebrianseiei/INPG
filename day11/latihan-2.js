function multiDimensi(a,b) {
  var arr1 = [];
  var D = 0 ;
  for (var i=0; i < a; i++){
    arr1.push([])
  for (var e=0; e < b; e++){
  var c = 1 ;
    arr1[i].push(e + D + c)
    } 
     D += b
  } 
  for (var z=0; z < a; z++) {
     arr1[z].splice(0,1, "first")
     arr1[z].pop()
     arr1[z].splice(b,1,"last")
  }
return arr1
}

console.log(multiDimensi(2,5))
console.log(multiDimensi(3,4))
console.log(multiDimensi(3,2))
