export interface RoomInfo {
  path: string;
  lastEventId: number;
}

export interface Room extends RoomInfo {
  events: any[],
  listeners: ((event: any) => void)[]
}
