import { assign, pick } from 'lodash-es'
import { Cartesian3, Cartesian2  } from 'cesium'

interface UpdatePropsAndRegisterEventsParams {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateMap: any
    eventMap: Record<string, string>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevProps: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nextProps: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance: any
}

export interface ImageProps { 
    /** 图片地址 */
    url: string
    /** 图片尺寸比例 1 是原始比例 */
    scale?: number
}

export interface PlaneOptionsProps {
    /** 方向 ,可选项：x (解释：X轴),y (解释：Y轴),z (解释：Z轴) */
    normal: 'x' | 'y' | 'z'
    /** 偏移距离 */
    distance: number
}

/** 异步加载JS文件  */
export const injectScript = (script: Array<string>): Promise<any> => {
    return new Promise((resolve) => {
        let s: Array<HTMLScriptElement> = []
        const last = script.length - 1
        const recursiveLoad = (i: number) => {
            let url = script[i]
            if (url.includes('.css')) {
                const link = document.createElement('link')
                link.href = url
                link.rel = 'stylesheet'
                document.head.appendChild(link)
                if (i !== last) {
                    recursiveLoad(i + 1);
                } else {
                    return resolve(true)
                }
            } else {
                s[i] = document.createElement('script')
                s[i].setAttribute('type', 'text/javascript')
                s[i].onload = (s[i] as any).onreadystatechange = function () {
                    if (!/*@cc_on!@*/0 || this.readyState === 'loaded' || this.readyState === 'complete') {
                        this.onload = this.onreadystatechange = null;
                        if (i !== last) {
                            recursiveLoad(i + 1);
                        } else {
                            return resolve(true)
                        }
                    }
                }
                s[i].setAttribute('src', url)
                document.body.appendChild(s[i])

            }
        }
        recursiveLoad(0)
    })
}

/** 添加绑定事件 */
export const RegisterEvents = (nextProps: any, instance: any, eventMap: Record<string, string>) => {
    for (const key in nextProps) {
        if (key in eventMap) {
            instance.on(eventMap[key], nextProps[key])
        }
    }
}

/** 解除绑定事件 */
export const UnRegisterEvents = (nextProps: any, instance: any, eventMap: Record<string, string>) => {
    for (const key in nextProps) {
        if (key in eventMap) {
            instance.off(eventMap[key], nextProps[key])
        }
    }
}

/** 更新props */
export const applyUpdaterToNextProps = (updateMap: any, prveProps: any, nextProps: any, instance: any) => {
    const map: any = {}

    const iter = (fn: any, key: string) => {
        const nextValue = nextProps[key]
        if (nextValue !== prveProps[key]) {
            map[key] = nextValue
            fn(instance, nextValue)
        }
    }

    function forEach(obj: any, fn: any) {
        Object.keys(obj).forEach(key => (fn(obj[key], key)))
    }

    forEach(updateMap, iter)

    return map
}


export const UpdatePropsAndRegisterEvents = ({
    updateMap,
    eventMap,
    prevProps,
    nextProps,
    instance,
}: UpdatePropsAndRegisterEventsParams) => {
    applyUpdaterToNextProps(updateMap, prevProps, nextProps, instance)
    RegisterEvents(nextProps, instance, eventMap)
}

/** 基础属性 */
export const BaseEntityOptions = ['id', 'name', 'show', 'position', 'positions', 'style', 'attr', 'options.geojson', 'popup', 'tooltip', 'contextmenuItems', 'hasMoveEdit', 'orientation', 'drawShow', 'minPointNum', 'maxPointNum', 'addHeight', 'onBeforeCreate']

/** 选择地图矢量数据的属性  */
export const PickOptions = <T extends unknown>(options: object): T => {

    return pick(options, BaseEntityOptions) as T
}

