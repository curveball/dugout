import { history } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';
import { resolve } from 'url';
import Controller from '@curveball/controller';

class RoomHistoryController extends Controller {

  get(ctx: Context) {

    const room = service.findByPath(ctx.state.params.roomId);
    ctx.response.body = history(room);

  }

}

export default new RoomHistoryController();
