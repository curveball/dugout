import { Room } from './types';
import { Action } from '../action';

const rooms = new Map<string, Room>([
  ['hello', {
    path: 'hello',
    lastEventId: 0,
    actions: [],
    listeners: [],
  }]
]);

export function findAll(): Room[] {

  return Array.from(rooms.values());

}

export function findByPath(path: string): Room {

  let room:Room | undefined = rooms.get(path);
  if (!room) {
    // Automatically create new room
    room = {
      path,
      lastEventId: 0,
      listeners: [],
      actions: [],
    };

    rooms.set(path, room);
  }

  return room;

}

export function addAction(room: Room, userId: number, action: Action) {

  room.lastEventId++;

  const storedAction = {
    ...action,
    meta: {
      eventId: room.lastEventId,
      ts: Date.now(),
      userId,
    },
  };

  room.actions.push(storedAction);

  for(const listener of room.listeners) {
    listener(storedAction);
  }

}

export function addListener(room: Room, listener: (event: any) => void) {

  room.listeners.push(listener);

}

let lastUserId = 0;

export function generateUserId(): number {

  lastUserId++;
  return lastUserId;

}
