var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female,wondi:wondi@mail.com:male';

function split(text) {
var tampung = text.split(',');
var tampung2 = [];
    for(var i=0;i<tampung.length;i++) {
    tampung2.push(tampung[i].split(":"))
    }
    return tampung2
}

console.log(split(text))
