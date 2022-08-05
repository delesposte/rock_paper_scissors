import { Game } from "./game";
import { Resource } from "./resource";

export class GameFactory {
  private static createStone(): Resource {
    const resource = new Resource('stone');
    resource.addWinsFrom('scissors');
    return resource;
  }

  private static createPaper(): Resource {
    const resource = new Resource('paper');
    resource.addWinsFrom('stone');
    return resource;
  }

  private static createScissors(): Resource {
    const resource = new Resource('scissors');
    resource.addWinsFrom('paper');
    return resource;
  }

  static create(): Game {
    const game = new Game();
    game.addResource(this.createStone());
    game.addResource(this.createPaper());
    game.addResource(this.createScissors());
    return game;
  }
}