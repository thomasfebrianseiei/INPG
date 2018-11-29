//Diberikan sebuah function yang menerima 1 parameter berupa string yang berisi value dan dipisahkan dengan koma (Comma Separated Values).//
//Implementasikan function ini supaya bisa mengembalikan value object literal. Sesuaikan dengan format di atas.//

function csvToObject (text) {
    var text2 = text.split(',');
    var obj= {
    name:"", 
    email:"",
    gender:""
    };
    var keys= Object.keys(obj)
 for(var i = 0; i < text2.length; i++){ 
    obj[keys[i]] = text2[i]
   } 
  return obj;
}

console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
 // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

 console.log(csvToObject('Dhani,dhani@mail.com,male'));
 // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }