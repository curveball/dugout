import router from '@curveball/router';
import homeController from './home/controller';
import roomCollectionController from './room/controller/collection';
import roomController from './room/controller/item';
import roomSocketController from './room/controller/socket';

export default [
  router('/', homeController),
  router('/room', roomCollectionController),
  router('/room/:roomId', roomController),
  router('/room/:roomId/socket', roomSocketController),
];
