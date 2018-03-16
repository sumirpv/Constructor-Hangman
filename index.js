var letter = require("./Letter.js");
var word = require("./Word.js");
var inquirer = require('inquirer');
var wordlist = ["apple", "pear", "berry", "mango", "peach", "plum", "orange"];
var guess= 10
var guessedLetters=[];
;function randomword() {
    var randnum = [Math.floor(Math.random() * wordlist.length)];
    var word = wordlist[randnum];
    return word;
}
var newword = randomword();
// if(guessedLetters.length > 0){
//     guessedLetters = []
//   }
inquirer.prompt([
    {
    message : "Lets play Y/N ?",
    type : "confirm",
    name : "game"

    }
]).then(answers => {
    if(answers.game){
        startGame();
    }
    
});