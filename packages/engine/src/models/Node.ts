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
    }
  };
}