export interface EventMapProps {
    onAdd?: (e: any) => void,
    onAddGraphic?: (e: any) => void,
    onAddLayer?: (e: any) => void,
    onAddTile?: (e: any) => void,
    onAddTileError?: (e: any) => void,
    onAddTileSuccess?: (e: any) => void,
    onAllTilesLoaded?: (e: any) => void,
    onCameraChanged?: (e: any) => void,
    onCameraMoveEnd?: (e: any) => void,
    onCameraMoveStart?: (e: any) => void,
    onChange?: (e: any) => void,
    onClick?: (e: any) => void,
    onClickGraphic?: (e: any) => void,
    onClickMap?: (e: any) => void,
    onClickTileGraphic?: (e: any) => void,
    onClockTick?: (e: any) => void,
    onDblClick?: (e: any) => void,
    onDrawAddPoint?: (e: any) => void,
    onDrawCreated?: (e: any) => void,
    onDrawMouseMove?: (e: any) => void,
    onDrawRemovePoint?: (e: any) => void,
    onDrawStart?: (e: any) => void,
    onEditMouseDown?: (e: any) => void,
    onEditMouseMove?: (e: any) => void,
    onEditMovePoint?: (e: any) => void,
    onEditRemovePoint?: (e: any) => void,
    onEditStart?: (e: any) => void,
    onEditStop?: (e: any) => void,
    onEditStyle?: (e: any) => void,
    onEnd?: (e: any) => void,
    onEndItem?: (e: any) => void,
    onError?: (e: any) => void,
    onHide?: (e: any) => void,
    onInitialTilesLoaded?: (e: any) => void,
    onKeydown?: (e: any) => void,
    onKeyup?: (e: any) => void,
    onLeftDown?: (e: any) => void,
    onLeftUp?: (e: any) => void,
    onLoad?: (e: any) => void,
    onLoadBefore?: (e: any) => void,
    onMiddleClick?: (e: any) => void,
    onMiddleDown?: (e: any) => void,
    onMiddleUp?: (e: any) => void,
    onMorphComplete?: (e: any) => void,
    onMorphStart?: (e: any) => void,
    onMouseDown?: (e: any) => void,
    onMouseMove?: (e: any) => void,
    onMouseMoveTarget?: (e: any) => void,
    onMouseOut?: (e: any) => void,
    onMouseOver?: (e: any) => void,
    onMouseUp?: (e: any) => void,
    onMove?: (e: any) => void,
    onPinchEnd?: (e: any) => void,
    onPinchMove?: (e: any) => void,
    onPinchStart?: (e: any) => void,
    onPostRender?: (e: any) => void,
    onPostUpdate?: (e: any) => void,
    onPreRender?: (e: any) => void,
    onPreUpdate?: (e: any) => void,
    onRemove?: (e: any) => void,
    onRemoveGraphic?: (e: any) => void,
    onRemoveLayer?: (e: any) => void,
    onRemoveTile?: (e: any) => void,
    onRightClick?: (e: any) => void,
    onRightDown?: (e: any) => void,
    onRightUp?: (e: any) => void,
    onShow?: (e: any) => void,
    onStart?: (e: any) => void,
    onStop?: (e: any) => void,
    onUpdate?: (e: any) => void,
    onWheel?: (e: any) => void,
}

/** 地图事件 */
export const EventMap = {
    onAdd: "add",
    onAddGraphic: "addGraphic",
    onAddLayer: "addLayer",
    onAddTile: "addTile",
    onAddTileError: "addTileError",
    onAddTileSuccess: "addTileSuccess",
    onAllTilesLoaded: "allTilesLoaded",
    onCameraChanged: "cameraChanged",
    onCameraMoveEnd: "cameraMoveEnd",
    onCameraMoveStart: "cameraMoveStart",
    onChange: "change",
    onClick: "click",
    onClickGraphic: "clickGraphic",
    onClickMap: "clickMap",
    onClickTileGraphic: "clickTileGraphic",
    onClockTick: "clockTick",
    onDblClick: "dblClick",
    onDrawAddPoint: "draw-add-point",
    onDrawCreated: "draw-created",
    onDrawMouseMove: "draw-mouse-move",
    onDrawRemovePoint: "draw-remove-point",
    onDrawStart: "draw-start",
    onEditMouseDown: "edit-mouse-movestart",
    onEditMouseMove: "edit-mouse-move",
    onEditMovePoint: "edit-move-point",
    onEditRemovePoint: "edit-remove-point",
    onEditStart: "edit-start",
    onEditStop: "edit-stop",
    onEditStyle: "edit-style",
    onEnd: "end",
    onEndItem: "endItem",
    onError: "error",
    onHide: "hide",
    onInitialTilesLoaded: "initialTilesLoaded",
    onKeydown: "keydown",
    onKeyup: "keyup",
    onLeftDown: "leftDown",
    onLeftUp: "leftUp",
    onLoad: "load",
    onLoadBefore: "loadBefore",
    onMiddleClick: "middleClick",
    onMiddleDown: "middleDown",
    onMiddleUp: "middleUp",
    onMorphComplete: "morphComplete",
    onMorphStart: "morphStart",
    onMouseDown: "mouseDown",
    onMouseMove: "mouseMove",
    onMouseMoveTarget: "mouseMoveTarget",
    onMouseOut: "mouseOut",
    onMouseOver: "mouseOver",
    onMouseUp: "mouseUp",
    onMove: "move",
    onPinchEnd: "pinchEnd",
    onPinchMove: "pinchMove",
    onPinchStart: "pinchStart",
    onPostRender: "postRender",
    onPostUpdate: "postUpdate",
    onPreRender: "preRender",
    onPreUpdate: "preUpdate",
    onRemove: "remove",
    onRemoveGraphic: "removeGraphic",
    onRemoveLayer: "removeLayer",
    onRemoveTile: "removeTile",
    onRightClick: "rightClick",
    onRightDown: "rightDown",
    onRightUp: "rightUp",
    onShow: "show",
    onStart: "start",
    onStop: "stop",
    onUpdate: "update",
    onWheel: "wheel"
}

