import { Room } from './types';

const rooms = new Map<string, Room>([
  ['hello', {
    path: 'hello',
    lastEventId: 0,
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
      lastEventId: 0
    };

    rooms.set(path, room);
  }

  return room;

}
