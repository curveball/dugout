import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

export default class WebsocketController extends Controller {

  dispatch(ctx: Context): Promise<void> | void {

    if (ctx.webSocket) {
      if ((this as any).webSocket !== undefined) {
        const result = (this as any).webSocket(ctx);
        ctx.status = 101;
        return result;
      } else {
        throw new Error('Websockets are not supported here.');
        ctx.webSocket.close();
      }
    }

  }

}
