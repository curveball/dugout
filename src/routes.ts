import router from '@curveball/router';
import homeController from './home/controller';
import roomCollectionController from './room/controller/collection';
import roomController from './room/controller/item';

export default [
  router('/', homeController),
  router('/room', roomCollectionController),
  router('/room/:roomId', roomController),
];
