//Create an array of Words
var character = ["Luke Skywalker", "Darth Vader", "Han Solo", "Princess Leia", "Jabba the Hutt", "Anakin Skywalker", "Lando Calrissian", "Greedo", "Chewbacca", "Aunt Beru", "Jango Fett", "Padme Amidala", "Sebulba", "Uncle Owen", "Wedge Antilles", "Count Dooku", "Poe Dameron", "General Grievous", "Qui-Gon Jinn", "Bib Fortuna", "Admiral Ackbar", "Kylo Ren", "Chirrut Imwe", "The Emperor", "Mace Windu", "Grand Moff Tarkin", "K-2SO", "C-3PO", "Darth Maul", "BB-8", "Obi-Wan Kenobi", "R2-D2", "Rey",  "Yoda", "Boba Fett"];

//Choose word randomly
var randNum = Math.floor(Math.random()*character.length);
var chosenWord = character[randNum];    
var rightWord = [];
var wrongWord = [];
var underScore = [];

//Dom manipulation
 docUnderScore = document.getElementsByClassName('underScore');
 docRightGuess = document.getElementsByClassName('rightGuess');
 docWrongGuess = document.getElementsByClassName('wrongGuess');

 console.log(chosenWord);
//Create underscores based on length of word.
let generateunderScore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    document.getElementById(generateunderScore).innerHTML = underScore;    
    }
    console.log(underScore);
}



//Get users guess
document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
// if users guess is right
    if(chosenWord.indexOf(keyword) > -1) {
    //add to right word array
        rightWord.push(keyword);
    //replace underScore with right letter    
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
    //check to see if user work matches guesses
        if(underScore.join(' ') == chosenWord) {
            alert('The Force is Strong With You!');
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});



    // docUnderScore[0].innerHTML = generateunderScore().join(' ');
//     let keyword = String.fromCharCode(event.keyCo
//      
// });

