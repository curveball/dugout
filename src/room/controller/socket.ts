import WebSocketController from '../../websocket-controller';
import { item } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';
import { resolve } from 'url';

class RoomSocketController extends WebSocketController {

  webSocket(ctx: Context) {

    ctx.webSocket.on('message', (msg) => {

      ctx.webSocket.send('ack');

    });

  }

}

export default new RoomSocketController();
