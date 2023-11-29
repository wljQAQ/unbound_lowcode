import { shallowRef } from 'vue-demi';
import type { ShallowRef } from 'vue-demi';
import { LayoutProps, AreasProps, AreasBaseConfig } from './types';

export class SkeletonManager {
  layout: LayoutProps = {};
  areas: AreasProps = {};
  private _currentLeftPane: ShallowRef<AreasBaseConfig | null>; //当前的左弹窗

  constructor(layout: LayoutProps, areas: AreasProps) {
    this.layout = layout;
    this.areas = areas;
    this._currentLeftPane = shallowRef(null);
  }

  getAreaByName(name: string): AreasBaseConfig | undefined {
    return this.areas.leftArea?.find(i => i.name === name);
  }

  get currentLeftPane() {
    return this._currentLeftPane.value;
  }

  set currentLeftPane(val) {
    if (val?.props?.fix && !val) {
      return;
    }
    this._currentLeftPane.value = val;
  }
}
