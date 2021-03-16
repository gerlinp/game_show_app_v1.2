const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
let miss = 0;
let title = document.querySelector('.title')
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
    let answer = phrases[random].split('');
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
        overlay.style.display = 'flex'
    } else if ( miss > 4 ) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex'
        title.innerText = 'Ran out of lives'

    }
    
}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
        overlay.style.opacity = '0';
        addPhraseToDisplay(answer);
});

function fadeOut() {
    const overlay = document.querySelector('#overlay');
    startButton.style.opacity = '0';
}


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


