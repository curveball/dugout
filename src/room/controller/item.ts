import Controller from '@curveball/controller';
import { item } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';

class RoomController extends Controller {

  get(ctx: Context) {

    const room = service.findByPath(ctx.state.params.roomId);
    ctx.response.body = item(room);

  }

}

export default new RoomController();
