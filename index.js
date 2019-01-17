//Dependencies
var word = require("./word.js");
var inquirer = require("inquirer");

//Variables
var lettersChosen;
var limitedGuesses;
// Words to guess
var guessingWords = ["npm", "node", "javascript", "jquery", "github", "heroku", "mysql", "html", "css"]

// TEST
// console.log(guessingWords)

//Prompts the game to start
function start() {
    console.log(``);
    console.log(`>>>>>>>> Welcome to Guess that Word! <<<<<<<<`);
    console.log(`------------Web developer's edition----------`)
    console.log(``);
    lettersChosen = [];

    inquirer
        .prompt([{
            type: "confirm",
            name: "confirmStart",
            message: "Would you like to start the game?",
            default: true
        }
        ])
        .then(function (choice) {
            if (choice.confirmStart == true) {
                play();
            } else {
                console.log(``);
                console.log(`Why not? You're missing out on some real fun.`)
                console.log(``);
            }
        })
}

start();

function play() {
    limitedGuesses = 10;
}

play();

function pickWord() {

}
pickWord();


