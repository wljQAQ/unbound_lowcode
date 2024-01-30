<script setup lang="ts">
import { computed, shallowRef, triggerRef, watch } from 'vue';
import { RouterViewe } from 'vue-router';

const a = shallowRef({ a: { s: 'b' } });

const b = computed(() => {
  return a;
});

watch(b, () => {
  console.log(111);
}, { deep: true });

function onClick() {
  a.value.a.s = Date.now();
  setTimeout(() => {
    triggerRef(a);
  });
}
</script>

<template>
  <!-- {{ b.value.a.s }}
  <button @click="onClick">测试</button> -->
  <RouterView></RouterView>
</template>

<style scoped></style>
