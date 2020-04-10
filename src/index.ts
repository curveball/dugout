#!/usr/bin/env node
// tslint:disable:no-console
import app from './app';
import WebSocket from 'ws';
import NodeRequest from '@curveball/core/dist/node/request';
import { MemoryResponse, BaseContext } from '@curveball/core';

console.log(
  '⚾ Curveball v%s - Dugout v%s',
  require('@curveball/core/package.json').version,
  require('../package.json').version
);

// The HTTP port can be overridden via the 'PORT' environment variable.
const httpPort = process.env.PORT ? parseInt(process.env.PORT, 12) : 8600;
app.listen(httpPort)
;
console.log('HTTP server Port %i', httpPort);

const wsPort = process.env.PORT_WS ? parseInt(process.env.PORT_WS, 12) : 8601;

const wss = new WebSocket.Server({
  port: wsPort
});

wss.on('connection', async (ws, req) => {

  const request = new NodeRequest(req);
  const response = new MemoryResponse();
  const context = new BaseContext(request, response);

  context.webSocket = ws;

  await app.handle(context);

});

console.log('Websocket server Port %i', wsPort);

