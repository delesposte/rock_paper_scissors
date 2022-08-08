import { ResourceType } from "./resourceType";

export class Resource {
  private readonly _type: ResourceType;
  private readonly _winsFromTypes = new Map();

  constructor(resourceType: ResourceType) {
    if (!resourceType) {
      throw new Error('type not found')
    }

    this._type = resourceType;
  }

  addWinsFrom(winsFromType: ResourceType) {
    if (!winsFromType) {
      throw new Error('wins from type not found')
    }

    this._winsFromTypes.set(winsFromType, winsFromType);
  }

  get type(): ResourceType {
    return this._type;
  }

  winsFrom(resourceType: ResourceType): boolean {
    return this._winsFromTypes.has(resourceType);
  }
}