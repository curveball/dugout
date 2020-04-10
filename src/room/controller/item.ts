import Controller from '@curveball/controller';
import { item } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';
import { resolve } from 'url';

class RoomController extends Controller {

  get(ctx: Context) {

    const room = service.findByPath(ctx.state.params.roomId);

    let webSocketBase;
    if (process.env.PUBLIC_WS_URL) {
      webSocketBase = process.env.PUBLIC_WS_URL;
    } else if (process.env.PORT_WS) {
      webSocketBase = 'ws://localhost:' + process.env.PORT_WS + '/';
    } else {
      webSocketBase = 'ws://localhost:8601';
    }

    const webSocketUrl = resolve(
      webSocketBase,
      `/room/${room.path}/socket`
    );

    ctx.response.body = item(room, webSocketUrl);

  }

}

export default new RoomController();
