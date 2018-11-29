//Implementasikan function di atas agar mengembalikan key yang memiliki value saja (bukan undefined)//

function deleteUndefinedKeys (object) {
   var keys= Object.keys(object)
  
 for(var i = 0; i < keys.length ; i++){ 
   if(object[keys[i]] === undefined){
     delete object[keys[i]];
   }
 }
   return object; 
}
 
 console.log(deleteUndefinedKeys({
   name: 'Dimitri',
   age: undefined,
   email: 'dimitri@mail.com'
 }));
 // { name: 'Dimitri', email: 'dimitri@mail.com' }
 
 console.log(deleteUndefinedKeys({
     name: undefined,
     age: undefined,
     email: undefined
   }));
   // {}