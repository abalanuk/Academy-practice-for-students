"use strict";


var location1 = Math.floor(Math.random()*5);
var location2 = location1 + 1;
var location3 = location2 + 2;//тут ошибка постановки корабля

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (!isSunk) {
	guess = prompt("Please enter a number from 0 to 6");
	if (guess < 0 || guess > 6){
		alert("Please enter valid number");
	} else {
		guesses++;
		if (guess == location1||guess == location2||guess == location3) {
			alert("HIT!");
			hits++;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship");
			}
		} else {
			alert("MISS");
		}
	}
}

alert("Your score is " + guesses + " hits. Better luck next time.");
