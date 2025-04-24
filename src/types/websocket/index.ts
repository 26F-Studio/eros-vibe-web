import { Notify } from 'quasar';

import type { WsAction, WsHandler, WsResponse } from 'src/types/websocket/types';

export class WsWrapper {
  readonly url;

  private _onOpenHandlers: (() => void)[] = [
    () =>
      Notify.create({
        type: 'positive',
        message: 'WebSocket connected',
        icon: 'check',
      }),
  ];
  private _handlers: Map<WsAction, WsHandler<never>> = new Map();
  private _ws: WebSocket | undefined;

  constructor(url: string) {
    this.url = url;
    this._connect();
  }

  addOnOpenHandler(handler: () => void) {
    this._onOpenHandlers.push(handler);
  }

  isOpen() {
    return this._ws?.readyState === WebSocket.OPEN;
  }

  setHandler<T extends WsResponse>(action: WsAction, handler: WsHandler<T>) {
    this._handlers.set(action, handler);
  }

  deleteHandler(action: WsAction) {
    this._handlers.delete(action);
  }

  sendRaw(message: string | ArrayBufferLike | Blob | ArrayBufferView) {
    if (this.isOpen()) {
      this._ws?.send(message);
    } else {
      console.log('WebSocket not connected');
    }
  }

  private _connect() {
    this._ws = new WebSocket(this.url);
    this._ws.onclose = () => {
      Notify.create({
        type: 'negative',
        message: 'WebSocket closed, reconnecting...',
        icon: 'close',
      });
      setTimeout(() => {
        this._connect();
      }, 3000);
    };
    this._ws.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (this._handlers.has(message.action)) {
        await this._handlers.get(message.action)?.call(this, <never>message);
      } else {
        Notify.create({
          type: 'warning',
          message: `Unknown action: ${message.action}`,
          caption: JSON.stringify(message.data),
          icon: 'help_outline',
        });
        console.log(message);
      }
    };
    this._ws.onopen = () => {
      this._onOpenHandlers.forEach((handler) => handler());
    };
  }
}
