//create secretNumber
var secretNumber = 4;

//ask user for guess

var stringGuess = prompt("What's the secret number?");
var guess = Number(stringGuess);

//check guess
if (guess === secretNumber) {
    alert("YOU GOT IT");

//wrong answer
} 
else if(guess < 4){
    alert("Try again. The number were to low.");
}

else {
    alert("Try again. The number were too high.");
}

