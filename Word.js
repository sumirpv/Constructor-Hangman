var letter = require("./Letter.js");
function Word(word){
    this.word = word;
    this.letter =[];
    this.guessedWord=false;
    this.letterArray= function(){
        for(var i=0; i<this.word.length;i++){
        (this.letter).push(new letter(this.word[i]));
    }
    this.checkLetter = function(guessed){
        var returnLetter=0;
        for ( var i=0; i< this.letter.length; i++){
            if ( this.letter[i].letter === guessed){
                this.letter[i].appear = true;
                returnLetter++;
            }
        }
        return returnLetter;
        
    }
    this.wordDisplay = function(){
        var display ="";
        for( var i=0; i< this.letter.length; i++){
            display += this.letter[i].letterOrDash();
        }
        return display;
    }
    this.findWord = function() {
        if(this.letter.every(function (newletter){
            return newletter.appear === true;
        })){
            this.guessedWord =true;
            return true;
        }
    };

    };
    
}


// word.prototype.findLetter = function(letter){
// 	var lowerLetter = letter.toLowerCase();
// 	if (this.guessesMade.indexOf(lowerLetter) != -1) {
// 		return "Duplicate";
// 	} 
// 	this.guessesMade += lowerLetter; //Record the guess
// 	for(var i=0; i<this.letters.length;i++){
// 		if(this.letters[i].value.toLowerCase() == lowerLetter){
// 		this.letters[i].show = true;
// 		}
// 	}
// };

var word1= new Word("egg");
//console.log( word1.word);
word1.letterArray();

// var let = new letter("a","c");
// console.log(let.letterGuessed);
// let.check();

module.exports = Word;