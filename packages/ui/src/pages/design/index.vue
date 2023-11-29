<script setup lang="tsx">
import { NButton } from 'naive-ui';
import { Skeleton, AreasProps } from '@unbound_lowcode/skeleton';
import { reactive, markRaw } from 'vue-demi';

const areas: AreasProps = reactive({
  leftArea: [
    {
      area: 'leftArea',
      type: '',
      name: 'test',
      props: {
        description: '测试测试',
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
</script>

<template>
  <Skeleton :areas="areas"></Skeleton>
</template>

<style scoped></style>
