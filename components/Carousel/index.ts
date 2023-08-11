import { withInstall } from '../util/type';
import Carousel from 'ant-design-vue/lib/carousel/index';

export type { CarouselProps, 
              SwipeDirection, 
              LazyLoadTypes, 
              CarouselEffect,  
              DotPosition,
              CarouselRef } from 'ant-design-vue/lib/carousel/index';

export { carouselProps } from 'ant-design-vue/lib/carousel/index';

export const JCarousel = withInstall(Carousel, 'JCarousel');

export default JCarousel;
