class Game {
	constructor() {
		this.players = [];

		this.deck = [
			{
				suit: 'Spades',
				cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
			},
			{
				suit: 'Clubs',
				cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
			},
			{
				suit: 'Hearts',
				cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
			},
			{
				suit: 'Diamonds',
				cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
			}
		];

		this.gameCards = [];
	}

	setCards() {
		this.gameCards = [];//remove any remaining cards
		for(let obj in this.deck) {
			this.gameCards.push(this.deck[obj]);
		}
	}

	getCard() {
		let randomSuit = Math.floor(Math.random() * this.gameCards.length);
		let randomCard = Math.floor(Math.random() * this.gameCards[randomSuit].cards.length);
		let cards = this.gameCards[randomSuit];
		let card = {
			suit: cards.suit,
			card: cards.cards[randomCard]
		};
		
		cards.cards.splice(randomCard, 1);
		return card;
	}

	deal(number) {
		for(let i = 0; i < number; i++) {
			for(let player in this.players) {
				this.players[player].hand.push(this.getCard());
			}
		}
	}

	addPlayer(array) {
		for(let i = 0; i < array.length; i++){
			this.players.push({name: array[i], hand: [], score: 0});
		}
	}

	evalCard(card) {
		switch(card) {
			case 'Ace':
				card = 11;
				break;
			case 'King':
			case 'Queen':
			case 'Jack':
				card = 10;
				break;
		}
		return card;
	}
	
	sumScore(){
	    for(let player in this.players){
	    	for(let i = 0; i < this.players[player].hand.length; i++){
		  	    this.players[player].score += this.evalCard(this.players[player].hand[i].card);
			    this.players[player].score;
				if(i === 1){
					console.log(this.players[player].name, 'Hand:', 
						this.players[player].hand[0].card, 'of', 
						this.players[player].hand[0].suit, 'and', 
						this.players[player].hand[1].card, 
						'of', this.players[player].hand[1].suit,
						'=> Score',
						this.players[player].score
					);
				}
		    }
	    }
	}

	winner(){
		let greatest = 0;
		let holder = '';
		let tie = 0;
		let tieHolder = '';
		for ( let player in this.players) {
			if( this.players[player].score > greatest && this.players[player].score < 22) {
				greatest = this.players[player].score;
				holder = this.players[player].name;
			} else if ( this.players[player].score === greatest ) {
				tie = this.players[player].score;
				tieHolder = this.players[player].name;
			}
		}
		if (tie === greatest){
			console.log('It is a tie between ' + holder + ' and ' + tieHolder + ' with a score of ' + greatest);
		} else {
			console.log('The winner is ' + holder + ' with a score of ' + greatest + '!');
		}
	}

}

var game = new Game();

game.setCards();

game.addPlayer(['Dealer','Player 1', 'Player 2', 'Player 3']);

game.deal(2);

game.sumScore();

game.winner();