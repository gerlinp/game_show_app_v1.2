const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const startGame = document.querySelector('.btn__reset');
const playAgain = document.querySelector('.btn_restart');
let miss = 0;
let title = document.querySelector('.title')
let displayedAnswer = ''
const phrases = [
    'May the Force be with you',
    'Theres no place like home',
    'Break a leg',
    'Just keep swimming',
    'To infinity and beyond' 
];

// return a random phrase from an array
const getRandomPhraseArray = arr => {
    let random = Math.floor(Math.random() * arr.length);
    let answer = arr[random].split('');
    displayedAnswer = arr[random];
    return answer;
}   
let answer = getRandomPhraseArray(phrases);

// adds the letters of a string to the display
const addPhraseToDisplay =  arr => {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        phrase.appendChild(li);
        if (li.textContent !== ' ') {
            li.className = 'letter'; 
        } else {
            li.className = 'space'
        };
    }
};

addPhraseToDisplay(answer);

// check if a ltter is in the phrase
const checkLetter = button => {
    let lis = document.getElementById("phrase").getElementsByTagName("li");
    let match;
    for (let i = 0; i < lis.length; i++) {
        if (button.textContent === lis[i].textContent.toLowerCase() ) {
            lis[i].classList.add('show')
            match = button;
        }
    } 
    return match;
    
}

// check if the game has been won or lost
const checkWin = () => {
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');
    if (letter.length === show.length) {
        overlay.classList.add('win');
        startGame.style.display = 'none'
        playAgain.style.display = 'flex'
        overlay.style.display = 'flex'
        title.innerText = `Sucess!
        The answer was: 
        "${displayedAnswer}"`
    } else if ( miss > 4 ) {
        overlay.classList.add('lose');
        startGame.style.display = 'none'
        playAgain.style.display = 'flex'
        overlay.style.display = 'flex'
        title.innerText = 'Ran out of lives'
    }
}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
        overlay.style.display = 'none';
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    if (e.target.classList.contains('chosen')) {
        console.log('Already chosen');
    } else if (e.target.tagName === 'BUTTON') {
            e.target.classList.add('chosen')
            if (checkLetter(e.target) === undefined) {
                let tries = document.querySelector('.tries')
                let ol =  document.querySelector('ol')
                ol.removeChild(tries);
                miss++
        }
    } checkWin();
});


// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);







/------------------------start----------------------/ 



