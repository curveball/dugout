// tslint:disable:no-console
import WebSocketController from '../../websocket-controller';
import { item } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';
import { resolve } from 'url';
import { ErrorAction, StoredAction, assertAction } from '../../action';

class RoomSocketController extends WebSocketController {

  webSocket(ctx: Context) {

    const room = service.findByPath(ctx.state.params.roomId);
    const userId = service.generateUserId();

    console.log('[WS] User %i connected', userId);
    ctx.webSocket.on('message', (msg) => {

      try {
        if (typeof msg !== 'string') {
          throw new Error('This websocket server only accepts strings');
        }
        const action = JSON.parse(msg);
        assertAction(action);
        service.addAction(room, userId, action);
      } catch (err) {
        console.error('[WS ERROR]', err);
        const dugoutError: ErrorAction = {
          type: 'dugout/error',
          error: true,
          payload: err.message,
        }
        ctx.webSocket.send(JSON.stringify(dugoutError));
      }

    });

    service.addListener(room, (event: StoredAction) => {

      ctx.webSocket.send(JSON.stringify(event));

    });

  }

}

export default new RoomSocketController();
