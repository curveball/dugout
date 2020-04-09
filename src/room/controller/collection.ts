import Controller from '@curveball/controller';
import { collection } from '../formats/hal';
import { Context } from '@curveball/core';
import * as service from '../service';

class RoomCollectionController extends Controller {

  get(ctx: Context) {

    const rooms = service.findAll();
    ctx.response.body = collection(rooms);

  }

}

export default new RoomCollectionController();
