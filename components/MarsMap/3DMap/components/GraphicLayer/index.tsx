import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    provide,
    ref,
} from 'vue';
import {
    applyUpdaterToNextProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventLayerMap,
    EventLayerMapProps,
    PickOptions,
} from '../../utils';
import { useMap } from '../../../hooks/useMap';

export interface DeleteAttr {
    /**@default {false} false:会自动删除释放所有属性，true：不删除绑定的变量 */
    isDeleteAttr?: boolean;
}

export interface GraphicLayerProps
    extends sxii.layer.GraphicLayerOptions,
        DeleteAttr,
        EventLayerMapProps {
    onLoad?: (layer: sxii.layer.GraphicLayer) => void;
    onUnmount?: (layer: sxii.layer.GraphicLayer) => void;
}

const updateMap = {
    hasEdit(layer: sxii.layer.GraphicLayer, edit: boolean) {
        layer.hasEdit = edit;
    },
};

interface State {
    load: boolean;
}

const Props = {
    onLoad: {
        type: Function as PropType<GraphicLayerProps['onLoad']>,
        default: () => {},
    },
    onUnmount: {
        type: Function as PropType<GraphicLayerProps['onUnmount']>,
        default: () => {},
    },
};

export default defineComponent({
    name: 'GraphicLayer',
    inheritAttrs: false,
    props: Props,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        const map: sxii.Map | null = useMap();
        let layer: sxii.layer.GraphicLayer | undefined = undefined;
        const load = ref(false);

        onMounted(() => {
            createLayer();
        });

        onUnmounted(() => {
            if (layer) {
                if (props.onUnmount) {
                    props.onUnmount(layer);
                }
                UnRegisterEvents(props, layer, EventLayerMap);

                layer.remove(true);

                if (layer && !layer.getGraphics().length) {
                    layer.destroy(true);
                }
            }
        });

        const createLayer = () => {
            let _options = PickOptions<sxii.graphic.BaseGraphicOptions>(props);
            _options.name = 'graphic-layer';
            // layer = new sxii.layer.GraphicLayer(_options);
            layer = new sxii.layer.GraphicLayer();

            // layer.addTo(map);
            map.addLayer(layer);
            console.log('layer==========: ', layer);
            provide('graphicLayer', layer);

            // 在layer上绑定监听事件
            layer.on(sxii.EventType.click, function (event) {
                console.log('监听layer，单击了矢量对象', event);
            });
            bindLayerPopup();
            bindLayerContextMenu();
            // 加一些演示数据
            addDemoGraphic1(layer);
            // UpdatePropsAndRegisterEvents({
            //     updateMap,
            //     eventMap: EventLayerMap,
            //     prevProps: {},
            //     nextProps: props,
            //     instance: layer,
            // });

            load.value = true;
            onLoad();
        };

        const onLoad = () => {
            if (layer && props.onLoad) {
                props.onLoad(layer);
            }
        };
        function bindLayerPopup() {
            layer
                .bindPopup(function (event) {
                    console.log('bindPopup: ', event);
                    const attr = event.graphic.attr || {};
                    attr['类型'] = event.graphic.type;
                    attr['来源'] = '我是layer上绑定的Popup';
                    attr['备注'] = '我支持鼠标交互';
                    // return '<div style="width: 200px;height: 200px;color: blue">我是layer上绑定的Popup</div>';
                    return sxii.Util.getTemplateHtml({
                        title: '矢量图层111',
                        template: 'all',
                        attr,
                    });
                })
                .openPopup();
        }
        function bindLayerContextMenu() {
            // 绑定右键菜单
            layer.bindContextMenu([
                {
                    text: '开始编辑对象1',
                    icon: 'fa fa-edit',
                    show: function (e) {
                        const graphic = e.graphic;
                        if (!graphic || !graphic.hasEdit) {
                            return false;
                        }
                        return !graphic.isEditing;
                    },
                    callback: (e) => {
                        const graphic = e.graphic;
                        if (!graphic) {
                            return false;
                        }
                        if (graphic) {
                            layer.startEditing(graphic);
                        }
                    },
                },
                {
                    text: '停止编辑对象',
                    icon: 'fa fa-edit',
                    show: function (e) {
                        const graphic = e.graphic;
                        if (!graphic || !graphic.hasEdit) {
                            return false;
                        }
                        return graphic.isEditing;
                    },
                    callback: (e) => {
                        const graphic = e.graphic;
                        if (!graphic) {
                            return false;
                        }
                        if (graphic) {
                            graphic.stopEditing();
                        }
                    },
                },
                {
                    text: '删除对象',
                    icon: 'fa fa-trash-o',
                    show: (event) => {
                        const graphic = event.graphic;
                        if (!graphic || graphic.isDestroy) {
                            return false;
                        } else {
                            return true;
                        }
                    },
                    callback: (e) => {
                        const graphic = e.graphic;
                        if (!graphic) {
                            return;
                        }
                        const parent = graphic.parent; // 右击是编辑点时
                        layer.removeGraphic(graphic);
                        if (parent) {
                            layer.removeGraphic(parent);
                        }
                    },
                },

                {
                    text: '计算周长',
                    icon: 'fa fa-medium',
                    callback: (e) => {
                        const graphic = e.graphic;
                        const strDis = sxii.MeasureUtil.formatDistance(
                            graphic.distance,
                        );
                        // globalAlert("该对象的周长为:" + strDis)
                    },
                },
                {
                    text: '计算面积',
                    icon: 'fa fa-reorder',
                    callback: (e) => {
                        const graphic = e.graphic;
                        const strArea = sxii.MeasureUtil.formatArea(
                            graphic.area,
                        );
                        // globalAlert("该对象的面积为:" + strArea)
                    },
                },
            ]);
        }
        function addDemoGraphic1(graphicLayer) {
            const graphic = new sxii.graphic.PolygonEntity({
                positions: [
                    [117.271662, 31.870639, 21.49],
                    [117.290605, 31.871517, 19.47],
                    [117.302056, 31.858145, 16.27],
                    [117.299439, 31.847545, 14.77],
                    [117.267705, 31.8491, 22.11],
                ],
                style: {
                    color: '#ff0000',
                    opacity: 0.5,
                    outline: true,
                    outlineWidth: 3,
                    outlineColor: 'red',
                    label: {
                        text: '我是火星科技',
                        font_size: 18,
                        color: 'blue',
                        distanceDisplayCondition: true,
                        distanceDisplayCondition_far: 500000,
                        distanceDisplayCondition_near: 0,
                    },
                },
                attr: { remark: '示例1' },
            });
            graphicLayer.addGraphic(graphic); // 还可以另外一种写法: graphic.addTo(graphicLayer)
        }
        return () => {
            return <>{load.value ? slots.default?.() : null}</>;
        };
    },
});
