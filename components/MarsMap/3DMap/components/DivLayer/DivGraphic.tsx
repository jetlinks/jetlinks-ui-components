import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    ref,
    watchEffect,
} from 'vue';
import {
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    PickOptions,
    EventDivGraphicProps,
    EventDivGraphic,
} from '../../utils';

import { DeleteAttr } from '../GraphicLayer';

export interface DivGraphicProps
    extends Omit<sxii.graphic.DivGraphicOptions, 'position'>,
        DeleteAttr,
        EventDivGraphicProps {
    position: Array<number>;
    className?: string;
    /**
     * @default true
     */
    visible?: boolean;
    /**
     * @default [0, -28]
     */
    offset?: Array<number>;
    onLoad?: (entity: sxii.graphic.DivGraphic) => void;
    onUnmount?: (entity: sxii.graphic.DivGraphic) => void;
}

const updateMap = {
    position(instance: sxii.graphic.DivGraphic, position: Array<number>) {
        instance.position = position;
    },
    style(
        instance: sxii.graphic.DivGraphic,
        style: sxii.graphic.DivGraphicOptions,
    ) {
        instance.style = style;
    },
    visible(instance: sxii.graphic.DivGraphic, visible: Boolean) {
        console.log(visible);
        instance.show = visible;
    },
};

const Props = {
    /**
     * false:会自动删除释放所有属性，true：不删除绑定的变量
     */
    isDeleteAttr: {
        type: Boolean,
        default: false,
    },
    position: {
        type: Array as PropType<number[]>,
        default: () => [],
    },
    className: {
        type: String,
        default: '',
    },
    visible: {
        type: Boolean,
        default: false,
    },
    offset: {
        type: Array as PropType<Array<number>>,
        default: () => [0, -28],
    },
    style: {
        type: Object as PropType<sxii.style.DivGraphic>,
        default: () => ({}),
    },
    onLoad: {
        type: Function as PropType<(entity: sxii.graphic.DivGraphic) => void>,
        default: undefined,
    },
    onUnmount: {
        type: Function as PropType<(entity: sxii.graphic.DivGraphic) => void>,
        default: undefined,
    },
};
export default defineComponent({
    name: 'DivGraphic',
    inheritAttrs: false,
    props: Props,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        let layer: sxii.layer.DivLayer | null = inject('DivLayer');
        let entity: sxii.graphic.DivGraphic | undefined = undefined;
        let containerElement: HTMLDivElement | null = null

        onMounted(() => {
            createLayer();
        });
        onUnmounted(() => {
            if (entity) {
                if (props.onUnmount) {
                    props.onUnmount(entity);
                }
                UnRegisterEvents(props, entity, EventDivGraphic);

                entity.destroy(props.isDeleteAttr);
            }
        });
        watchEffect(() => {
            if (entity) {
                entity.html = refreshWindow(props);
            }
        });

        const createLayer = () => {
            containerElement = document.createElement('div');
            const { style, position, offset, ...extra } = props;
            let _options = PickOptions<sxii.graphic.DivGraphicOptions>(extra);
            _options.id = 'DivGraphicOptions';
            const InitContent = refreshWindow(props);
            const [offsetX, offsetY] = offset || [0, -28];
            const [x = 0, y = 0, z = 3] = position;
            _options.position = [x, y, z];

            _options.style = {
                ...style,
                html: InitContent,
                offsetX,
                offsetY,
            };
            console.log('DivGraphic _options: ', _options);
            entity = new sxii.graphic.DivGraphic(_options);
            entity.addTo(layer);

            // UpdatePropsAndRegisterEvents({
            //     updateMap,
            //     eventMap: EventDivGraphic,
            //     prevProps: {},
            //     nextProps: props,
            //     instance: entity,
            // });

            onLoad();
        };
        const refreshWindow = (props: any): string => {
            const { className } = props;
            const str = setChild(className);
            console.log('refreshWindow: ', str);
            return str;
        };

        const setChild = (className?: string): string => {
            return className
                ? `<div class='${className}'>${componentToHtml(
                      <>{slots.default?.()}</>,
                  )}</div>`
                : `${componentToHtml(<>{slots.default?.()}</>)}`;
        };
        const componentToHtml = (com: any) => {
            return `<div class="JetLinkss-Map-InfoWindow map-infoWindow" data-reactroot=""><div class="infoWindow-content"><div class="infoWindow-children"><div>infoWindow 弹窗</div></div></div></div>`
        }
        const onLoad = () => {
            if (entity && props.onLoad) {
                props.onLoad(entity);
            }
        };

        return () => {
            return null;
        };
    },
});
