import { Room } from './types';

const rooms = new Map<string, Room>([
  ['hello', {
    path: 'hello',
    lastEventId: 0,
    events: [],
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
      events: [],
    };

    rooms.set(path, room);
  }

  return room;

}

export function addEvent(room: Room, event: any) {

  room.events.push(event);
  room.lastEventId++;
  for(const listener of room.listeners) {
    listener(event);
  }

}

export function addListener(room: Room, listener: (event: any) => void) {

  room.listeners.push(listener);

}
