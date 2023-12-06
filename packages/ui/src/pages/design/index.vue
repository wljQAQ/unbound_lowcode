<script setup lang="tsx">
import { Skeleton, AreasProps } from '@unbound_lowcode/skeleton';
import { reactive, markRaw, ref } from 'vue-demi';
import { Materials } from '@unbound_lowcode/plugins-materials';
import materialModules from '@unbound_lowcode/naive-ui-materials';
import { createEngine } from '@unbound_lowcode/engine';
import App from '../../main';

// const a = ref(1);
const engine = createEngine();
App.use(engine);

const areas: AreasProps = reactive({
  leftArea: [
    {
      area: 'leftArea',
      type: '',
      name: 'test',
      content: markRaw(<Materials class="h-7xl">111</Materials>),
      props: {
        title: '物料库',
        description: '物料组件',
        icon: markRaw(<span class="i-mdi:ab-testing"></span>)
      }
    },
    {
      area: 'leftArea',
      type: '',
      name: 'test2',
      props: {
        description: '测试测试23',
        icon: markRaw(<span class="i-mdi:ab-testing"></span>)
      }
    }
  ]
});

console.log(materialModules);
</script>

<template>
  <Engine></Engine>
  <!-- {{ a }}
  <div @click="a++">click</div> -->
</template>

<style scoped></style>
