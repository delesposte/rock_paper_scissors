import { ResourceType } from "./resourceType";

export class Resource {
  private readonly _type: ResourceType;
  private readonly _winsFromTypes: ResourceType[] = [];

  constructor(type: ResourceType) {
    if (!type) {
      throw new Error('type not found')
    }

    this._type = type;
  }

  addWinsFromType(winsFromType: ResourceType) {
    if (!winsFromType) {
      throw new Error('wins from type not found')
    }

    this._winsFromTypes.push(winsFromType);
  }

  get type(): ResourceType {
    return this._type;
  }

  get winsFromTypes(): ResourceType[] {
    return this._winsFromTypes;
  }
}