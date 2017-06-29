//BlackJack

/**
* @constructor Game();
* Create Game
*/
function Game() {
	/**
	* @param {string[]} this.players players array
	* Initialize players collection with the given properties
	* I created two properties with the value of []
	* One to record the numeric value of the hand, one to record the string value of a given face card.
	* @example
	* console.log(game.players[player].cardNameSuit); // [3, "Diamonds", "Jack", "Clubs"] [6, "Hearts", 6, "Clubs"] [8, "Hearts", 2, "Diamonds"] [5, "Hearts", 2, "Hearts"]
	* console.log(game.players[player].cards); // [6, 7] [10, 4] [3, 2] [10, 11]
	*/
	this.players = [
		{
			name: "Dealer",
			cards: [],
			cardNameSuit: [],
			total: 0
		},
		{
			name: "Player 1",
			cards: [],
			cardNameSuit: [],
			total: 0
		},
		{
			name: "Player 2",
			cards: [],
			cardNameSuit: [],
			total: 0
		},
		{
			name: "Player 3",
			cards: [],
			cardNameSuit: [],
			total: 0
		}
	];
	/**
	* @param {string[]} this.suitNames array of suit names
	*/
	this.suitNames = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
	/**
	* @param {string[]} this.deck array for the deck of cards
	* Create deck of cards - an array containing four subarrays(suits).
	*/
	this.deck = [
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
	];
	/**
	* Deal - For each player in the players(collection/array), generate two random cards.
	* @param {number} suit A random whole number between 1 & this.deck.length(4)
	* @param {number} card A random whole number between 1 & this.deck[suit].length(13)
	* @example
	* game.deal();
	* console.log( this.players[player].cards, this.players[player].total ); // [9, 6], 15 [2, 5], 7 [10, 11], 21 [4, 11] 15 
	* Each random card value is assigned to this.players[player].total = this.players[player].total + this.deck[suit][card].
	* After each random card selection, the value of that choice is removed from this.deck via splice(startIndex, deleteCount)
	* Account for Ace - If this.players[player].total === 22 assign this.players[player]total === 12 
	*/
	this.deal = () => {
		let self = this;
		for( let i = 0; i < 2; i++ ) {
			for ( var player in self.players ) {
				let suit = Math.floor( Math.random() * (self.deck.length));
				let card = Math.floor(Math.random() * (self.deck[suit].length));
				self.players[player].cardNameSuit.push(self.deck[suit][card]);
				switch (self.deck[suit][card]) {
					case 'Ace': 
						self.deck[suit][card] = 11;
						break;
					case 'King':
					case 'Queen':
					case 'Jack': 
						self.deck[suit][card] = 10;
						break;
				}
				self.players[player].cards.push(self.deck[suit][card]);
				self.players[player].cardNameSuit.push(self.suitNames[suit]);
				self.players[player].total += self.deck[suit][card];
				self.deck[suit].splice(card, 1);				
				if ( self.players[player].total === 22 ) {
					self.players[player].total = 12;
				}
			}
		}
	}
	/**
	*
	* Winner - determine the winner based on the output of game.deal();
	* @param {number} greatest The greatest sum of the dealt hands.
	* @param {string} holder The name of the player with the greatest hand.
	* @param {number} tie The value of the tying hand should there be a tie.
	* @param {string} tieHolder The name of the player with the tying hand.
	* @example
	* game.winner();
	* console.log(game.winner()); // The winner is Player 2 with a total of 20 || It's a tie between Player 1 and Dealer with a score of 21
	*/
	this.winner = () => {
		let self = this;
		let greatest = 0;
		let holder = '';
		let tie = 0;
		let tieHolder = '';
		for(var player in self.players) {
			if(self.players[player].total > greatest) {
				greatest = self.players[player].total;
				holder = self.players[player].name;
			} else if (self.players[player].total === greatest) {
				tie = self.players[player].total;
				tieHolder = self.players[player].name;
			}
		}
		if (tie === greatest) {
			return "It's a tie between " + tieHolder + " and " + holder + " with a score of " + greatest;
		} else {
			return 'The winner is ' + holder + ' with a total of ' + greatest + '!';
		}
	}


}
/**
* Create a new instance of Game();
*/
game = new Game();
console.log('Playing a game of BlackJack with four players!');
/**
* Invoke the this.deal() method on the new Game() assigned to game.
*/
game.deal();
/**
* For each player in players(collection/array), console.log their name, current cards(hand) and they total sum of that hand.
*/
for(var player in game.players) {
	console.log(game.players[player].name, 
		'Hand:', 
		game.players[player].cardNameSuit[0],
		'of', 
		game.players[player].cardNameSuit[1],
		',', 
		game.players[player].cardNameSuit[2],
		'of', 
		game.players[player].cardNameSuit[3],
		'=>', 
		'Total:', 
		game.players[player].total
	);
}
/**
* Invoke the this.winner() method on the Game() to determine the winner & log the winner to the console.
*/
console.log(game.winner());