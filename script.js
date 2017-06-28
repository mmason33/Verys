//BlackJack


/**************** VERSION 4 *********************/

function Game() {
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

	this.deck = [
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
	];


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
				greatest = self.players[player].total;
				holder = self.players[player].name;
				tie = greatest;
				tieHolder = self.players[player].name;
			}
		}
		if (self.players[player].total === greatest) {
			return "It's a tie between " + tieHolder + " and " + holder + " with a score of " + greatest;
		} else {
			return 'The winner is ' + holder + ' with a total of ' + greatest;
		}
	}


}

game = new Game();
game.deal();
//game.winner();

for(var player in game.players) {
	console.log(game.players[player].name);
	console.log(game.players[player].cards);
	console.log(game.players[player].total);
	// console.log('Total:', game.players[player].cards[0] + game.players[player].cards[1]);
}

console.log(game.winner());

/************** END VERSION 4 ******************/

