var password = 'dimitri w';
function removeSpaces (password) {
  return password.split(' ').join('');
}

function reverseText (password) {
  return password.split('').reverse().join('');
}

function updateVowels (password) {
     password = password.split('a').join('b')
     password = password.split('i').join('j')
     password = password.split('u').join('v')
     password = password.split('e').join('f')
     password = password.split('o').join('p')
     password = password.split('A').join('B')
     password = password.split('I').join('J')
     password = password.split('U').join('V')
     password = password.split('E').join('F')
     password=  password.split('O').join('P')
     
	return password
}


var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);