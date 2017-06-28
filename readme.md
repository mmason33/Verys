# Verys

Imagine you go to Las Vegas, and with the hopes of winning it big, sit down at a Blackjack table with a few other players. Everyone at the table (including the dealer) is dealt two random cards from a deck. Because this is simplified Blackjack, all players immediately flip their cards and the player whose cards sum is closest to 21 without going over is declared the winner. Multiple winners are allowed, and advanced gameplay such as betting, splitting, and hitting are not required.

1. Start a new game of Blackjack, providing the number of players.
2. Shuffle a deck of cards.
3. Deal two random cards from the deck to each player (including the dealer).
4. Display your hand and it's numeric total (assume Ace is 11, Jack/Queen/King are 10, and all other cards are their face value).
5. Display the numeric total of each player, including the dealer
6. Determine the winner(s) (the player(s) closest to 21 without going over, ties are allowed)

For example, following this series of events, the console should print:

Playing a game of Blackjack with 4 players!

Your hand: Queen of Hearts, King of Clubs (total = 20)

Player 1's hand: Three of Clubs, Six of Diamonds (total = 9)

Player 2's hand: Five of Hearts, Jack of Spades (total = 15)

Dealer's hand: Ace of Clubs, Ace of Spades (total = 22)

You win!

ES6 syntax is preferred. Please include usage instructions and JSDoc-style documentation.

Bonus: have Aces be worth 1 or 11 and work in favor of the player

Bonus: encapsulate logic such that it can be easily applied to other card games

Bonus: write tests

