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

// ❏ Create a checkLetter function
// ❏ Create a function “stub” for the checkLetter function
function checkLetter(btn) {
// ❏ Include a parameter in the function head for the button that gets clicked
// ❏ Store all of the li elements in a variable inside checkLetter
    let checkLetter = addPhraseToDisplay(getRandomPhraseAsArray(phrases));
    console.log(checkLetter)
// ❏ Create a variable to store if a match is found and give it an initial value of null
// ❏ Loop through all of the li elements. Remember: arrays start with index 0!
// ❏ Create a conditional that compares the text of the button parameter to
// the text of the li at the current index of the loop
// ❏ If they match, add the “show” class to the li
// ❏ If they match, store the button text in the match variable

// ❏ Once the loop completes, return the match variable

}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));




