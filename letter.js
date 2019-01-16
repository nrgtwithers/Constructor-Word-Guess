// Constructor
function letter(Letter) {
    this.Letter = Letter;
    this.guess = false;
    // Checking if correct
    this.checkIf_correct = function (guess) {
        if (guess === this.Letter){
            this.guess = true;
        }
    }
    //Correct guess = a, Incorrect guess = _
    this.insertLetter = function () {
        if (!this.guess) {
            return "_";
        } else {
            return this.Letter
        }
    }
}
console.log(`test`)
module.exports = letter;