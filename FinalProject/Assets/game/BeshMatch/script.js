    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            playGame()
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            flipCard(card);
        });
    });

    var cardsArray = cards;
    var totalTime = 100;
    var timeRemaining = totalTime;
    var timer = document.getElementById('time-remaining')
    var ticker = document.getElementById('flips');

    var bgMusic = new Audio('Assets/Audio/Avengers_InfinityWar_Soundtrack.mp3');
    var flipSound = new Audio('Assets/Audio/flip.wav');
    var matchSound = new Audio('Assets/Audio/match.wav');
    var victorySound = new Audio('Assets/Audio/victory.wav');
    var gameOverSound = new Audio('Assets/Audio/GameOver.mp3');
    
        
function startMusic() {
    bgMusic.play();
    bgMusic.volume = 0.5;
    bgMusic.loop = true;
    }
    
function stopMusic() {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    }   

function playGame () {
    totalClicks = 0;
    timeRemaining = totalTime;
    cardToCheck = null;
    this.matchedCards = [];
    busy = true;
    setTimeout(() => {
        startMusic();
        shuffleCards(cardsArray);
        countdown = startCountdown();
        busy = false;
    }, 200)
    hideCards();
    timer.innerText = timeRemaining;
    ticker.innerText = totalClicks;
}
function startCountdown() {
    return setInterval(() => {
        timeRemaining--;
        timer.innerText = timeRemaining;
        if(timeRemaining === 0)
         gameOver();
    }, 1000);
}
function gameOver() {
    clearInterval(countdown);
    gameOverSound.play()
    stopMusic()
    document.getElementById('game-over-text').classList.add('visible');
}
function victory() {
    clearInterval(countdown);
    victorySound.play()
    stopMusic()
    document.getElementById('victory-text').classList.add('visible');
}
function hideCards() {
    cardsArray.forEach(card => {
    card.classList.remove('visible');
    card.classList.remove('matched');
    });
}
function flipCard(card) {
    if(canFlipCard(card)) {
        flipSound.play();
        totalClicks++;
        ticker.innerText = totalClicks;
        card.classList.add('visible');

        if(cardToCheck) {
            checkForCardMatch(card);
        } else {
            cardToCheck = card;
        }
    }
}
function checkForCardMatch(card) {
    if(getCardType(card) === getCardType(cardToCheck))
        cardMatch(card, cardToCheck);
    else 
        cardMismatch(card, cardToCheck);

    cardToCheck = null;
}
function cardMatch(card1, card2) {
    matchedCards.push(card1);
    matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchSound.play()

    if(matchedCards.length === cardsArray.length)
      victory();
}
function cardMismatch(card1, card2) {
    busy = true;
    setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        busy = false;
    }, 1000);
}
function shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}
function getCardType(card) {
    return card.getElementsByClassName('card-value')[0].src;
}
function canFlipCard(card) {
    return ! busy && ! matchedCards.includes(card) && card !== cardToCheck;
}

    
  
    
    