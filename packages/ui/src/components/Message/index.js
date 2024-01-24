import Message from './index.vue';
import { render, h } from 'vue';

function useMessage() {}

const messageList = [];
let uid = 1;

export function showMessage() {
  let verticalOffset = 20;

  const container = document.createDocumentFragment();

  messageList.forEach(item => {
    verticalOffset += item.vm.el.offsetHeight + 16;
  });

  console.log(verticalOffset);

  const vNode = h(Message, { destory, top: verticalOffset, id: uid, container });
  render(vNode, container);
  document.body.appendChild(container);

  messageList.push({
    id: uid,
    vm: vNode,
    container
  });

  uid++;
}

function destory(id) {
  let len = messageList.length;
  let index = -1;
  let removedHeight;
  let current = null;
  for (let i = 0; i < len; i++) {
    console.log(messageList[i], id);
    if (id === messageList[i].id) {
      removedHeight = messageList[i].vm.el.offsetHeight;
      index = i;
      messageList.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > messageList.length - 1) return;
  for (let i = index; i < len - 1; i++) {
    let dom = messageList[i].vm.el;
    dom.style['top'] = parseInt(dom.style['top'], 10) - 50 + 'px';
    console.log(11111, id, len);
  }
}
