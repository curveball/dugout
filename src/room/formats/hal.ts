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
      history: { href: `/room/${room.path}/history`, title: 'History'},
    },
    lastEventId: room.lastEventId,
  }

}

export function history(room: Room): HalResource {

  return {
    _links: {
      self: { href: `/room/${room.path}/history`, title: `History for Room: ${room.path}`},
      up: { href: `/room/${room.path}`, title: `Room: ${room.path}`},
    },
    events: room.events,
    lastEventId: room.lastEventId,
  }

}