export interface EventEntityMapProps extends Pick<EventMapProps,
    'onAdd' | 'onRemove' | 'onShow' | 'onHide' |
    'onClick' | 'onRightClick' | 'onMouseOver' |
    'onMouseOut' | 'onDrawStart' | 'onDrawMouseMove' |
    'onDrawAddPoint' | 'onDrawRemovePoint' | 'onDrawCreated' |
    'onEditStart' | 'onEditMouseDown' | 'onEditMouseMove' |
    'onEditMovePoint' | 'onEditRemovePoint' | 'onEditStyle' |
    'onEditStop'
> { }
/** 矢量覆盖物事件 */
export const EventEntityMap = pick(EventMap, [
    'onAdd', 'onRemove', 'onShow', 'onHide',
    'onClick', 'onRightClick', 'onMouseOver',
    'onMouseOut', 'onDrawStart', 'onDrawMouseMove',
    'onDrawAddPoint', 'onDrawRemovePoint', 'onDrawCreated',
    'onEditStart', 'onEditMouseDown', 'onEditMouseMove',
    'onEditMovePoint', 'onEditRemovePoint', 'onEditStyle',
    'onEditStop',
])

export interface EventLayerMapProps extends Pick<EventMapProps,
    'onAdd' | 'onRemove' | 'onShow' | 'onHide' |
    'onAddTile' | 'onAddTileSuccess' | 'onAddTileError' |
    'onClick'
> { }

/** 图层事件 */
export const EventLayerMap = pick(EventMap, [
    'onAdd', 'onRemove', 'onShow', 'onHide',
    'onAddTile', 'onAddTileSuccess', 'onAddTileError',
    'onClick'
])

export interface  EventBaseMapProps extends Pick<EventMapProps,
    'onAddLayer'| 'onRemoveLayer'| 'onCameraMoveStart'|
    'onCameraMoveEnd'| 'onCameraChanged'| 'onPreUpdate'|
    'onPostUpdate'| 'onPreRender'| 'onPostRender'| 'onMorphStart'|
    'onMorphComplete'| 'onClockTick'| 'onClick'| 'onClickGraphic'|
    'onClickTileGraphic'| 'onClickMap'| 'onDblClick'| 'onLeftDown'|
    'onLeftUp'| 'onMouseMove'| 'onMouseMoveTarget'| 'onWheel'|
    'onRightClick'| 'onRightDown'| 'onRightUp'| 'onMiddleClick'| 'onMiddleDown'|
    'onMiddleUp'| 'onPinchStart'| 'onPinchEnd'| 'onPinchMove'|
    'onMouseDown'| 'onMouseUp'| 'onMouseOver'| 'onMouseOut'|
    'onKeydown'| 'onKeyup'
> {}

/** 地图事件 */
export const EventBaseMap = pick(EventMap, [
    'onAddLayer', 'onRemoveLayer', 'onCameraMoveStart',
    'onCameraMoveEnd', 'onCameraChanged', 'onPreUpdate',
    'onPostUpdate', 'onPreRender', 'onPostRender', 'onMorphStart',
    'onMorphComplete', 'onClockTick', 'onClick', 'onClickGraphic',
    'onClickTileGraphic', 'onClickMap', 'onDblClick', 'onLeftDown',
    'onLeftUp', 'onMouseMove', 'onMouseMoveTarget', 'onWheel',
    'onRightClick', 'onRightDown', 'onRightUp', 'onMiddleClick', 'onMiddleDown',
    'onMiddleUp', 'onPinchStart', 'onPinchEnd', 'onPinchMove',
    'onMouseDown', 'onMouseUp', 'onMouseOver', 'onMouseOut',
    'onKeydown', 'onKeyup'
])

/** BaseGraphiclayerEvent */
export interface BaseGraphiclayerEventProps extends Pick<EventMapProps, 
    'onAdd'| 'onRemove'| 'onShow'| 'onHide'|
    'onClick' | 'onRightClick'| 'onMouseOver'| 
    'onMouseOut'
> {}

export const BaseGraphiclayerEvent = pick(EventMap, [
    'onAdd', 'onRemove', 'onShow', 'onHide',
    'onClick' , 'onRightClick', 'onMouseOver', 
    'onMouseOut'
])

