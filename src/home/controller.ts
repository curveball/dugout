import Controller from '@curveball/controller';
import { Context } from '@curveball/core';
import hal from './formats/hal';

class HomeController extends Controller {

  get(ctx: Context) {

    ctx.response.type = 'application/json';
    ctx.response.body = hal();

  }

}

export default new HomeController();
