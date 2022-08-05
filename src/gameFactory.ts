import { Game } from "./game";
import { Resource } from "./resource";
import { ResourceType } from "./resourceType";

export class GameFactory {
  private static createStone(): Resource {
    const resource = new Resource(ResourceType.stone);
    resource.addWinsFromType(ResourceType.scissors);
    return resource;
  }

  private static createPaper(): Resource {
    const resource = new Resource(ResourceType.paper);
    resource.addWinsFromType(ResourceType.stone);
    return resource;
  }

  private static createScissors(): Resource {
    const resource = new Resource(ResourceType.scissors);
    resource.addWinsFromType(ResourceType.paper);
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