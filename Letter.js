function Letter(letters){
   this.char = letters;
   this.letterGuessed = false;
   this.letterOrDash = function(){
       return !(this.letterGuessed)? "-":this.char;
   };
    this.check = function(){
        if ( letters === letterChar){
            console.log(letterChar);
            return letterChar;
        }else{
            console.log("-");
            //return aceholder;
        }
    }
    this.updateFunction = function(Char){
        if( char === letterChar){
            letterGuessed=true;
            console.log(letterGuessed);
        }
    }

};
// function dashes() {
//     var guessedword = [];
//     console.log(" this is random " + newword);
//     for (var i = 0; i < newword.length; i++) {
//         guessedword[i] = "-";
//     }
//     console.log("text dashes value  is " + guessedword);
//     return guessedword;
// }

module.exports = Letter;