//Tersedia 2 input: suatu kata dan suatu huruf. Carilah berapa kali huruf muncul di dalam kata. Gunakan rekursif untuk menyelesaikan soal ini.//

function countLetters (word, letter) {
  var count = 0;
  var newSentence;
  var newword = word.length;
  
  if(newword === 0){
    return 0
  } else {
    if(word[0] === letter){
      newSentence = word.slice(1);
      count++;
      return count + countLetters (newSentence, letter);
    } else {
      newSentence = word.slice(1);
      return count + countLetters (newSentence, letter);
    }
  }
}

console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3