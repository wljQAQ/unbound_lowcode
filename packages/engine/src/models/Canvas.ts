import { CanvasModel } from '@unbound_lowcode/types';

export function useCanvasModel(): CanvasModel {
  return {
    renderSimulator(iframeRef) {
      const doc = iframeRef.contentDocument!;
      const win = iframeRef.contentWindow!;
      console.log(win);
      this.createIframe(iframeRef);
    },

    //创建iframe
    createIframe(iframe) {
      const doc = iframe.contentDocument!;
      doc.open();
      doc.write(`
        <!doctype html>
        <html class="engine-design-mode">
          <head><meta charset="utf-8"/>
          </head>
          <body>
            <div id="app"></div>
          </body>
        </html>
    `);
      doc.close();
      var script = doc.createElement('script');
      script.type = 'module';
      var code = `
        import Simulator from 'http://127.0.0.1:5555/src/index.ts';
       
        const el = document.getElementById("app");
        Simulator.render(el);
      `;
      script.appendChild(doc.createTextNode(code));
      doc.body.appendChild(script);
    }
  };
}
