var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() { //Once there are two cards in the cardsInPlay array, we can see whether they're the same suit
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again!");
		}
	}
}

var flipCard = function(cardId) { //Simulates flipping one card by storing the chosen card into the cardsInPlay array
	console.log("User flipped a " + cards[cardId] + " card.");
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);


