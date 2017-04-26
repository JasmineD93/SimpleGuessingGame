//Create secretNumber
var secretNumber = 4;

//Ask user for guess
var guess = Number(prompt("Guess a Number"));

//Guess Check
if (guess === secretNumber){
	alert("You guessed correctly");
}

else if(guess > secretNumber){
	alert("Too high. Guess again!")
}

else {
	alert("Too low. Guess again!")
}