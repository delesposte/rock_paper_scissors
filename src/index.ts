import { GameFactory } from "./gameFactory";

const game = GameFactory.create();
game.playerOneChoice = 'stone';
game.playerTwoChoice = 'paper';
console.log(game.getResult());

game.restart();
game.playerOneChoice = 'stone';
game.playerTwoChoice = 'scissors';
console.log(game.getResult());

game.restart();
game.playerOneChoice = 'paper';
game.playerTwoChoice = 'stone';
console.log(game.getResult());

game.restart();
game.playerOneChoice = 'paper';
game.playerTwoChoice = 'scissors';
console.log(game.getResult());

game.restart();
game.playerOneChoice = 'scissors';
game.playerTwoChoice = 'stone';
console.log(game.getResult());

game.restart();
game.playerOneChoice = 'scissors';
game.playerTwoChoice = 'paper';
console.log(game.getResult());

game.restart();
game.playerOneChoice = 'scissors';
game.playerTwoChoice = 'scissors';
console.log(game.getResult());