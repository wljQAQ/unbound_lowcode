<script setup>
import { ref, onMounted, render } from 'vue';

const props = defineProps({
  destory: {
    type: Function,
    default: () => {}
  },
  top: {
    type: Number,
    default: 20
  },
  id: {
    type: Number
  },
  container: {
    type: Object
  }
});

const open = ref(false);
console.log(props.top);
onMounted(() => {
  open.value = true;

  setTimeout(() => {
    open.value = false;
    props.destory(props.id);
  }, 3000);
});
</script>

<template>
  <transition name="message-fade" :on-after-leave="() => render(null, container)" :style="{ top: top + 'px' }">
    <div class="message" v-show="open">测试message</div>
  </transition>
</template>

<style scoped>
.message {
  position: absolute;
  top: 0px;
  left: 50%;
  padding: 10px;
  background-color: gray;
  transition: 0.3s;
}

.message-fade-enter-active {
  animation: message-fade-in 0.3s;
}

.message-fade-leave-active {
  animation: message-fade-out 0.3s;
}

@keyframes message-fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes message-fade-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
