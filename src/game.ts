import { Resource } from "./resource";

export class Game {
  private _count = 1;
  private _playerOneChoice = '';
  private _playerTwoChoice = '';
  private _resources = new Map();

  constructor() { }

  addResource(resource: Resource) {
    if (!resource) {
      throw new Error('resource not found')
    }

    this._resources.set(resource.name, resource);
  }

  restart(): void {
    this._playerOneChoice = '';
    this._playerTwoChoice = '';
    this._count++;
  }

  set playerOneChoice(value: string) {
    if (!value) {
      throw new Error('player one choice not found');
    }

    if (!this._resources.has(value)) {
      throw new Error('chosen resource not found');
    }

    this._playerOneChoice = value;
  }

  set playerTwoChoice(value: string) {
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
      return `Game ${this._count.toString()}: result is tie`;
    }

    const resource: Resource = this._resources.get(this._playerOneChoice);

    if (resource.winsFrom.includes(this._playerTwoChoice)) {
      return `Game ${this._count.toString()}: player one won`;
    }

    return `Game ${this._count.toString()}: player two won`;
  }
}