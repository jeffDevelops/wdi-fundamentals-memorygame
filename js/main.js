var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	console.log("User flipped a " + cards[cardId].rank + " card.");
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log("of " + cards[cardId].suit);
	checkForMatch();
}

flipCard(0);
flipCard(2);


