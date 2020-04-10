import WebSocket from 'ws';

declare module '@curveball/core' {

  interface Context {
    webSocket: WebSocket
  }
  interface BaseContext {
    webSocket: WebSocket
  }

}
