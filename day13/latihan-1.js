var password = 'dimitri w';
function removeSpaces (password) {
  return password.split(' ').join('');
}

function reverseText (password) {
    var newString = "";
    for (var i = password.length - 1; i >= 0; i--) {
        newString += password[i];
    }
    return newString;
}

function updateVowels (password) {
    var vocal = [
        ['a', 'b'],
        ['e', 'f'],
        ['i', 'j'],
        ['o', 'p'],
        ['u', 'v'],
        ['A', 'B'],
        ['E', 'F'],
        ['I', 'J'],
        ['O', 'P'],
        ['U', 'V'],
      ];
      var alpabet = '';
      var Find = false;
      for (var i = 0; i < password.length; i++) {
        for (var x = 0; x < vocal.length; x++) {
          if (password[i] === vocal[x][0]) {
            alpabet += vocal[x][1];
            Find = true;
          }
        }
        if (Find !== true) {
          alpabet += password[i];
        }
        Find = false;
      }
      return alpabet;
    }
   
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);