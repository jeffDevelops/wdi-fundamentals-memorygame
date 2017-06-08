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
var cardElements = [];
var cardsInPlay = [];
var isMatch = false;

var modal = document.createElement('div');
var msg = document.createElement('h2');

modal.setAttribute('class', 'match-modal');
msg.setAttribute('class', 'match-message');


var clearModal = function() {
	modal.classList.add('modal-animation');
	modal.classList.remove('match-modal');
	msg.classList.add('msg-animation');
	msg.classList.remove('match-message');	
}

var checkForMatch = function() { //Once there are two cards in the cardsInPlay array, we can see whether they're the same suit
		if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
			//Match message
			msg.textContent = 'You found a match!';
			//Assemble the modal
			document.getElementById('game-board').appendChild(modal);
			document.querySelector('.match-modal').appendChild(msg);
			//Clear the modal
			setTimeout(clearModal, 250);
			//Reset cardsInPlay Array
			cardsInPlay = [];
		} else {
			//Not a match message
			msg.textContent = 'Not a match.';
			//Assemble the modal
			document.getElementById('game-board').appendChild(modal);
			document.querySelector('.match-modal').appendChild(msg);
			//Clear the modal
			setTimeout(clearModal, 250);
			//Flip the cards back
			window.setTimeout(function() {
				for(i = 0; i < cardElements.length; i++) {
					cardElements[i].removeAttribute('src', cards[cardId].cardImage)
					cardElements[i].setAttribute('src', 'images/back.png');
				}
			}, 1500);

			//Reset cardsInPlay array
			cardsInPlay = [];

			cardElements.forEach(function(element) {
				element.addEventListener('click', flipCard);
			});
		}
}

var flipCardsBack = function() { //THIS FUNCTION ISN'T RUNNING FOR SOME REASON
	console.log("flipCardsBack() running");

}

var flipCard = function() { //Simulates flipping one card by storing the chosen card into the cardsInPlay array
	cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped a " + cards[cardId].rank + " card.");
	cardsInPlay.push(cards[cardId]); //push the card the user clicked up to the array
	if(cardsInPlay.length === 2) { //If there are two cards in the array
		if(cardsInPlay[0] !== cardsInPlay[1]) { //and as long as the user hasn't clicked the same card twice...
			checkForMatch();
		} else { //if they have clicked the same card twice,
			cardsInPlay = [];//clear the array
			this.setAttribute('src', 'images/back.png');//flip all cards back
			msg.textContent = "Hey! Don't peek!";
			document.getElementById('game-board').appendChild(modal);
			document.querySelector('.match-modal').appendChild(msg);
			//Clear the modal
			setTimeout(clearModal, 250);
		}
	}
}

var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		cardElements.push(cardElement);
	}
}

createBoard();




