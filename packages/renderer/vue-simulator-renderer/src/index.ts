import { test } from '@unbound_lowcode/vue-renderer';
import Simulator from './Simulator.ts';

window.SimulatorRenderer = Simulator;
window.dispatchEvent(
  new CustomEvent('simulatorMounted', {
    detail: Simulator
  })
);

export default Simulator;
