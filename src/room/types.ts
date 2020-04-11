import { StoredAction } from '../action';

export interface RoomInfo {
  path: string;
  lastEventId: number;
}

export interface Room extends RoomInfo {
  actions: StoredAction[],
  listeners: ((action: StoredAction) => void)[]
}
