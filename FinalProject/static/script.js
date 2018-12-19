var body = document.body;


var main = document.getElementById('main');
main.className = 'menu';
var createContainer = document.createElement('div');
createContainer.setAttribute('class', 'game');
main.appendChild(createContainer);

var map = document.getElementsByClassName('game')[0];
var createSecondHeading1 = document.createElement('h1');
createSecondHeading1.innerHTML = 'Choose The Game';
map.appendChild(createSecondHeading1);

var createImageBox = document.createElement('div');
createImageBox.setAttribute('class', 'image-box');
map.appendChild(createImageBox);

var imageBox = document.getElementsByClassName('image-box')[0];
var createImage1 = document.createElement('img');
createImage1.setAttribute('id', 'image1');
createImage1.setAttribute('src', 'Assets/img/20481.jpg');
createImage1.setAttribute('alt', '2048');
createImage1.setAttribute('onclick', "imageClick('Assets/game/2048/2048.html')");
imageBox.appendChild(createImage1);

var createImage2 = document.createElement('img');
createImage2.setAttribute('id', 'image2');
createImage2.setAttribute('src', 'Assets/img/flip1.png');
createImage2.setAttribute('alt', 'Memory');
createImage2.setAttribute('onclick', "imageClick('Assets/game/BeshMatch/memory.html')");
imageBox.appendChild(createImage2);

var createImage3 = document.createElement('img');
createImage3.setAttribute('id', 'image3');
createImage3.setAttribute('src', 'Assets/img/master1.jpg');
createImage3.setAttribute('alt', 'Master');
createImage3.setAttribute('onclick', "imageClick('Assets/game/MasterMind/master_mind.html')");
imageBox.appendChild(createImage3);

function imageClick(url) {
    window.location = url;
}

        
    
