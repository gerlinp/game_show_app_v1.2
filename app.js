const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const reset = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
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
    return phrases[random];
};









