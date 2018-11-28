//Diberikan sebuah function yang menerima parameter berupa array, buatlah sebuah program JavaScript//
//untuk grouping score yang lulus dan yang gagal. (Gagal jika score < 75)//

function grouping (scores) {
  var Hasil ={
      pass :[],
      fail :[]
  };
   
  for(var i=0; i<scores.length;i++){
    if(scores[i] > 75){
      Hasil.pass.push(scores[i])
    }else 
      Hasil.fail.push(scores[i])
    
  }
  return Hasil
}

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));