import { withInstall } from '../util/type';
import Slider from 'ant-design-vue/lib/slider/index';

export type { SliderProps } from 'ant-design-vue/lib/slider/index';
export const JSlider = withInstall(Slider, 'JSlider');

export default JSlider;
