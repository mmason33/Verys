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

	/*this.winner = () => {
		let self = this;

		for(var player in self.players) {

			self.players[player].total = self.players[player].cards[0] + self.players[player].cards[1];
			console.log(self.players[player].name, self.players[player].total);
		}

	}*/


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

/************** END VERSION 4 ******************/


// function BlackJack() {

// 	this.playerList = [ 'Dealer', 'Jack', 'Jill', 'John', 'Jane'];
// 	this.cards = [ 
// 		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 		[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
// 	];

// 	this.randomCards = () => {

// 		for ( let i = 0; i < this.playerList.length; i++ ) {

// 			let hand = this.cards[i][3];
// 			console.log(this.cards[i]);

// 		}

// 	}

// }


// const game = new BlackJack();
// game.randomCards();

// class BlackJack {
// 	constructor() {

// 		let playerHands = [];
// 		let players = {
// 			dealer: '',
// 			one: '',
// 			two: '',
// 			three: ''
// 		}
// 		// let dealer = ['Dealer'];
// 		// let player1 = ['Jack'];
// 		// let player2 = ['Jill'];
// 		// let player3 = ['John'];
// 		let cards = [
// 			[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 			[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 			[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 			[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
// 		];
// 		let firstCard;
// 		let secondCard;
// 		let total;
// 		let hand;

// 		this.randomCards = (player) => {

// 			for ( let i = 0; i < cards.length; i++) {

// 				firstCard = cards[i][Math.floor(Math.random() * cards[i].length)];
// 				secondCard = cards[i][Math.floor(Math.random() * cards[i].length)];
// 				hand = [firstCard, secondCard];
// 				total = firstCard + secondCard;
// 				players.player = hand[i];
// 				console.log(players.player);
				
// 			}
// 		}



// 	}
// }

// const game = new BlackJack();
// game.randomCards(this.dealer);
// game.randomCards(this.one);
// game.randomCards(this.two);
// game.randomCards(this.three);
// let dealer;
// let player1;
// let player2;
// let player3;
// let total;


/*

ES6
ENCAPSULATE LOGIC
CLASS OR OBJECT
WRITE DOCS
ACES EVAL METHOD

*/

// let players = ['Dealer', 'Player One', 'Player Two', 'Player Three'];
// let cards = [
// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
// ];

// let list = [];


// function blackjack(cards,playersArray) {

// 	console.log('Playing a game of BlackJack with four players!');
// 	// setTimeout( function() {
// 		console.log('Shuffling');
// 	// },1000);

// 	// setTimeout( function() {
// 		for( let i = 0; i < cards.length; i++ ) {
// 			let firstCard = cards[i][Math.floor(Math.random() * cards[i].length)];
// 			let secondCard = cards[i][Math.floor(Math.random() * cards[i].length)];
// 			let total = firstCard + secondCard;
// 			list.push(total);
// 			console.log(playersArray[i], firstCard,secondCard, total );
// 		}
// 	// }, 2000);

// 		let bestHand = list.indexOf(Math.max(...list));
// 		let secondBest = list.splice(list.indexOf(Math.max(...list)), 1);
// 		let thirdBest = list.splice(list.indexOf(Math.max(...list)), 1);
// 		let fourthBest = list.splice(list.indexOf(Math.max(...list)), 1);
// 		console.log(bestHand, players[bestHand], secondBest, thirdBest, fourthBest);

// 		 this.winner = (a, b, c, d) => {
// 			if ( a <= 21 && a > b, c, d) {
// 				console.log(players[bestHand]);
// 			} else if ( a === b, c, d) {
// 				console.log('tie', a);
// 			}
// 		}

// 		console.log(winner(bestHand, secondBest, thirdBest, fourthBest));

// 	// setTimeout( function() {
// 	// 	console.log(players[list.indexOf(Math.max(...list))] + ' Wins!', 'Score ' + Math.max(...list));
// 	// }, 3500);


// }


// blackjack(cards, players);


// let a = [8,2,3,8]
// console.log(a.indexOf(Math.max(...a)));





		// let random1 = Math.floor(Math.random() * cards[i].length);
		// let random2 = Math.floor(Math.random() * cards[i].length);
		// let firstCard = cards[i][random1];
		// let secondCard = cards[i][random2];
		// cards[i].splice( random1, 1);
		// cards[i].splice( random2, 1);
		// console.log(cards[i].splice( 0, secondCard));
		// console.log(cards[i].splice( 0, firstCard));
		// console.log(cards);
		// let hand = [firstCard, secondCard];
		// let total = hand[0] + hand[1];
		// playerHands[i] = hand;
		// console.log('Player' + i + 's hand', playerHands[i], total);

			// dealerHand = playerHands[0];
	// player1Hand = playerHands[1];
	// player2Hand = playerHands[2];
	// player3Hand = playerHands[3];
	// dealerTotal = playerHands[0][0] + playerHands[0][1];
	// player1Total = playerHands[1][0] + playerHands[1][1];
	// player2Total = playerHands[2][0] + playerHands[2][1];
	// player3Total = playerHands[3][0] + playerHands[3][1];

	// // setTimeout( function() {
	// 	console.log('Dealer',dealerHand,dealerTotal);
	// 	console.log('Player One',player1Hand, player1Total);
	// 	console.log('Player Two',player2Hand, player2Total);
	// 	console.log('Player Three', player3Hand, player3Total);
	// // }, 1500);