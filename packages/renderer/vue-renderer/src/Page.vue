<script setup lang="ts">
import { useEngineContext } from '@unbound_lowcode/shared';
import { IPublicPageSchema } from '@unbound_lowcode/types';

interface Props {
  schema: IPublicPageSchema;
}

const props = defineProps<Props>();

const engineCtx = useEngineContext();
engineCtx.node.addNodeMap(props.schema, null);
</script>

<template>
  <div>
    <slot>
      <div class="w-full h-full flex-center">暂无组件..</div>
    </slot>
  </div>
</template>

<style scoped></style>
