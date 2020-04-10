import { HalResource } from 'hal-types';
import { Room } from '../types';

export function collection(rooms: Room[]): HalResource {

  return {
    _links: {
      self: { href: '/room', title: 'Room collection'},
      item: rooms.map( room => {

        return {
          href: `/room/${room.path}`,
          title: `Room: ${room.path}`,
        }

      })
    },
    total: rooms.length,
  }

}

export function item(room: Room, websocketUrl: string): HalResource {

  return {
    _links: {
      self: { href: `/room/${room.path}`, title: `Room: ${room.path}`},
      collection: { href: '/room', title: 'Room collection'},
      socket: { href: websocketUrl, title: 'Websocket' },
    },
    ...room,
  }

}
