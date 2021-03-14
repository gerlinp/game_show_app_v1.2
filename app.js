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


// function addPhraseToDisplay(array) { // Set random phrase chose to be displayed
//     for (i = 0; i < array.length; i++) {    
//         let li = document.createElement('li');
//         li.textContent = array[i];
//         if (li.textContent === ' ') {
//             li.className = 'space';
//         } else {
//             li.className = 'letter';
//         }    
//         array.push(li)
//     };
//     return array;
// };

// Create a checkLetter function
// Create a function “stub” for the checkLetter function
// Include a parameter in the function head for the button that gets clicked
// function checkLetter(arr) {
// Store all of the li elements in a variable inside checkLetter
//     let randomPhrase = addPhraseToDisplay(getRandomPhraseAsArray(phrases));
// // Create a variable to store if a match is found and give it an initial value of null
//     let match = [];
// // Loop through all of the li elements. Remember: arrays start with index 0!
//     for (i = 0; i < randomPhrase.length; i++) {
//         // Create a conditional that compares the text of the button parameter to the text of the li at the current index of the loop
//         if (arr === randomPhrase.textContent) {
//         // If they match, add the “show” class to the li
//             randomPhrase.className = show    
//         // If they match, store the button text in the match variable
//             match.push(randomPhrase.textContent);
//         }
//     }
//     return match;
// }

// Add an event listener to the keyboard 
// Start by creating an event listener for the qwerty element that listens for the “click” event. 
// qwerty.addEventListener('click',  (e) => {
//     let event =  e.target.name
// // Use a conditional to filter out clicks that don’t happen on the buttons or if the button already has the “chosen” class 
//     if (event === 'BUTTON' && e.target.className !== 'chosen' ) {
//         // Add the “chosen” class to the button that was pressed.
//         event = 'chosen';
//     }
//     // Call the checkLetter function and store the results in a variable. 
//     checkLetter(event);

// });

 

// If the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter 
// Related Video: JavaScript and the Dom: What is an Event? 
// Related Video: JavaScript and the Dom: Listening for Events with addEventListener 







