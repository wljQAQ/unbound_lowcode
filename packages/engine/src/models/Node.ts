import { NodeModel, IPublicNodeSchema, MaterialModel, MaterialItem } from '@unbound_lowcode/types';
import { generateUId } from '@unbound_lowcode/shared';
import { ref, shallowRef } from 'vue';

//节点模型，方便进行节点的操作，
export function useNodeModel(material: MaterialModel): NodeModel {
  const currentNode = ref<IPublicNodeSchema | null>(null);

  return {
    nodeMap: {},
    currentNode,
    //当前正在操作的node
    createNode(materialSchema) {
      if (!materialSchema.componentName || !materialSchema.packageName) return null;
      return {
        id: 'Node_' + generateUId(),
        ...materialSchema
      } as IPublicNodeSchema;
    },
    setCurrentNode(node) {
      if (typeof node === 'string') {
        const item = this.nodeMap[node];
        item.node && (currentNode.value = item.node);
        return;
      }
      currentNode.value = node;
    },
    //拿到节点的描述对象
    getNodeMeta(node) {
      return material.getMetaByNameAndPkg(node || currentNode.value || {});
    },
    //拿到节点的配置对象
    getNodeSetter(node) {
      return material.getSetterByNameAndPkg(node || currentNode.value || {});
    },
    addNodeMap(node, parent) {
      this.nodeMap[node.id] = {
        node,
        parent
      };
    },
    getNodeMapItem(id) {
      if (id) return this.nodeMap[id];
      else return this.nodeMap[currentNode.value?.id || ''];
    }
  };
}
