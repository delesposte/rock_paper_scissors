import { Resource } from "./resource";
import { ResourceType } from "./resourceType";

export class Game {
  private _count = 1;
  private _playerOneChoice = ResourceType.none;
  private _playerTwoChoice = ResourceType.none;
  private _resources = new Map();

  constructor() { }

  addResource(resource: Resource) {
    if (!resource) {
      throw new Error('resource not found')
    }

    this._resources.set(resource.type, resource);
  }

  restart(): void {
    this._playerOneChoice = ResourceType.none;
    this._playerTwoChoice = ResourceType.none;
    this._count++;
  }

  set playerOneChoice(value: ResourceType) {
    if (!value) {
      throw new Error('player one choice not found');
    }

    if (!this._resources.has(value)) {
      throw new Error('chosen resource not found');
    }

    this._playerOneChoice = value;
  }

  set playerTwoChoice(value: ResourceType) {
    if (!value) {
      throw new Error('player two choice not found');
    }

    if (!this._resources.has(value)) {
      throw new Error('chosen resource not found');
    }

    this._playerTwoChoice = value;
  }

  getResult(): string {
    if (this._playerOneChoice === this._playerTwoChoice) {
      return `game ${this._count.toString()}: result is tie`;
    }

    const resource: Resource = this._resources.get(this._playerOneChoice);

    if (resource.doIWinFromType(this._playerTwoChoice)) {
      return `game ${this._count.toString()}: player one won`;
    }

    return `game ${this._count.toString()}: player two won`;
  }
}