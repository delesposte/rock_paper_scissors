import { GameFactory } from "./gameFactory";
import { ResourceType } from "./resourceType";

const game = GameFactory.create();
game.playerOneChoice = ResourceType.stone;
game.playerTwoChoice = ResourceType.paper;
console.log(game.getResult());

game.restart();
game.playerOneChoice = ResourceType.stone;
game.playerTwoChoice = ResourceType.scissors;
console.log(game.getResult());

game.restart();
game.playerOneChoice = ResourceType.paper;
game.playerTwoChoice = ResourceType.stone;
console.log(game.getResult());

game.restart();
game.playerOneChoice = ResourceType.paper;
game.playerTwoChoice = ResourceType.scissors;
console.log(game.getResult());

game.restart();
game.playerOneChoice = ResourceType.scissors;
game.playerTwoChoice = ResourceType.stone;
console.log(game.getResult());

game.restart();
game.playerOneChoice = ResourceType.scissors;
game.playerTwoChoice = ResourceType.paper;
console.log(game.getResult());

game.restart();
game.playerOneChoice = ResourceType.scissors;
game.playerTwoChoice = ResourceType.scissors;
console.log(game.getResult());