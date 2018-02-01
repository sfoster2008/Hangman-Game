var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var character = ["Luke Skywalker", "Darth Vader", "Han Solo", "Princess Leia", "Jabba the Hutt", "Anakin Skywalker", "Lando Calrissian", "Greedo", "Chewbacca", "Aunt Beru", "Jango Fett", "Padme Amidala", "Sebulba", "Uncle Owen", "Wedge Antilles", "Count Dooku", "Poe Dameron", "General Grievous", "Qui-Gon Jinn", "Bib Fortuna", "Admiral Ackbar", "Kylo Ren", "Chirrut Imwe", "The Emperor", "Mace Windu", "Grand Moff Tarkin", "K-2SO", "C-3PO", "Darth Maul", "BB-8", "Obi-Wan Kenobi", "R2-D2", "Rey",  "Yoda", "Boba Fett"];

function character () {
    rand = Math.floor(Math.random()*character.length);
    word = character[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "character";
    hangman();
}

function hangman() {
    var y = x-1;
    var spaces = 0;
    var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-");
    for(z = 0); z < word.length; z++){
        var letter = word.substring(y,x);
        if validChar.indexOf(letter) > -1{
            x--;
            y--;
        }
        else{
            alert("Please remove any special characters.  Hyphens are okay by the way!");
        }
    }
    x = word.length;
    y = x-1;
    while (x>0) {
        numChar++;
        var letter = word.substring(y,x);
        if(letter === " ") {
            document.getElementById('letter'+x).innerHTML = "&nbsp"
        }
    }
}
