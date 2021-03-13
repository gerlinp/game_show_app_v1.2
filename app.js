const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const reset = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let miss = '';
let phrases = [
    'May the Force be with you',
    'Theres no place like home',
    'Break a leg',
    'Just keep swimming',
    'To infinity and beyond' 
];
reset.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) { // Selecting a random phrase
    let random = Math.floor(Math.random() * arr.length);
    return arr[random].split('');
};


function addPhraseToDisplay(array) { // Set random phrase chose to be displayed
    for (i = 0; i < array.length; i++) {    
        let li = document.createElement('li');
        li.textContent = array[i];

        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }        
        console.log(li)
    }
};


addPhraseToDisplay(getRandomPhraseAsArray(phrases));




