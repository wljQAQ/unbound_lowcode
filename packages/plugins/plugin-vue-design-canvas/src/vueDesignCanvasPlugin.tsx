import { ICreateBaseEnginePlugin, IBaseEnginePlugin } from '@unbound_lowcode/types';
import { default as Canvas } from './Canvas.vue';
import { markRaw } from 'vue-demi';

export const vueDesignCanvasPlugin: () => IBaseEnginePlugin = () => {
  return {
    name: 'vueDesignCanvasPlugin',
    install(ctx) {
      const { skeleton, vue } = ctx;

      skeleton.add({
        area: 'mainArea',
        type: '',
        name: 'test',
        content: markRaw(<Canvas></Canvas>),
        props: {
          title: '画布',
          description: '画布',
          icon: markRaw(
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4886" width="20" height="20">
              <path
                d="M441.6 0H38.4A38.464 38.464 0 0 0 0 38.4v403.2A38.432 38.432 0 0 0 38.4 480h403.2a38.432 38.432 0 0 0 38.4-38.4V38.4A38.464 38.464 0 0 0 441.6 0zM416 416H64V64h352zM441.6 544H38.4A38.464 38.464 0 0 0 0 582.4v403.2A38.432 38.432 0 0 0 38.4 1024h403.2a38.432 38.432 0 0 0 38.4-38.4V582.4a38.464 38.464 0 0 0-38.4-38.4zM416 960H64V608h352zM985.6 544H582.4a38.464 38.464 0 0 0-38.4 38.4v403.2a38.432 38.432 0 0 0 38.4 38.4h403.2a38.432 38.432 0 0 0 38.4-38.4V582.4a38.464 38.464 0 0 0-38.4-38.4zM960 960H608V608h352zM752.544 415.776a207.52 207.52 0 0 0 122.528-40.096l94.304 94.272a32 32 0 0 0 45.248-45.248l-94.304-94.272a207.84 207.84 0 1 0-167.776 85.344z m-101.824-309.696a144 144 0 1 1 0 203.616 143.552 143.552 0 0 1 0-203.616z"
                fill="#2c2c2c"
                p-id="4887"
              ></path>
            </svg>
          )
        }
      });
    }
  };
};
