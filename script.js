//BlackJack

/**
* Create Game object
*/
function Game() {
	/**
	* @param {string[]} this.players players object
	* Initialize players collection with the give properties
	*/
	this.players = [
		{
			name: "Dealer",
			cards: [],
			total: 0
		},
		{
			name: "Player 1",
			cards: [],
			total: 0
		},
		{
			name: "Player 2",
			cards: [],
			total: 0
		},
		{
			name: "Player 3",
			cards: [],
			total: 0
		}
	];
	/**
	* @param {string[]} this.deck array for the deck of cards
	* Create deck of cards - an array containing four subarrays(suits).
	*/
	this.deck = [
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
	];
	/**
	* Deal - For players in players(collection/array), generate two random cards.
	* @param {number} suit A random number between 1 & this.deck.length(4)
	* @param {number} card A random number between 1 & this.deck[suit].length(13)
	* @example
	* game.deal();
	* console.log( players[player].cards, players[player].total ); // [9, 6], 15 [2, 5], 7 [10, 11], 21 [4, 11] 15 
	* Each random card value is assigned to this.players[player].total = this.players[player].total + this.deck[suit][card].
	* After each random card selection, the value of that choice is removed from this.deck via splice(startIndex, deleteCount)
	*/
	this.deal = () => {
		let self = this;
		for(let i = 0; i < 2; i++) {
			for(var player in self.players) {
				let suit = Math.floor(Math.random() * (self.deck.length));
				let card = Math.floor(Math.random() * (self.deck[suit].length));
				self.players[player].cards.push(self.deck[suit][card]);
				self.players[player].total += self.deck[suit][card];
				self.deck[suit].splice(card, 1);
			}
		}
	}
	/**
	*
	* Winner - determine the winner based on the output from game.deal();
	* @param {number} greatest The greatest sum of the dealt hands.
	* @param {string} holder The name of the player with the greatest hand.
	* @param {number} tie The value of the tying hand should there be a tie.
	* @param {string} tieHolder The name of the player with the tying hand.
	* @example
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
			return 'The winner is ' + holder + ' with a total of ' + greatest;
		}
	}


}
/**
* Create a new instance of Game();
*/
game = new Game();
/**
* Invoke the this.deal() method on the new Game() Object assigned to game.
*/
game.deal();
/**
* For each player in players(collection/array), console.log their name, current cards(hand) and they total sum of that hand.
*/
for(var player in game.players) {
	console.log(game.players[player].name);
	console.log(game.players[player].cards);
	console.log(game.players[player].total);
}
/**
* Invoke the this.winner() method on the Game() Object to determine the winner & log the winner to the console.
*/
console.log(game.winner());