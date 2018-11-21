//Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).//
//Note: Jika sudah berhasil menyelesaikan masalah ini menggunakan built-in function .sort(), coba juga menggunakan algoritma sortingmu sendiri//

function sortByCharacter (text) {
  var huruf = 'abcdefghijklmnopqrstuvwxyz', sort = '';
for (var a = 0; a < huruf.length; a++) {
  for (var b = 0; b < text.length; b++) {
    if (huruf[a] === text[b]) {
        sort += huruf[a];
     }
    }
  }
   return sort ;
}

console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'