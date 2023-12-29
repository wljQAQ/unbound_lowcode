import { CanvasModel } from '@unbound_lowcode/types';

export function useCanvasModel(): CanvasModel {
  return {
    createIframe(iframe) {
      const doc = iframe.contentDocument!;
      doc.open();
      doc.write(`
    <!doctype html>
    <html class="engine-design-mode">
      <head><meta charset="utf-8"/>
      </head>
      <body>
        <div id="app"><component :is="VueSimulatorRenderer" /></div>
      </body>
    </html>
    `);
      doc.close();
      var script = doc.createElement('script');
      script.type = 'module';
      var code = `
        import { VueSimulatorRenderer } from 'http://127.0.0.1:5174/src/index.ts';
        const { Vue } = window.parent;
        window.Vue = Vue;
        console.log(Vue,VueSimulatorRenderer,window.app)
        const el = document.getElementById("app");
        window.app.mount(el)
      `;
      script.appendChild(doc.createTextNode(code));
      doc.body.appendChild(script);
    },
    renderSimulator(iframeRef) {
      this.createIframe(iframeRef);
    }
  };
}