/** TilesetLayerEvent */
export interface TilesetLayerEventProps extends BaseGraphiclayerEventProps,  Pick<EventMapProps, 
    'onInitialTilesLoaded'| 'onAllTilesLoaded'| 'onLoadBefore' 
> {}

export const TilesetLayerEvent = assign(BaseGraphiclayerEvent, pick(EventMap, [
    'onInitialTilesLoaded', 'onAllTilesLoaded', 'onLoadBefore'
])) 


/** DivGraphic 事件 */
export interface EventDivGraphicProps extends Pick<EventMapProps, 
    'onAdd'| 'onRemove'| 'onShow'| 'onHide'|
    'onChange'| 'onClick'| 'onRightClick'| 'onMouseOver'|
    'onMouseOut'| 'onDrawStart'| 'onEditMouseMove'| 'onDrawCreated'|
    'onEditStart'| 'onEditMouseMove'| 'onEditStop'
>{}

export const EventDivGraphic = pick(EventMap, [
    'onAdd', 'onRemove', 'onShow', 'onHide',
    'onChange', 'onClick', 'onRightClick', 'onMouseOver',
    'onMouseOut', 'onDrawStart', 'onEditMouseMove', 'onDrawCreated',
    'onEditStart', 'onEditMouseMove', 'onEditStop'
])

/** RoamLine */
export interface RoamLineEventProps extends Pick<EventMapProps, 
    'onAdd'| 'onRemove'| 'onShow'| 'onHide'|
    'onClick' | 'onRightClick'| 'onMouseOver'| 
    'onMouseOut'| 'onStart'| 'onChange'| 'onEndItem'|
    'onEnd'
> {}

export const RoamLineEvent = pick(EventMap, [
    'onAdd', 'onRemove', 'onShow', 'onHide',
    'onClick' , 'onRightClick', 'onMouseOver', 
    'onMouseOut', 'onStart', 'onChange', 'onEndItem',
    'onEnd'
])


/** 处理图片 */
export const handleImage = (image?: ImageProps | string, defalutUrl?:string): object | undefined => {
    return {
        image: typeof image === 'object' ? image.url : image || defalutUrl,
        scale: typeof image === 'object' ? image.scale : 1
    } 
}
/** 处理偏移 */
export const handleOffset = (offset: Array<number>): object => {
    const [x, y] = offset
    return {
        hasPixelOffset: true,
        pixelOffset: [x, y !== undefined ? y : x]
    }
}
/** 处理附带文字的显示 */
export const handleLable = (labelOptions:sxii.style.LabelEntity):sxii.style.LabelEntity => {
    const defaultLableOptions:sxii.style.LabelEntity = {
        horizontalOrigin: 0,
        verticalOrigin: 1,
        color: '#000000',
        background: true,
        backgroundColor: '#ffffff',
    }

    return labelOptions ? labelOptions : defaultLableOptions
}

/** 处理指定平面的法线和距离。 */
export const handlePlane = (plane: PlaneOptionsProps): object => {
    return {
        plane_normal: plane.normal,
        plane_distance: plane.distance
    }
}

/** 处理指定平面的 长度 宽度和高度。 */
export const handleCartesian = (value: Array<number>) => {
    const [x = 10, y, z] = value
    return value.length !== 3 ? new Cartesian2(x, y !== undefined ? y : x) : new Cartesian3(x, y, z) 
}

// const styleAttrFn = [
//     {
//         key:'label',
//         callback: handleLable
//     },
//     {
//         key:'image',
//         callback: handleImage
//     },
//     {
//         key:'plane',
//         callback: handlePlane
//     },
//     {
//         key:'offset',
//         callback: handleOffset
//     },
//     {
//         key:'radii',
//         callback: handleCartesian
//     },
//     {
//         key:'dimensions',
//         callback: handleCartesian
//     },
//     {
//         key:'innerRadii',
//         callback: handleCartesian
//     },
// ]

// const styleAttr = [
//     'rotation', 'radius', 'width','height', 
//     'diffHeight', 'topRadius', 'bottomRadius', 
//     'length', 'semiMinorAxis', 'semiMajorAxis', 
//     'iconClass', 'iconSize', 'color', 'url',
//     'scale', 'shape', 'pixelSize'
// ]

// export const handleStyle = (object: any) => {
//     if (!object) return {}
//     const obj:any = {}
//     for (const key in object) {
        
//         const handleStyleObj = styleAttrFn.find(item => (item.key === key && object[key]))
//         if(handleStyleObj || styleAttr.includes(key)) {
//             obj.style = {
//                 ...object.style,
//                 ...obj.style,
//                 [key]:handleStyleObj ? handleStyleObj.callback(object[key]) : object[key]
//             } 
//         }
//     }
//     return obj
// }

