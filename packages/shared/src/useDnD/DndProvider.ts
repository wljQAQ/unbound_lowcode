import { defineComponent } from 'vue-demi';
import { useDndContextProvider } from './DndContext';
import { DndManagerImpl } from './DndManager';

export const DndProvider = defineComponent({
  name: 'DndProvider',
  setup(props, { slots }) {
    useDndContextProvider(new DndManagerImpl());

    return () => slots.default?.() ?? null;
  }
});
