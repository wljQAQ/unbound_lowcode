import { CanvasModel, SimulatorRenderer } from '@unbound_lowcode/types';

export function useCanvasModel(): CanvasModel {
  //主机  用来与模拟器进行交互
  return {
    simulatorRenderer: null,
    async renderSimulator(iframeRef, engineCtx) {
      const doc = iframeRef.contentDocument!;
      const win = iframeRef.contentWindow!;

      this.simulatorRenderer = await this.createIframe(iframeRef);
      this.simulatorRenderer.run(engineCtx);

      win.addEventListener('drop', () => {
        console.log('drop');
      });
      win.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('over');
      });

      return this.simulatorRenderer;
    },

    //创建iframe
    createIframe(iframe) {
      const doc = iframe.contentDocument!;
      const win = iframe.contentWindow!;

      let scriptTags = '';

      const scriptSrc = ['http://127.0.0.1:5555/src/index.ts'];
      scriptSrc.forEach(src => {
        scriptTags += `<script src="${src}" type="module"></script>`;
      });

      doc.open();
      doc.write(` <!doctype html>
        <html class="engine-design-mode">
          <head>
            <meta charset="utf-8"/>
          </head>
          <body>
          ${scriptTags}
          </body>
        </html>`);
      doc.close();

      return new Promise(resolve => {
        const loaded = (e: CustomEvent<SimulatorRenderer>) => {
          resolve(e.detail);
          window.removeEventListener('simulatorMounted', loaded as EventListener);
        };

        win.addEventListener('simulatorMounted', loaded as EventListener);
      });
    }
  };
}
