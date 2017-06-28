//BlackJack

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

let players = ['Dealer', 'Player One', 'Player Two', 'Player Three'];
let cards = [
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
];

let list = [];


function blackjack(cards,playersArray) {

	console.log('Playing a game of BlackJack with four players!');
	setTimeout( function() {
		console.log('Shuffling');
	},1000);

	setTimeout( function() {
		for( let i = 0; i < cards.length; i++ ) {
			let firstCard = cards[i][Math.floor(Math.random() * cards[i].length)];
			let secondCard = cards[i][Math.floor(Math.random() * cards[i].length)];
			let total = firstCard + secondCard;
			list.push(total);
			// console.log(list);
			console.log(playersArray[i], firstCard,secondCard, total );
		}
	}, 2000);

	setTimeout( function() {
		console.log(players[list.indexOf(Math.max(...list))] + ' Wins!', 'Score ' + Math.max(...list));
	}, 3500);


}


blackjack(cards, players);








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