import router from '@curveball/router';
import home from './home/controller';
import roomCollection from './room/controller/collection';
import room from './room/controller/item';
import roomSocket from './room/controller/socket';
import roomHistory from './room/controller/history';

export default [
  router('/', home),
  router('/room', roomCollection),
  router('/room/:roomId', room),
  router('/room/:roomId/socket', roomSocket),
  router('/room/:roomId/history', roomHistory),
];
