<script setup lang="ts">
import { NInput, NGrid, NGi, NButton, NPopover, NCard, NCollapse, NCollapseItem, NImage } from 'naive-ui';
import { useEngineContext, useDragComponent } from '@unbound_lowcode/shared';
import { MATERIAL_DESIGN_DND_TYPE } from '@unbound_lowcode/constants';
import { MaterialItemMeta, IMaterialsApi, MaterialGroup } from '@unbound_lowcode/types';
import { shallowRef, ShallowRef, ref } from 'vue-demi';

const ctx = useEngineContext();
console.log(ctx);
const { materialGroupList, handleSearchMaterial } = useMaterial(ctx?.material);

const { hoverBtnCurrent, handleEnterBtn, handleLeaveBtn } = useMaterialsButton();

//需要把 物料库的所有分类都整合到一起比较好操作
function useMaterial(material: IMaterialsApi | undefined) {
  let materialGroupList: ShallowRef<MaterialGroup[]> = shallowRef([]);
  let originMaterialGroupList: MaterialGroup[] = []; //即如一下初始化的物料分类列表 用来做筛选

  //把物料对象转成列表
  function transformGroupMap2List() {
    if (!material) return;
    for (const key in material.materialsMap) {
      const ui = material.materialsMap[key];
      materialGroupList.value = materialGroupList.value.concat(Object.values(ui.componentsGroupMap));
      originMaterialGroupList = materialGroupList.value;
    }
  }

  transformGroupMap2List();

  function handleSearchMaterial(name: string) {
    if (!name) {
      materialGroupList.value = originMaterialGroupList;
      return;
    }
    const result: MaterialGroup[] = [];
    originMaterialGroupList.forEach(group => {
      const newChildren = group.children.filter(component => component.title.includes(name));
      if (newChildren.length) {
        result.push({
          ...group,
          children: newChildren
        });
      }
    });

    materialGroupList.value = result;
  }

  return {
    materialGroupList,
    handleSearchMaterial
  };
}

function useMaterialsButton() {
  const hoverBtnCurrent = ref('');

  function handleEnterBtn(item: MaterialItemMeta) {
    hoverBtnCurrent.value = item.componentName || '';
  }
  function handleLeaveBtn() {
    hoverBtnCurrent.value = '';
  }

  return {
    hoverBtnCurrent,
    handleEnterBtn,
    handleLeaveBtn
  };
}
</script>

<template>
  <div class="w-60">
    <div class="sticky top-0 px-2 pt-2 pb-3 border-0 border-b border-#eeea border-solid">
      <n-input placeholder="搜索组件" size="small" @input="handleSearchMaterial">
        <template #suffix> <span class="i-mdi:layers-search-outline text-2 text-gray"></span> </template>
      </n-input>
    </div>

    <n-collapse class="p-2" :default-expanded-names="Object.keys(materialGroupList)">
      <!-- 分类 -->
      <n-collapse-item v-for="(group, idx) in materialGroupList" :key="idx" :title="group.title" :name="idx.toString()">
        <!-- 组件 -->
        <n-grid v-for="component in group.children" :key="component.componentName" cols="2" x-gap="10" y-gap="10">
          <n-gi>
            <use-drag-component :options="{ item: component, type: MATERIAL_DESIGN_DND_TYPE }">
              <n-button
                class="w-full justify-initial"
                :size="'small'"
                :block="true"
                @mouseenter="handleEnterBtn(component)"
                @mouseleave="handleLeaveBtn"
              >
                <template #icon>
                  <span class="i-mdi:button-pointer text-1.8"></span>
                </template>
                <span class="text-ellipsis flex-auto text-left overflow-hidden">
                  {{ component.title }}
                </span>
                <n-popover v-if="hoverBtnCurrent === component.componentName" placement="right">
                  <template #trigger>
                    <span class="i-mdi:help-circle-outline text-1.8"></span>
                  </template>
                  <n-card :title="component.title">
                    {{ component.description }}
                    <n-image class="block mt-1" v-if="component.screenShot" :src="component.screenShot" lazy />
                  </n-card>
                </n-popover>
              </n-button>
            </use-drag-component>
          </n-gi>
        </n-grid>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped>
:deep(.n-button__content) {
  justify-content: space-between;
  flex: 1;
}
</style>
