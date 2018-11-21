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
      var string = "";
      var chart = "";
   for(i=0; i < password.length; i++){  
        if (password[i] == 'i') {
            chart = 'j';
            string = string + chart;
        }
         if (password[i] == 'a') {
            chart = 'b';
            string = string + chart;
        }
         if (password[i] == 'u') {
            chart = 'v';
            string = string + chart;
        }
        if (password[i] == 'e') {
            chart = 'f';
            string = string + chart;
        }
         if (password[i] == 'o') {
             chart = 'p';
            string = string + chart;
        }
         else {
            chart = password[i];
            string = string + chart;
        }
    }
    return string
}
     

var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);