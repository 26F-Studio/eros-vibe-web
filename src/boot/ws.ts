import { defineBoot } from '#q-app/wrappers';
import { WsWrapper } from 'src/types/websocket';

const ws = new WsWrapper(process.env.DEV ? 'http://192.168.255.10/ws' : '/ws');

export default defineBoot(({ app }) => {
  app.config.globalProperties.$ws = ws;
});

export { ws };
