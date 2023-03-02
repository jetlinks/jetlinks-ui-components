import { withInstall } from '../util/type';
import Carousel from 'ant-design-vue/lib/carousel/index';

export type { CarouselProps } from 'ant-design-vue/lib/carousel/index';

export const JCarousel = withInstall(Carousel, 'JCarousel');

export default JCarousel;
