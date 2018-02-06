
//Create an array of Words
var element = ["hydrogen", "helium", "nitrogen", "carbon", "oxygen", "argon", "xenon", "radon", "iron", "tin", "flourine", "sodium"];

//Choose word randomly
var randNum = Math.floor(Math.random()*element.length);
var chosenWord = element[randNum];    
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
        docUnderScore[0].innerHTML = underScore.join(' ');

    }
    return underScore;
}
console.log(generateunderScore());

//Get users guess
    document.addEventListener('keypress', (event) => {
        let keyword = String.fromCharCode(event.keyCode);
        console.log(event);
    // if users guess is right
        if(chosenWord.indexOf(keyword) > -1) {
        //add to right word array
            rightWord.push(keyword);
        //replace underScore with right letter    
            underScore[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join(' ');
            docRightGuess[0].innerHTML = rightWord;            
        //check to see if user work matches guesses
            if(underScore.join('') == chosenWord) {
                alert('You Win!');
            }
        }
        else {
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord;
        }
    });
