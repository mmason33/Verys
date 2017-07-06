/**
* @constructor Game
* Create Game
*/
class Game {
	constructor() {
		/**
		* @type {string[]} players An empty array to hold the players created each game
		* @property {string} name The name of each player when created
		* @property {string[]} hand The array containing two card objects - both containing one card and suit value
		* @property {number} score The total sum of the players current hand
		*/
		this.players = [];
		/**
		* @type {string[]} deck A static deck of cards containing four objects
		* @property {string} suit The suit value for the given set of 13 cards
		* @property {string[]} cards An array of 13 cards for a given suit
		*/
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
		/**
		* @type {string[]} gameCards The deck of cards that is set and mutated during each instance of Game
		*/
		this.gameCards = [];
	}
	/**
	* @function
	* @name setCards()
	* @type {string[]} gameCards Make sure to empty the game cards array before setting a new deck for the current game
	*/
	setCards() {
		this.gameCards = [];//remove any remaining cards
		for(let obj in this.deck) {
			this.gameCards.push(this.deck[obj]);
		}
	}
	/**
	* @function
	* @name addPlayer()
	* @param {string[]} array An array of players that are added to the current game
	* For each player in the array parameter, an object containing name, hand and score will be pushed to the empty player array above
	* @example
	* addPlayer(['One', 'Two', 'Three']);
	* console.log(game.players) // [Object, Object, Object] => game.players[0] => name: 'One', hand: [], score: 0
	*/
	addPlayer(array) {
		for(let i = 0; i < array.length; i++){
			this.players.push({name: array[i], hand: [], score: 0});
		}
	}
	/**
	* @function
	* @name getCard() Get a random card and random suit value
	* @type {number} randomSuit A random number between 0 and gameCards.length(4)
	* @type {number} randomCard A random number between 0 and gameCards[randomSuit].cards.length(13)
	* @type {object} card An object containing the randomly selected card and suit values
	* Each time a card is selected, it is removed for the gameCards array of cards via splice(startIndex, deletions)
	* @return {object} card Returns an objects containing suit and cards values each time the function is called
	* @example
	* game.getCard(); // Object {suit: 'Hearts', card: 8}
	*/
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
	/**
	* @function
	* @name deal() Deal a given number of cards to each player
	* @param {number} number The number cards dealt to each player
	* While {i} is less then the number of wanted cards, a random card is selected and pushed to each players hand
	* @example
	* game.deal(2)
	* console.log(game.players[0].hand) // [Object, Object] => console.log(game.players[0].hand[0]) // {suit: 'Clubs', card: 7}
	*/
	deal(number) {
		for(let i = 0; i < number; i++) {
			for(let player in this.players) {
				this.players[player].hand.push(this.getCard());
			}
		}
	}
	/**
	* @function
	* @name evalCard() Evaluate the facecards and return a numberic value to calculate the total score
	* @param {string} card The given facecard in a player's hand should there be one present
	* @example
	* game.evalCard('Ace') // 11
	*/
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
	/**
	* @function
	* @name sumScore() Calulate the total score for each player's hand
	*/
	sumScore(){
	    for(let player in this.players){
	    	for(let i = 0; i < this.players[player].hand.length; i++){
		  	    this.players[player].score += this.evalCard(this.players[player].hand[i].card);
			    this.players[player].score;
				if(i === 1){
					console.log(
						this.players[player].name, 
						'Hand:', 
						this.players[player].hand[0].card, 
						'of', 
						this.players[player].hand[0].suit, 
						'and', 
						this.players[player].hand[1].card, 
						'of', 
						this.players[player].hand[1].suit,
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
		for (let player in this.players) {
			if(this.players[player].score > greatest) {
				greatest = this.players[player].score;
				holder = this.players[player].name;
			} else if (this.players[player].score === greatest) {
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

const game = new Game();

game.setCards();

game.addPlayer(['Dealer','Player 1', 'Player 2', 'Player 3']);

game.deal(2);

game.sumScore();

game.winner();