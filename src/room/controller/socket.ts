import WebSocketController from '../../websocket-controller';
import { item } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';
import { resolve } from 'url';

class RoomSocketController extends WebSocketController {

  webSocket(ctx: Context) {

    const room = service.findByPath(ctx.state.params.roomId);

    ctx.webSocket.on('message', (msg) => {

      service.addEvent(room, msg);

    });

    service.addListener(room, (event: any) => {

      ctx.webSocket.send(event);

    });

  }

}

export default new RoomSocketController();
