export class Resource {
  private readonly _name: string;
  private readonly _winsFrom: string[] = [];

  constructor(name: string) {
    if (!name) {
      throw new Error('name not found')
    }

    this._name = name;
  }

  addWinsFrom(resource: string) {
    if (!resource) {
      throw new Error('resource not found')
    }

    this._winsFrom.push(resource);
  }

  get name(): string {
    return this._name;
  }

  get winsFrom(): string[] {
    return this._winsFrom;
  }
}