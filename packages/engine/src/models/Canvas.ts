import { NodeModel, IPublicNodeSchema } from '@unbound_lowcode/types';
import { generateUId } from '@unbound_lowcode/shared';

export function useNodeModel(): NodeModel {
  return {
    schema: null,
    createNode(materialSchema) {
      if (!materialSchema.componentName || !materialSchema.packageName) return null;
      return {
        id: 'Node_' + generateUId(),
        ...materialSchema
      } as IPublicNodeSchema;
    },
    // renderIframe() {
    //   const iframe = iframeRef.value;
    //   if (!iframe) return;
    //   const doc = iframe.contentDocument!;

    //   doc.open();
    //   doc.write(`
    // <!doctype html>
    // <html class="engine-design-mode">
    //   <head><meta charset="utf-8"/>
    //   </head>
    //   <body>
    //     <div id="app">12312312312312</div>
    //   </body>
    // </html>
    // `);
    //   doc.close();
    //   window.Vue = Vue;
    //   window.Simulator = VueRenderer;
    //   var script = doc.createElement('script');
    //   var code = `
    //     const {Vue,Simulator} = window.parent;
    //     const {createApp} = Vue;
    //     const el = document.getElementById("app");
    //     createApp(Simulator).mount(el)
    //   `;
    //   script.appendChild(doc.createTextNode(code));
    //   doc.body.appendChild(script);
    // }
  };
}
