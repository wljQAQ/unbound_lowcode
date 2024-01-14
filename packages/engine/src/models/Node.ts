import { NodeModel, IPublicNodeSchema, MaterialModel } from '@unbound_lowcode/types';
import { generateUId } from '@unbound_lowcode/shared';
import { shallowRef } from 'vue';

//节点模型，方便进行节点的操作，
export function useNodeModel(material: MaterialModel): NodeModel {
  console.log(material, 'node');
  const currentNode = shallowRef<IPublicNodeSchema>(null);

  return {
    schema: null,
    createNode(materialSchema) {
      if (!materialSchema.componentName || !materialSchema.packageName) return null;
      return {
        id: 'Node_' + generateUId(),
        ...materialSchema
      } as IPublicNodeSchema;
    },
    setCurrentNode(node) {
      currentNode.value = node;
    },
    //拿到节点的描述对象
    getNodeMeta(node) {
      return material.getMetaByNameAndPkg(node || currentNode.value);
    },
    //拿到节点的配置对象
    getNodeSetter() {
      return material.getSetterByNameAndPkg(node || currentNode.value);
    }
  };
}
