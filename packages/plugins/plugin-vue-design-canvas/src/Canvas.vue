<script setup lang="tsx">
import { shallowRef, nextTick } from 'vue-demi';
import { useDrop, useEngineContext } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta } from '@unbound_lowcode/types';

const engineCtx = useEngineContext();
const iframeRef = shallowRef<HTMLIFrameElement | null>(null);

// useDrop({
//   el: iframeRef,
//   accept: MATERIAL_DESIGN_DND_TYPE,
//   drop(ctx) {
//     const item = ctx.getItem<MaterialItemMeta>();
//     const { componentName, packageName } = item;
//     if (!componentName || !packageName) return;
//     //拿到schema
//     const schema = engineCtx.material.getSchemaByNameAndPkg({ comName: componentName, pkgName: packageName });
//     if (!schema) return;
//     //生成node
//     const node = engineCtx.node.createNode(schema);
//     if (!node) return;
//     //将schema放入到page中
//     engineCtx.page.insertNodeToPage(node);
//   }
// });

async function onIframeLoad() {
  await nextTick();
  const doc = iframeRef.value?.contentDocument;
  console.log(doc.getElementById('app'));
  if (!doc) return;
  useDrop({
    el: doc.getElementById('app'),
    accept: MATERIAL_DESIGN_DND_TYPE,
    drop(ctx) {
      console.log('drop', ctx);
      const item = ctx.getItem<MaterialItemMeta>();
      const { componentName, packageName } = item;
      if (!componentName || !packageName) return;
      //拿到schema
      const schema = engineCtx.material.getSchemaByNameAndPkg({ comName: componentName, pkgName: packageName });
      if (!schema) return;
      //生成node
      const node = engineCtx.node.createNode(schema);
      if (!node) return;
      //将schema放入到page中
      engineCtx.page.insertNodeToPage(node);
    }
  });
}
</script>

<template>
  <iframe class="w-full h-full border-none" ref="iframeRef" src="/canvas.html" @load="onIframeLoad"></iframe>
</template>

<style scoped></style>
