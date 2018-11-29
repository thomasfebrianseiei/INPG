//Implementasikan function di atas agar mengembalikan object baru sesuai dengan pattern yang diberikan di test cases//

function complexConversion (text) {
  var text2 = text.split(",");
  var obj = {};
  var fix = []

  for(var i = 0; i < text2.length; i++) { 
   fix[i] = text2[i].split(':')
   obj[fix[i][0]] = fix[i][1]
 }
return obj
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }