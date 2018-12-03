//Tersedia 2 input: suatu kata dan suatu huruf. Carilah berapa kali huruf muncul di dalam kata. Gunakan rekursif untuk menyelesaikan soal ini.//

function countLetters (word, letter) {
  var count = 0
  var newword = word.slice(1)

 if (word.length === 0) {
    return count
  }
 if(word[0] === letter) {
    count++
  } 

  return count + countLetters(newword, letter)
}

console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3