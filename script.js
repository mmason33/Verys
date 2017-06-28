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

		// let playerHands = [];
		// // let dealer = ['Dealer'];
		// // let player1 = ['Jack'];
		// // let player2 = ['Jill'];
		// // let player3 = ['John'];
		// let cards = [
		// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
		// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
		// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
		// 	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
		// ];

// 		this.randomCards = () => {

// 			for ( let i = 0; i < cards.length; i++) {

// 				let firstCard = cards[i][Math.floor(Math.random() * cards[i].length)];
// 				let secondCard = cards[i][Math.floor(Math.random() * cards[i].length)];
// 				let hand = [firstCard, secondCard];
// 				let total = firstCard + secondCard;
// 				console.log(hand);
				
// 			}


// 		}


// 	}
// }

// const game = new BlackJack();
// game.randomCards();
// console.log(this.playerHands);


let playerHands = [];
let dealer;
let player1;
let player2;
let player3;
let total;
let cards = [
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11], 
	[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11]
];


function randomCards(cards) {

	console.log('Playing a game of BlackJack with four players!');

	for( let i = 0; i < cards.length; i++ ) {
		let random1 = Math.floor(Math.random() * cards[i].length);
		let random2 = Math.floor(Math.random() * cards[i].length);
		let firstCard = cards[i][random1];
		let secondCard = cards[i][random2];
		cards[i].splice( random1, 1);
		cards[i].splice( random2, 1);
		// console.log(cards[i].splice( 0, secondCard));
		// console.log(cards[i].splice( 0, firstCard));
		console.log(cards);
		let hand = [firstCard, secondCard];
		let total = hand[0] + hand[1];
		playerHands[i] = hand;
		// console.log('Player' + i + 's hand', playerHands[i], total);
	}

	dealer = 'Dealer: ' + playerHands[0];
	player1 = 'Player One: ' + playerHands[1];
	player2 = 'Player Two: ' + playerHands[2];
	player3 = 'Player Three: ' + playerHands[3];
	setTimeout( function() {
		console.log(dealer, 'Total', playerHands[0][0] +  playerHands[0][1]);
		console.log(player1, 'Total', playerHands[1][0] + playerHands[1][1]);
		console.log(player2, 'Total', playerHands[2][0] + playerHands[2][1]);
		console.log(player3, 'Total', playerHands[3][0] + playerHands[3][1]);
	}, 1500);
}

function winner(){

	randomCards(cards);


}

winner();



