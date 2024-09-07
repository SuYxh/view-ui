import * as components from './components';
import { App } from 'vue';

export * from './components';

export default {
  install: (app: App) => {
    for (const c in components) {
      // @ts-ignore
      app.use(components[c]);
    }
  }
};
