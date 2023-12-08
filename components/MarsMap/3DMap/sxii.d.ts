
/** 摄像机属性 */
interface CameraOptions {
    /** 视角模式类型，包括：'':无、'gs':跟随视角、'dy':第一视角、'sd':上帝视角*/
    type?: string
    /**	'gs'跟随视角时的 初始俯仰距离值（单位：米）*/
    radius?: number
    /**	'gs'跟随视角时的 初始方向角度值，绕垂直于地心的轴旋转角度, 0至360*/
    heading?: number
    /**	'gs'跟随视角时的 初始俯仰角度值，绕纬度线旋转角度, 0至360 **/
    pitch?: number
    /**	锁定第一视角时，距离运动点的距离（后方）*/
    followedX?: number
    /**	'dy'锁定第一视角或'sd'上帝视角时，距离运动点的高度（上方）*/
    followedZ?: number
}

/** 投影属性 */
interface Shading {
    /**	可选wall类型所支持的参数 */
    wall?: sxii.graphic.WallShadingOptions
    /**	可选cylinder类型所支持的参数 */
    cylinder?: sxii.graphic.CylinderShadingOptions
    /**	可选circle类型所支持的参数 */
    circle?: sxii.graphic.CircleShadingOptions
    /**	可选polyline类型所支持的参数 */
    polyline?: sxii.graphic.PolylineShadingOptions
    /** polylineGoing类型所支持的参数 */
    polylineGoing?: sxii.graphic.PolylineGoingShadingOptions
}

declare namespace sxii {

    enum CRS {
        'EPSG3857' = 'EPSG:3857',
        'EPSG4326' = 'EPSG:4326',
        'EPSG4490' = 'EPSG:4490',
        'gcj' = 'gcj'
    }

    type CRSString = string

    enum ChinaCRS {
        'WGS84' = 'WGS84',
        'GCJ02' = 'GCJ02',
        'BAIDU' = 'BAIDU'
    }

    type ChinaCRSString = string

    /** 地形类型 */
    type TerrainType = 'gee' | string

    /** 经纬度 */
    interface LatLngLiteral {
        /** 经度值, 180 - 180 */
        lng: number
        /** 纬度值, -90 - 90 */
        lat: number
    }

    interface LngLatProps extends LatLngLiteral {
        /** 高度值 */
        alt: number
        /** 方向角度值，绕垂直于地心的轴旋转角度, 0-360 */
        heading: number
        /** 俯仰角度值，绕纬度线旋转角度, 0-360 */
        pitch: number
        /** 翻滚角度值，绕经度线旋转角度, 0-360 */
        roll?: number
    }

    interface ExtentProps {
        xmin: number,
        xmax: number,
        ymin: number,
        ymax: number,
        height: number,
        formatNum: boolean
    }
    /** 旋转方向 */
    interface Rotation {
        /** x方向,角度值 0-360 */
        x: number,
        /** y方向,角度值 0-360 */
        y: number,
        /** 四周方向,角度值 0-360 */
        z: number,
    }

    interface ContextMenuOptions {
        /** 菜单文字 */
        text?: string
        /** 小图标css */
        iconCls?: string
        /** 菜单项是否显示的回调方法  */
        show?: Function | Boolean
        /** 菜单项单击后的回调方法 */
        callback?: Function
        /** 当有二级子菜单时，配置数组 */
        children?: Array<ContextMenuOptions>
    }

    interface PopupProps {
        /** 窗口的XY轴偏移的像素位置 */
        anchor?: Array<number>
        /** 是否实时更新面板，此时需要绑定content回调方法处理。 */
        timeRender?: Boolean
        /** popup的DOM添加到页面的回调方法,特殊需要操作dom的场景下使用（如视频video、echarts等）*/
        onAdd?: Function
        /** popup的DOM从页面移除的回调方法*/
        onRemove?: Function
    }

    /**@see http://sxii.cn/api.html 详细注释 */
    class Map extends BaseClass {
        constructor(mapDiv: string | Element, opts?: MapOptions);
        basemap: string | number | sxii.layer.BaseTileLayer
        readonly camera: Cesium.Camera
        readonly canvas: HTMLCanvasElement
        readonly cesiumWidget: Cesium.CesiumWidget
        readonly clock: Cesium.Clock
        readonly container: Element
        readonly controls: KeyboardRoam
        readonly dataSources: Cesium.DataSourceCollection
        readonly entities: Cesium.EntityCollection
        fixedLight: Boolean
        readonly graphicLayer: sxii.layer.GraphicLayer
        hasTerrain: Boolean
        readonly imageryLayers: Cesium.ImageryLayerCollection
        readonly keyboardRoam: KeyboardRoam
        readonly level: number
        readonly mouseEvent: MouseEvent
        onlyPickModelPosition: Boolean
        readonly scene: Cesium.Scene
        terrainProvider: Cesium.TerrainProvider
        trackedEntity: Cesium.Entity
        readonly viewer: Cesium.Viewer

        addControl: (control: sxii.control.BaseControl, enabledVal: boolean) => this
        addLayer: (layer: sxii.layer.BaseLayer, showVal?: Boolean) => this
        bindContextMenu: (content: Array<ContextMenuOptions>, options?: {}) => this
        cancelFlight: () => this
        changeMouseModel: (rightTilt: Boolean) => void
        closeContextMenu: () => this
        closePopup: (targt?: {}) => this
        closeSmallTooltip: () => this
        closeTooltip: () => this
        destroy: () => void
        flyHome(options: { duration?: number }): void
        flyTo(target: any, options?: {
            duration?: number
            maximumHeight?: number
            offset?: Array<number>
        }): Promise<Boolean>
        flyToExtent(extent: ExtentProps, options: Omit<sxii.graphic.flyToOptions, 'radius'>): void
        flyToGraphic(graphic: sxii.graphic.BaseGraphic, options: sxii.graphic.flyToOptions): void
        flyToPoint(point: LatLngPoint | Cesium.Cartesian3, options?: Omit<sxii.graphic.flyToOptions, 'scale' | 'minHeight' | 'maxHeight' | 'heading' | 'convert'>): void
        flyToPositions(positions: Array<Cesium.Cartesian3>, options?: sxii.graphic.flyToOptions): void
        getBasemaps(removeEmptyGroup: Boolean): Array<sxii.layer.BaseLayer>
        getCameraView(options: { simplify: Boolean }): {}
        getCenter: () => LatLngPoint
        getContextMenu(): Array<object>
        getDefaultContextMenu(): Array<object>
        getExtent(options: { formatNum: number }): {}
        getLayer(key: object | string | number, attrName?: string): sxii.layer.BaseLayer
        getLayerById(id: string | number): sxii.layer.BaseLayer
        getNextLayerId(): number
        getLayers(options: { basemaps?: Boolean, layers?: Boolean }): Array<sxii.layer.BaseLayer>
        getNextLayerId(): number
        getTileLayers(): Array<sxii.layer.BaseLayer>
        hasControl(control: sxii.layer.BaseLayer | string): Boolean
        hasLayer(layer: sxii.layer.BaseLayer | string): Boolean
        hasThing(thing: sxii.BaseThing | string): Boolean
        isFlyAnimation(): Boolean
        getOptions(): MapOptions
        openContextMenu(position: Cesium.Cartesian3, content: Array<object>, options: object): this
        openFlyAnimation(options: { center?: LatLngLiteral, callback?: Function }): void
        openPopup(position: Cesium.Cartesian3 | Array<number>, content: string | Function | sxii.graphic.BaseGraphic | sxii.layer.BaseGraphicLayer, options: PopupProps): this
        openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: any): this
        openTooltip(position: Cesium.Cartesian3, content: string | Function | sxii.graphic.BaseGraphic | sxii.layer.BaseGraphicLayer, options: Omit<PopupProps, 'timeRender'>): this
        pick3DTileset(positions: Cesium.Cartesian3 | Array<Cesium.Cartesian3>): Cesium.Cesium3DTileset
        removeControl(control: sxii.control.BaseControl, hasDestory: boolean): this
        removeEffect(item: any, hasDestory: boolean): this
        removeLayer(layer: sxii.layer.BaseLayer, hasDestory: boolean): this
        removeThing(item: sxii.BaseThing, hasDestory: Boolean): this
        rotateAnimation(options: {
            duration?: number
            center?: {}
            callback?: Function
        }): void
        rotateAnimation(obj: {
            duration?: number,
            center?: {},
            callback?: Function,
        }): void

        setCameraView(cameraView: Partial<LngLatProps>, options?: Omit<sxii.graphic.flyToOptions, 'radius' | 'scale' | 'minHeight' | 'maxHeight' | 'heading' | 'pitch' | 'roll'>): void
        setCameraViewList(arr: Array<LngLatProps & {
            duration?: number
            stop?: number
            onStaert?: Function
            onEnd?: Function
        }>, enfun: Function): void
        setCursor(val: Boolean): void
        setPitchRange(max: number, min: number): void
        setSceneOptions(options: sceneOptions): this
        unbindContextMenu(): this
    }

    /** 场景参数 */
    interface sceneOptions {
        center?: LngLatProps
        /** @default false 是否移除Cesium默认的双击事件  */
        removeDblClick?: Boolean
        /** @default null cesium Ion服务的 Token令牌  */
        ionToken?: Boolean
        /** @default false 获取或设置渲染分辨率的缩放比例。小于1.0的值可以改善性能不佳的设备上的性能，而值大于1.0则将以更高的速度呈现分辨率，然后缩小比例，从而提高视觉保真度。
         * 例如，如果窗口小部件的尺寸为640x480，则将此值设置为0.5将导致场景以320x240渲染，然后在设置时按比例放大设置为2.0将导致场景以1280x960渲染，然后按比例缩小。 */
        resolutionScale?: Boolean
        /** 是否显示太阳 */
        showSun?: Boolean
        /** 是否显示月亮 */
        showMoon?: Boolean
        /** 是否显示天空盒 */
        showSkyBox?: Boolean
        /** 是否显示地球大气层外光圈 */
        showSkyAtmosphere?: Boolean
        /** 是否启用雾化效果 */
        fog?: Boolean
        /** 是否开启快速抗锯齿 */
        fxaa?: Boolean
        /** 是否关闭高动态范围渲染(不关闭时地图会变暗) */
        highDynamicRange?: Boolean
        /**空间背景色 ，css颜色值 */
        backgroundColor?: string
        /** @default {Cesium.SceneMode.SCENE3D} 初始场景模式。*/
        sceneMode?: Cesium.SceneMode
        /** @default {false} 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。*/
        scene3DOnly?: Boolean
        /** @default {true} 是否开启时钟动画*/
        shouldAnimate?: Boolean
        /** @default {false} 是否启用日照阴影*/
        shadows?: Boolean
        /** @default {true} 如果此小部件应控制渲染循环，则为true，否则为false。*/
        useDefaultRenderLoop?: Boolean
        /**使用默认渲染循环时的目标帧速率。*/
        targetFrameRate?: number
        /**@default {true} 如果为true，则以浏览器建议的分辨率渲染，并忽略 window.devicePixelRatio 。*/
        useBrowserRecommendedResolution?: Boolean
        /** @default {true} 如果为true，则此小部件将自动跟踪新添加的数据源的时钟设置，并在数据源的时钟发生更改时进行更新。如果要独立配置时钟，请将其设置为false。*/
        automaticallyTrackDataSourceClocks?: Boolean
        /** WebGL创建属性 传递给 Cesium.Scene 的 options 。cesium.Scene. */
        contextOptions?: object
        /** @default {true} 如果为true，并且配置支持它，则使用顺序无关的半透明性。*/
        orderIndependentTranslucency?: Boolean
        /** 地形夸张倍率，用于放大地形的标量。请注意，地形夸张不会修改其他相对于椭球的图元。*/
        terrainExaggeration?: number
        /** @default {Cesium.ShadowMode.RECEIVE_ONLY} 确定地形是否投射或接收来自光源的阴影。*/
        terrainShadows?: Cesium.ShadowMode
        /** @default {Cesium.MapMode2D.INFINITE_SCROLL}} 确定2D地图是可旋转的还是可以在水平方向无限滚动。*/
        mapMode2D?: Cesium.MapMode2D
        /**  如果为真，渲染帧只会在需要时发生，这是由场景中的变化决定的。
         * 启用可以减少你的应用程序的CPU / GPU使用量，并且在移动设备上使用更少的电池，但是需要使用 Scene#requestRender 在这种模式下显式地渲染一个新帧。
         * 在许多情况下，在API的其他部分更改场景后，这是必要的。参见 Improving Performance with Explicit Rendering.*/
        requestRenderMode?: Boolean
        /**  如果requestRenderMode为true，这个值定义了在请求渲染之前允许的模拟时间的最大变化。参见 Improving Performance with Explicit Rendering.*/
        maximumRenderTimeChange?: number
        globe?: {
            /** @default {true} 是否显示地球 */
            show?: Boolean
            /** @default {'#546a53'} 地球背景色 ，css颜色值 */
            baseColor?: string
            /** @default {false} 是否启用深度监测, 可以开启来测试矢量对象是否在地形下面或被遮挡。 */
            depthTestAgainstTerrain?: Boolean
            /** @default {true} 是否在地球上绘制的地面大气 */
            showGroundAtmosphere?: Boolean
            /** @default {false} 是否显示昼夜区域 */
            enableLighting?: Boolean
            /** @default {100} 地形图块缓存的大小，表示为图块数。任何其他只要不需要渲染，就会释放超出此数目的图块这个框架。较大的数字将消耗更多的内存，但显示细节更快例如，当缩小然后再放大时。 */
            tileCacheSize?: number
        }
        cameraController?: {
            /** @default {3.0} 鼠标滚轮放大的步长参数*/
            zoomFactor?: number
            /** @default {true} 为false时 解除在南北极区域鼠标操作限制*/
            constrainedAxis?: Boolean
            /** @default {1.0} 变焦时相机位置的最小量级（以米为单位）。默认为1*/
            minimumZoomDistance?: number
            /** @default {50000000.0} 变焦时相机位置的最大值（以米为单位）*/
            maximumZoomDistance?: number
            /** @default {80000} 低于此高度时绕鼠标键绕圈，大于时绕视图中心点绕圈。*/
            minimumCollisionTerrainHeight?: number
            /** @default {true} 2D和3D视图下，是否允许用户旋转相机*/
            enableRotate?: Boolean
            /** @default {true} 2D和哥伦布视图下，是否允许用户平移地图*/
            enableTranslate?: Boolean
            /** @default {true} 3D和哥伦布视图下，是否允许用户倾斜相机*/
            enableTilt?: Boolean
            /** @default {true} 是否允许 用户放大和缩小视图*/
            enableZoom?: Boolean
            /** @default {true} 是否允许 地形相机的碰撞检测。*/
            enableCollisionDetection?: Boolean
        }
        clock?: {
            /**@default {null} 当前的时间 */
            currentTime: string | Cesium.JulianDate

            /**@default {1.0} 当前的速度 */
            multiplier: number
        }
    }

    /** 控件参数 */
    interface controlOptions {
        /**@default {true	} 是否绑定默认的地图右键菜单 */
        defaultContextMenu?: Boolean
        /**@default {false	} 鼠标滚轮缩放美化样式 MouseDownView */
        mouseDownView?: Boolean
        /** 鼠标提示控件 */
        location?: {
            /**是否显示实时FPS帧率 */
            fps?: Boolean
            /**显示内容的格式化html,完整的为： 
             * 经度:{x}
                纬度:{y}
                海拔：{z}米
                层级：{level}
                方向：{heading}度
                俯仰角：{pitch}度
                视高：{height}米
            */
            format?: string | Function
        }
        /** 导航球控件 */
        navigation?: {
            /**比例尺 css定位位置 */
            legend?: object
            /**导航球 css定位位置 */
            compass?: object

        }
        /**@default {true	} 是否显示 点击要素之后显示的信息 */
        infoBox?: Boolean
        /**@default {true	} 选择模型时，是否显示绿色框 */
        selectionIndicator?: Boolean
        /**@default {true	} 是否创建 左下角仪表动画面板 */
        animation?: Boolean
        /**@default {true	} 是否创建 下侧时间线控件面板 */
        timeline?: Boolean
        /**@default {true	} 是否显示 basemaps底图切换按钮 */
        baseLayerPicker?: Boolean
        /**@default {true	} 是否显示 全屏按钮 */
        fullscreenButton?: Boolean
        /**@default {false	} 是否显示 右下角vr虚拟现实按钮 */
        vrButton?: Boolean
        /**@default {true	} 是否显示 地名查找控件按钮 */
        geocoder?: Boolean | Array<any>
        /**@default {true	} 是否显示 视角复位按钮 */
        homeButton?: Boolean
        /**@default {true	} 是否显示 二三维视图切换按钮 */
        sceneModePicker?: Boolean
        /**@default {false	} 是否显示 用于在透视和正投影之间进行切换按钮 */
        projectionPicker?: Boolean
        /**@default {true	} 是否显示 帮助按钮 */
        navigationHelpButton?: Boolean
        /**@default {true	} 在用户明确单击按钮之前是否自动显示navigationHelpButton */
        navigationInstructionsInitiallyVisible?: Boolean
        /**@default {true	} 如果为true，则在发生渲染循环错误时，此小部件将自动向包含错误的用户显示HTML面板。 */
        showRenderLoopErrors?: Boolean
    }

    interface terrainOptions {
        /** 地形类型 */
        type?: TerrainType
        /** 地形服务地址 */
        url: string | Cesium.Resource
        /**@default {false} 是否启用显示地形 */
        show?: Boolean
        /**@default {false} 是否应该从服务器请求额外的光照信息，如果可用，以每个顶点法线的形式。 */
        requestVertexNormals?: Boolean
        /**@default {false} 是否应该向服务器请求每个瓦的水掩膜(如果有的话)。 */
        requestWaterMask?: Boolean
        /**@default {true} 是否应该从服务器请求每个块元数据(如果可用)。 */
        requestMetadata?: Boolean
    }

    interface basemapOptions extends sxii.layer.BaseTileLayerOptions {
        type: string
    }

    interface layerOptions {
        /** 图层类型 */
        type: string
        /** 图层id标识 */
        id?: string | number
        /**@default {-1} 图层父级的id，一般图层管理中使用 */
        pid?: string | number
        /**@default {'未命名'} 图层名称 */
        name?: string
        /**@default {true} 图层是否显示 */
        show?: Boolean
        /**@default {null} 图层自定义定位视角，默认根据数据情况自动定位。 */
        center?: object
        /**@default {null} 当图层支持popup弹窗时，绑定的值 */
        popup?: object
        /**@default {null} 当图层支持tooltip弹窗时，绑定的值 */
        tooltip?: object
        [key: string]: any
    }

    interface BasemapsOptions extends basemapOptions {
        [key: string]: any
    }

    interface MapOptions {
        /** 场景参数 */
        scene?: sceneOptions
        /** 控件参数 */
        control?: controlOptions
        /** 地图服务配置 */
        terrain?: terrainOptions
        /** 地图图层配置 */
        basemaps?: Array<BasemapsOptions>
        /** 可以叠加显示的图层配置 */
        layers?: Array<layerOptions>
        /** 图层中统一的url模版，。比如可以将服务url前缀统一使用模板，方便修改或动态配置。 */
        templateValues?: object
    }

    enum GraphicType {
        /** 文本点,对应类为：LabelEntity */
        label = 'label',
        /** 文本点（图元）,对应类为：LabelPrimitive */
        labelP = 'labelP',
        /** 像素点,，对应类为：PointEntity */
        point = 'point',
        /** 像素点（图元），对应类为：PointPrimitive */
        pointP = 'pointP',
        /** 图标点，对应类为：BillboardEntity */
        billboard = 'billboard',
        /** HTML转图片后的图标点，对应类为：DivBillboardEntity */
        divBillboard = 'divBillboard',
        /** Font CSS字体点转图片后的图标点，对应类为：FontBillboardEntity */
        fontBillboard = 'fontBillboard',
        /** 图标点（图元），对应类为：BillboardPrimitive */
        billboardP = 'billboardP',
        /** gltf小模型，对应类为：ModelEntity */
        model = 'model',
        /** gltf小模型（图元）对应类为：ModelPrimitive */
        modelP = 'modelP',
        /** gltf小模型（数据集），对应类为：ModelInstance */
        modelInstance = 'modelInstance',
        /** 平面，对应类为：PlaneEntity */
        plane = 'plane',
        /** 平面（图元），对应类为：PlanePrimitive */
        planeP = 'planeP',
        /** 盒子，对应类为：BoxEntity */
        box = 'box',
        /** 盒子（图元），对应类为：BoxPrimitive */
        boxP = 'boxP',
        /** 圆、圆柱，对应类为：CircleEntity */
        circle = 'circle',
        /** 圆、圆柱（图元）对应类为：CirclePrimitive */
        circleP = 'circleP',
        /** 椭圆、椭圆柱，对应类为：EllipseEntity */
        ellipse = 'ellipse',
        /** 圆锥，对应类为：CylinderEntity */
        cylinder = 'cylinder',
        /** 圆锥（图元），对应类为：CylinderPrimitive */
        cylinderP = 'cylinderP',
        /** 圆锥追踪体，对应类为：ConeTrack */
        coneTrack = 'coneTrack',
        /** 球体，对应类为：EllipsoidEntity */
        ellipsoid = 'ellipsoid',
        /** 球体（图元），对应类为：EllipsoidPrimitive */
        ellipsoidP = 'ellipsoidP',
        /** 线，对应类为：PolylineEntity */
        polyline = 'polyline',
        /** 曲线，对应类为：CurveEntity */
        curve = 'curve',
        /** 线（图元），对应类为：PolylinePrimitive */
        polylineP = 'polylineP',
        /** 管道线，对应类为：PolylineVolumeEntity */
        polylineVolume = 'polylineVolume',
        /** 管道线（图元），对应类为：PolylineVolumePrimitive */
        polylineVolumeP = 'polylineVolumeP',
        /** 路径，对应类为：PathEntity */
        path = 'path',
        /** 走廊，对应类为：CorridorEntity */
        corridor = 'corridor',
        /** 走廊（图元），对应类为：CorridorPrimitive */
        corridorP = 'corridorP',
        /** 墙，对应类为：WallEntity */
        wall = 'wall',
        /** 墙（图元），对应类为：WallPrimitive */
        wallP = 'wallP',
        /** 面，对应类为：PolygonEntity */
        polygon = 'polygon',
        /** 面（图元）对应类为：PolygonPrimitive */
        polygonP = 'polygonP',
        /** 矩形，对应类为：RectangleEntity */
        rectangle = 'rectangle',
        /** 矩形（图元），对应类为：RectanglePrimitive */
        rectangleP = 'rectangleP',
        /** 四棱锥体（图元），对应类为：FrustumPrimitive */
        frustum = 'frustum',
        /** 水域面，对应类为：Water */
        water = 'water',
        /** DIV点，对应类为：DivGraphic */
        div = 'div',
        /** 粒子效果，对应类为：ParticleSystem */
        particleSystem = 'particleSystem',
        /** 视频融合（投射2D平面），对应类为：Video2D */
        video2D = 'video2D',
        /** 视频融合（投射3D，贴物体表面）对应类为：Video3D */
        video3D = 'video3D',
        /** 平放的图标（数据集），对应类为：FlatBillboard */
        flatBillboard = 'flatBillboard',
        /** 光锥体，对应类为：LightCone */
        lightCone = 'lightCone',
        /** 走马灯围墙效果，对应类为：ScrollWall */
        scrollWall = 'scrollWall',
        /** 立体面(或圆)散射效果，对应类为：DiffuseWall */
        diffuseWall = 'diffuseWall',
        /** 动态河流，对应类为：DynamicRiver */
        dynamicRiver = 'dynamicRiver',
        /** 道路，对应类为：Road */
        road = 'road',
        /** 相控阵雷达，对应类为：RectangularSensor */
        rectangularSensor = 'rectangularSensor',
        /** 井，对应类为：Pit */
        pit = 'pit',
        /** 攻击箭头，对应类为：AttackArrow */
        attackArrow = 'attackArrow',
        /** 攻击箭头(平尾)，对应类为：AttackArrowPW */
        attackArrowPW = 'attackArrowPW',
        /** 攻击箭头（燕尾），对应类为：AttackArrowYW */
        attackArrowYW = 'attackArrowYW',
        /** 双箭头（钳击），对应类为：DoubleArrow */
        doubleArrow = 'doubleArrow',
        /** 直箭头(2个点)，对应类为：FineArrow */
        fineArrow = 'fineArrow',
        /** 燕尾直箭头(2个点)，对应类为：FineArrowYW */
        fineArrowYW = 'fineArrowYW',
        /** 直箭头(3个点)，对应类为：StraightArrow */
        straightArrow = 'straightArrow',
        /** 弓形面(3个点)，对应类为：Lune */
        lune = 'lune',
        /** 扇形(3个点)，对应类为：Sector */
        sector = 'sector',
        /** 正多边形，对应类为：Regular */
        regular = 'regular',
        /** 等腰三角形(3个点)，对应类为：IsosTriangle */
        isosTriangle = 'isosTriangle',
        /** 闭合曲面(3个点)，对应类为：CloseVurve */
        closeVurve = 'closeVurve',
        /** 集结地(3个点)，对应类为：GatheringPlace */
        gatheringPlace = 'gatheringPlace',
        /** 双曲面拱形雷达【sxii-space插件】，对应类为：CamberRadar */
        camberRadar = 'camberRadar',
        /** 圆锥体（单目标雷达）【sxii-space插件】，对应类为：ConicSensor */
        conicSensor = 'conicSensor',
        /** 四棱锥体【sxii-space插件】，对应类为：RectSensor */
        rectSensor = 'rectSensor',
        /** 卫星视锥综合体（圆锥或四凌锥）【sxii-space插件】，对应类为：SatelliteSensor */
        satelliteSensor = 'satelliteSensor',
        /** 卫星综合体【sxii-space插件】，对应类为：Satellite */
        satellite = 'satellite'
    }


    enum EventType {
        add = "add",
        addGraphic = "addGraphic",
        addLayer = "addLayer",
        addTile = "addTile",
        addTileError = "addTileError",
        addTileSuccess = "addTileSuccess",
        allTilesLoaded = "allTilesLoaded",
        cameraChanged = "cameraChanged",
        cameraMoveEnd = "cameraMoveEnd",
        cameraMoveStart = "cameraMoveStart",
        change = "change",
        click = "click",
        clickGraphic = "clickGraphic",
        clickMap = "clickMap",
        clickTileGraphic = "clickTileGraphic",
        clockTick = "clockTick",
        dblClick = "dblClick",
        drawAddPoint = "draw-add-point",
        drawCreated = "draw-created",
        drawMouseMove = "draw-mouse-move",
        drawRemovePoint = "draw-remove-point",
        drawStart = "draw-start",
        editMouseDown = "edit-mouse-movestart",
        editMouseMove = "edit-mouse-move",
        editMovePoint = "edit-move-point",
        editRemovePoint = "edit-remove-point",
        editStart = "edit-start",
        editStop = "edit-stop",
        editStyle = "edit-style",
        end = "end",
        endItem = "endItem",
        error = "error",
        hide = "hide",
        initialTilesLoaded = "initialTilesLoaded",
        keydown = "keydown",
        keyup = "keyup",
        leftDown = "leftDown",
        leftUp = "leftUp",
        load = "load",
        loadBefore = "loadBefore",
        middleClick = "middleClick",
        middleDown = "middleDown",
        middleUp = "middleUp",
        morphComplete = "morphComplete",
        morphStart = "morphStart",
        mouseDown = "mouseDown",
        mouseMove = "mouseMove",
        mouseMoveTarget = "mouseMoveTarget",
        mouseOut = "mouseOut",
        mouseOver = "mouseOver",
        mouseUp = "mouseUp",
        move = "move",
        pinchEnd = "pinchEnd",
        pinchMove = "pinchMove",
        pinchStart = "pinchStart",
        postRender = "postRender",
        postUpdate = "postUpdate",
        preRender = "preRender",
        preUpdate = "preUpdate",
        remove = "remove",
        removeGraphic = "removeGraphic",
        removeLayer = "removeLayer",
        removeTile = "removeTile",
        rightClick = "rightClick",
        rightDown = "rightDown",
        rightUp = "rightUp",
        show = "show",
        start = "start",
        stop = "stop",
        update = "update",
        wheel = "wheel"
    }

    enum State {
        INITIALIZED = 'inited',
        ADDED = 'added',
        REMOVED = 'removed'
    }

    /**
     * 地图鼠标事件 统一管理类
     * @see http://sxii.cn/api/MouseEvent.html
     */
    class MouseEvent {
        enabledMoveTarget: boolean
        noPickEntity: boolean
    }

    type EventTypeString = keyof typeof sxii.EventType
    type EventTypeStringArray = EventTypeString[]

    class BaseClass<T extends object = {}> {
        constructor(options: T)
        /** 添加抛出事件到父类，它将接收传播的事件 */
        addEventParent: (obj: object) => this
        /** 销毁当前对象
         * @param {noDel} false:会自动delete释放所有属性，true：不delete绑定的变量
         * @default {false}
         */
        destroy: (noDel: Boolean) => void
        /**
         * @param {type} 事件类型
         * @param {data} 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
         * @param {propagate}将事件传播给父类 (用addEventParent设置)
         */
        fire: (type: EventTypeString, data: object, propagate: BaseClass) => this
        /** 是否绑定了抛出事件到指定父类 */
        hasEventParent: (obj: object) => this
        /** 是否有绑定指定的事件
         * @param {type} 事件类型
         * @param {propagate}将事件传播给父类 (用addEventParent设置)
         */
        listens: (type: EventTypeString, propagate: BaseClass) => Boolean
        /**
         * 解除绑定指定类型事件监听器
         * @param {types} 事件类型
         * @param {fn} 绑定的监听器回调方法
         * @param {context} 侦听器的上下文(this关键字将指向的对象)。
         */
        off: (types: EventTypeString | EventTypeStringArray, fn: Function, context?: object) => this
        /**
         * 绑定指定类型事件监听器
         * @param {types} 事件类型
         * @param {fn} 绑定的监听器回调方法
         * @param {context} 侦听器的上下文(this关键字将指向的对象)。
         */
        on: (types: EventTypeString | EventTypeStringArray, fn: Function, context?: object) => this
        /**
         * 绑定一次性执行的指定类型事件监听器 与on类似，监听器只会被触发一次，然后被删除
         * @param {types} 事件类型
         * @param {fn} 绑定的监听器回调方法
         * @param {context} 侦听器的上下文(this关键字将指向的对象)。
         */
        once: (types: EventTypeString | EventTypeStringArray, fn: Function, context: object) => this
        /** 移除抛出事件到父类
         * @param {obj} 父类对象
         */
        removeEventParent: (obj: object) => this
    }

    interface BaseThingProps {
        id: string | number
        enabled: boolean
    }
    class BaseThing extends BaseClass {
        constructor(options?: BaseThingProps)
        enabled: Boolean
        id: string | Number
        readonly isAdded: Boolean
        readonly state: State
        readonly uuid: string
        addTo(map: sxii.Map): this
        remove(destroy: Boolean): void
    }

    interface MoveType {
        ENLARGE: number
        NARROW: number
        LEFT_ROTATE: number
        RIGHT_ROTATE: number
        TOP_ROTATE: number
        BOTTOM_ROTATE: number
    }


    class KeyboardRoam extends sxii.control.BaseControl {
        dirStep: number
        minPitch: number
        moveStep: number
        rotateStep: number
        rotateCamera(type: MoveType): void
        setOptions(options: {}): this
        startMoveBackward(): void
        startMoveForward(): void
        startMoveLeft(): void
        startMoveRight(): void
        stopMoveBackward(): void
        stopMoveForward(): void
        stopMoveLeft(): void
        stopMoveRight(): void
    }

    /** 坐标点类（含经度、纬度、高度） */
    class LatLngPoint {
        constructor(lng: number, lat: number, alt: number)
        alt: number
        lat: number
        lng: number
        static fromArray: (arr: Array<number>) => LatLngPoint
        static fromCartesian: (
            cartesian: Cesium.Cartesian3,
            time?: Cesium.JulianDate
        ) => LatLngPoint
        static fromString: (str: string) => LatLngPoint
        static parse: (position: string | Array<number> | object | Cesium.Cartesian3, time: Cesium.JulianDate) => LatLngPoint
        clone(): void
        toArray(): Array<any>
        toCartesian(clone: Boolean): Cesium.Cartesian3
        toString(): string
    }

    namespace widget {
        enum EventType {
            /** 在实例初始化之后、创建之前执行 */
            beforeCreate = 'beforeCreate',
            /** 实例创建后执行 */
            created = 'created',
            /** 在activat挂载开始之前调用 */
            beforeActivate = 'beforeActivate',
            /** activate方法调用后 */
            activated = 'activated',
            /** view弹窗构造完成后后调用 */
            openView = 'openView',
            /** 实例销毁之前调用 */
            beforeDisable = 'beforeDisable',
            /** 实例销毁完成调用 */
            disabled = 'disabled',
            /** 加载完成 未做任何其他处理前 */
            loadBefore = 'loadBefore',
            /** 加载完成，执行所有内部处理后 */
            load = 'load'
        }
    }

    namespace control {
        interface BaseControlProps {
            id: string | number
            enabled: boolean
            insertIndex: number
            insertBefore: HTMLElement
        }
        class BaseControl extends BaseThing {
            constructor(options?: BaseControlProps)
            readonly container: HTMLElement
            readonly parentContainer: HTMLElement
            readonly parentContainerId: string
            show: Boolean
            remove(destroy: Boolean): void
        }

        interface ToolButtonProps {
            id?: string | number
            enabled?: Boolean
            title?: string
            icon?: string
            click?: Function
        }

        class ToolButton extends BaseControl {
            constructor(options: ToolButtonProps)
        }
    }

    namespace graphic {
        interface BaseGraphicOptions {
            /** 矢量数据id标识*/
            id?: string | number
            /** 矢量数据名称*/
            name?: string
            /**@default {true} 矢量数据是否显示*/
            show?: Boolean
            /** 【点状】矢量数据时的坐标位置，具体看子类实现 */
            position: sxii.LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty | Array<number>
            /** 坐标位置 */
            positions: Array<sxii.LatLngPoint | Array<number>> | Array<Cesium.Cartesian3 | Array<number>> | Cesium.PositionProperty
            /** 矢量数据的 样式信息，具体见各类数据的说明 */
            style?: object
            /** 矢量数据的 属性信息，可以任意附加属性。 */
            attr?: object
            /** 允许直接传入geojson格式规范数据，内部自动解析。【部分矢量对象】 */
            options?: {
                getjson: object
            }
            /** 当矢量数据支持popup弹窗时，绑定的值 */
            popup?: object
            /** 当矢量数据支持tooltip弹窗时，绑定的值 */
            tooltip?: object
            /** 当矢量数据支持右键菜单时，绑定的值 */
            contextmenuItems?: object
        }

        interface flyToOptions {
            /** 点状数据时，相机距离目标点的距离（单位：米）*/
            radius?: number
            /** 可选线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。*/
            scale?: number
            /** 可选定位时相机的最小高度值，用于控制避免异常数据*/
            minHeight?: number
            /** 可选定位时相机的最大高度值，用于控制避免异常数据*/
            maxHeight?: number
            /** 方向角度值，绕垂直于地心的轴旋转角度, 0至360*/
            heading?: number
            /** 俯仰角度值，绕纬度线旋转角度, 0至360*/
            pitch?: number
            /** 翻滚角度值，绕经度线旋转角度, 0至360*/
            roll?: number
            /**可选飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。 */
            duration?: number
            /** 可选飞行完成后要执行的函数。*/
            complete?: Cesium.Camera.FlightCompleteCallback
            /** 可选飞行取消时要执行的函数。*/
            cancel?: Cesium.Camera.FlightCancelledCallback
            /** 可选变换矩阵表示飞行结束时相机所处的参照系。*/
            endTransform?: Cesium.Matrix4
            /** 可选飞行高峰时的最大高度。*/
            maximumHeight?: number
            /** 可选如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。*/
            pitchAdjustHeight?: number
            /** 可选地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。*/
            flyOverLongitude?: number
            /** 可选仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。*/
            flyOverLongitudeWeight?: number
            /** 可选是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。*/
            convert?: Boolean
            /** 可选控制在飞行过程中如何插值时间。*/
            easingFunction?: Cesium.EasingFunction.Callback
        }
        class BaseGraphic extends BaseClass {
            constructor(options: BaseGraphicOptions)
            readonly center: Cesium.Cartesian3
            readonly centerPoint: sxii.LatLngPoint
            readonly isAdded: Boolean
            readonly state: State
            readonly type: string
            readonly uuid: string
            _addedHook(): void
            _mountedHook(): void
            _removedHook(): void
            attr: {}
            id: string | number
            name: string
            show: Boolean
            style: any
            addTo(layer: sxii.layer.GraphicLayer): this
            bindContextMenu(
                content: Array<{
                    /** 可选菜单文字*/
                    text?: string
                    /** 可选小图标css*/
                    iconCls?: string
                    /** 可选菜单项是否显示的回调方法*/
                    show?: Function | Boolean
                    /** 可选菜单项单击后的回调方法*/
                    callback?: Function
                    /** 可选当有二级子菜单时，配置数组。*/
                    children?: Array<{}>
                }>,
                options: object
            ): this
            bindPickId(item: any): this
            bindPopup(content: string | Function, options: {
                anchor?: Array<number>
                timeRender?: Boolean
                onAdd?: Function
                onRemove?: Function
            }): void
            bindTooltip(content: string | Function, options: {
                anchor: Array<number>
                onAdd: Function
                onRemove: Function
            }): this
            closeContextMenu(): this
            closePopup(): this
            closeSmallTooltip(): this
            closeTooltip(): this
            flyTo(options: flyToOptions): this
            getContextMenu(): Array<{}>
            getExtent(isFormat: Boolean): Cesium.Rectangle | object
            hasContextMenu(): this
            hasPopup(): Boolean
            hasTooltip(): Boolean
            openContextMenu(position: Cesium.Cartesian3, options: {}): this
            openPopup(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: any): this
            remove(hasDestory: Boolean): void
            setOptions(options: {}): this
            toGeoJSON(): {}
            toJSON(): {}
            unbindContextMenu(stopPropagation: Boolean): this
            unbindPopup(stopPropagation: Boolean): this
        }

        interface DivGraphicOptions extends BaseGraphicOptions {
            /** 坐标位置*/
            position: LatLngPoint | Cesium.Cartesian3 | Array<number>
            style: sxii.style.DivGraphic
            /**可选是否打开深度判断（true时判断是否在球背面） */
            depthTest?: Boolean
            /** 可选是否启用缓存机制，如为true，在视角未变化时不重新渲染。 */
            hasCache?: Boolean
            /** 可选DIV中的鼠标事件是否停止冒泡 */
            stopPropagation?: Boolean
            /** 可选DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。 */
            pointerEvents?: Boolean
            /** 可选是否允许编辑 */
            hasEdit?: Boolean
            testPoint?: sxii.style.PointEntityStyle
        }

        class DivGraphic extends BaseGraphic {
            constructor(options: DivGraphicOptions)
            clampToGround: Boolean
            readonly coordinate: Array<any>
            depthTest: Boolean
            readonly hasBindEvent: Boolean
            html: string
            position: Cesium.Cartesian3 | Array<number>
            testPoint: Boolean
            enableControl(value: boolean): void
            endDraw(): void
            startDraw(layer: sxii.layer.DivLayer): void
            startEditing(): void
            stopDraw(): void
            stopEditing(): void
            hide(): void
        }

        interface BaseEntityOptions extends BaseGraphicOptions {
            addHeight?: number
            onBeforeCreate?: Function
        }
        /** Entity实体 矢量对象 基类 */
        class BaseEntity extends BaseGraphic {
            readonly dataSource: Cesium.CustomDataSource
            readonly entity: Cesium.Entity
            readonly entityGraphic: any
            enableControl(value: Boolean): void
            startEditing(): void
            stopDraw(): void
            stopEditing(): void
        }

        interface BasePointEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'style' | 'hasMoveEdit' | 'minPointNum' | 'maxPointNum'> { }
        /** 单个坐标的点状Entity矢量数据 基类 */
        class BasePointEntity extends BaseEntity {
            constructor(options: BasePointEntityOptions)
            readonly center: Cesium.Cartesian3
            readonly EditClass: any
            heading: number
            height: number
            readonly modelMatrix: Cesium.Matrix4
            readonly orientation: Cesium.Quaternion
            pitch: number
            readonly point: sxii.LatLngPoint
            position: Cesium.Cartesian3 | sxii.LatLngPoint | Array<number>
            roll: number
            /** 更新 三维空间中的Quaternion旋转对象。 */
            updateOrientation(): Cesium.Quaternion
        }
        interface BasePolyEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'style' | 'orientation' | 'drawShow'> { }
        /** 多个坐标的线面状 Entity矢量数据 基类 */
        class BasePolyEntity extends BaseEntity {
            constructor(options: BasePolyEntityOptions)
            readonly area: Number
            readonly center: Cesium.Cartesian3
            readonly centerOfLine: Cesium.Cartesian3 | Array<number>
            readonly centerOfMass: Cesium.Cartesian3 | Array<number>
            readonly coordinates: Array<Array<any>>
            readonly distance: Number
            readonly EditClass: any
            readonly points: Array<LatLngPoint>
            positions: Array<Cesium.Cartesian3 | Array<number>>
            readonly positionsShow: Array<Cesium.Cartesian3 | Array<number>>
            readonly rectangle: Cesium.Rectangle
        }

        interface CircleShadingOptions extends sxii.style.CircleEntityStyle {
            type: 'circle' | string
        }

        interface CylinderShadingOptions extends sxii.style.CylinderEntityStyle {
            type: 'circle' | string
        }
        interface PolylineGoingShadingOptions extends sxii.style.PolylineEntityStyle {
            type: 'polyline' | string
        }
        interface PolylineShadingOptions extends sxii.style.PolylineEntityStyle {
            type: 'polyline' | string
            maxDistance: number
        }
        interface WallShadingOptions extends sxii.style.WallEntityStyle {
            type: 'wall' | string
            maxDistance: number
        }

        class BaseRoamLine extends BaseGraphic {
            readonly dataSource: Cesium.CustomDataSource
            readonly groundPosition: number
            readonly heading: number
            readonly hpr: Cesium.HeadingPitchRoll
            readonly indexForFlyOK: number
            readonly lastItem: Object
            readonly matrix: Cesium.Matrix4
            readonly orientation: Cesium.Quaternion
            pitch: number
            readonly position: Cesium.Cartesian3
            roll: number
            addCircleShading(options: CircleShadingOptions): Cesium.Entity | undefined
            addCylinderShading(options: CylinderShadingOptions): Cesium.Entity | undefined
            addPolylineShading(options: PolylineGoingShadingOptions | PolylineShadingOptions): Cesium.Entity | undefined
            addShading(item: Shading): Cesium.Entity | undefined
            addWallShading(options: WallShadingOptions): Cesium.Entity | undefined
            flyToPoint(options: Omit<flyToOptions, 'scale' | 'minHeight' | 'maxHeight' | 'complete' | 'cancel' | 'convert'>): void
            pause(): void
            proceed(): void
            removeShading(entity: Cesium.Entity | string | null): void
            setCameraOptions(cameraOptions: CameraOptions): void
            toCZML(): Object
            updateAngle(isAuto: Boolean, opts: { path: number, roll: number }): void
            static CircleShadingOptions: CircleShadingOptions
            static CylinderShadingOptions: CylinderShadingOptions
            static PolylineGoingShadingOptions: PolylineGoingShadingOptions
            static PolylineShadingOptions: PolylineShadingOptions
            static WallShadingOptions: WallShadingOptions
        }

        interface ExtraEntityOptions {
            /** 坐标位置 */
            position: sxii.LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty | Array<number>
            /** 坐标位置 */
            positions: Array<sxii.LatLngPoint | Array<number>> | Array<Cesium.Cartesian3 | Array<number>> | Cesium.PositionProperty
            /** 绘制时，是否可以整体平移 */
            hasMoveEdit?: Boolean
            /** 实体方向 */
            orientation?: Cesium.Property
            /** 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。 */
            drawShow?: Boolean
            /** 绘制时，至少需要点的个数 */
            minPointNum?: number
            /** 绘制时，最多允许点的个数*/
            maxPointNum?: number
            /**  在draw绘制时，在绘制点的基础上增加的高度值 */
            addHeight?: number
            /** 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理 */
            onBeforeCreate?: Function
        }

        interface BillboardEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'orientation' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.BillboardEntityStyle
        }
        /** 图标点 Entity对象 */
        class BillboardEntity extends BasePointEntity {
            constructor(options: BillboardEntityOptions)
            readonly entityGraphic: Cesium.BillboardGraphics
            static StyleOptions: sxii.style.BillboardEntityStyle
        }

        interface BoxEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'maxPointNum' | 'minPointNum'> {
            style: sxii.style.BoxEntityStyle
        }
        /** 盒子 Entity对象 */
        class BoxEntity extends BasePointEntity {
            constructor(options: BasePolyEntityOptions)
            readonly entityGraphic: Cesium.BoxGraphics
            static StyleOptions: sxii.style.BoxEntityStyle
        }

        interface CircleEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.CircleEntityStyle
        }

        /** 圆、圆柱 Entity对象 */
        class CircleEntity extends BasePointEntity {
            constructor(options: CircleEntityOptions)
            /** EditCircle */
            readonly EditClass: any
            readonly entityGraphic: Cesium.BoxGraphics
            height: number
            readonly outlineCoordinates: Array<Array<any>>
            outlinePositions: Array<Cesium.Cartesian3>
            radius: number
            getOutlineCoordinates(closure?: Boolean, count?: number): Array<Array<any>>
            getOutlinePositions(closure?: Boolean, count?: number): Array<Cesium.Cartesian3>
            isInPoly(position: Cesium.Cartesian3): Boolean
            static StyleOptions: sxii.style.CircleEntityStyle
        }

        interface CorridorEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation'> {
            style: sxii.style.CorridorEntityStyle
        }
        /** 走廊 Entity矢量数据 */
        class CorridorEntity extends BasePolyEntity {
            constructor(options: CorridorEntityOptions)
            readonly entityGraphic: Cesium.BoxGraphics
            static StyleOptions: sxii.style.CorridorEntityStyle
        }

        interface CurveEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation'> {
            style: sxii.style.PolylineEntityStyle
        }
        /** 曲线 */
        class CurveEntity extends PolylineEntity {
            constructor(options: CurveEntityOptions)
        }

        interface CylinderEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'orientation' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.CylinderEntityStyle
        }

        /** 圆锥 Entity对象 */
        class CylinderEntity extends BasePointEntity {
            constructor(options: CylinderEntityOptions)
            static StyleOptions: sxii.style.CylinderEntityStyle
        }

        interface DivBillboardEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'orientation' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.DivBillboardEntityStyle
        }
        /** HTML转图片后的 图标点Entity， 需要引入html2canvas或domtoimage插件进行DOM转图片 */
        class DivBillboardEntity extends BillboardEntity {
            constructor(options: DivBillboardEntityOptions)
            static StyleOptions: sxii.style.DivBillboardEntityStyle
        }

        interface EllipseEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'orientation' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.EllipseEntityStyle
        }

        /** 椭圆、椭圆柱 Entity对象 */
        class EllipseEntity extends CircleEntity {
            constructor(options: EllipseEntityOptions)
            static StyleOptions: sxii.style.EllipseEntityStyle
        }

        interface EllipsoidEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.EllipsoidEntity
        }

        /** 球、半球、椭球 Entity对象 */
        class EllipsoidEntity extends BasePointEntity {
            constructor(options: EllipsoidEntityOptions)
            static StyleOptions: sxii.style.EllipsoidEntity
        }

        interface FontBillboardEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'orientation' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.FontBillboardEntityStyle
        }

        /** Font CSS字体点转图片后的图标点 Entity, 需要引入html2canvas或domtoimage插件进行DOM转图片 */
        class FontBillboardEntity extends BasePointEntity {
            constructor(options: FontBillboardEntityOptions)
            static StyleOptions: sxii.style.FontBillboardEntityStyle
        }

        interface LabelEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'orientation' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.LabelEntity
        }
        /** 文字 Entity对象 */
        class LabelEntity extends BasePointEntity {
            constructor(options: LabelEntityOptions)
            static StyleOptions: sxii.style.LabelEntity
        }

        interface ModelEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.ModelEntityStyle
        }
        /** gltf小模型 Entity对象 */
        class ModelEntity extends BasePointEntity {
            constructor(options: ModelEntityOptions)
            debugAxis: Boolean
            debugAxisLength: number
            readonly entityGraphic: Cesium.ModelGraphics
            moveTo(options: {
                position?: LatLngPoint | Cesium.Cartesian3
                time?: number
                onEnd?: Function
            }): void
            rotateStart(options: {
                direction?: Boolean
                time?: number
                autoStopAngle?: number
            }): void
            rotateStop(): void
            static StyleOptions: sxii.style.ModelEntityStyle
        }

        interface PathEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'position' | 'hasMoveEdit' | 'minPointNum' | 'maxPointNum'> {
            position: Cesium.SampledPositionProperty
            style: sxii.style.PathEntityStyle
            label?: sxii.style.LabelEntity
            model?: sxii.style.ModelEntityStyle
            point?: sxii.style.PointEntityStyle
            billboard?: sxii.style.PathEntityStyle
            onBeforeCreate?: Function
        }

        /** path路径 Entity矢量数据 */
        class PathEntity extends BasePointEntity {
            constructor(options: PathEntityOptions)
            readonly hpr: Cesium.HeadingPitchRoll
            readonly orientationShow: Cesium.Quaternion
            static position: Cesium.SampledPositionProperty
            static StyleOptions: sxii.style.PathEntityStyle
            roll: number
        }

        interface PlaneEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'positions' | 'hasMoveEdit' | 'minPointNum' | 'maxPointNum'> {
            style: sxii.style.PlaneEntityStyle
        }
        /** 平面 Entity对象 */
        class PlaneEntity extends BasePointEntity {
            constructor(options: PlaneEntityOptions)
            static StyleOptions: sxii.style.PlaneEntityStyle
        }

        interface PolygonEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation' | 'drawShow' | 'onBeforeCreate'> {
            style: sxii.style.PolygonEntityStyle
        }
        /** 面 Entity矢量数据 */
        class PolygonEntity extends BasePolyEntity {
            constructor(options: PolygonEntityOptions)
            static StyleOptions: sxii.style.PolygonEntityStyle
        }

        interface PolylineEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation' | 'drawShow'> {
            style: sxii.style.PolylineEntityStyle
        }
        /** 线 Entity矢量数据 */
        class PolylineEntity extends BasePolyEntity {
            constructor(options: PolylineEntityOptions)
            static StyleOptions: sxii.style.PolylineEntityStyle
        }

        interface PolylineVolumeEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation' | 'drawShow'> {
            style: sxii.style.PolylineVolumeEntityStyle
        }
        /** 管道线 Entity矢量数据 */
        class PolylineVolumeEntity extends BasePolyEntity {
            constructor(options: PolylineVolumeEntityOptions)
            static StyleOptions: sxii.style.PolylineVolumeEntityStyle
        }

        interface RectangleEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation' | 'drawShow'> {
            style: sxii.style.RectangleEntityStyle
        }
        /**矩形 Entity矢量数据 */
        class RectangleEntity extends BasePolyEntity {
            constructor(options: RectangleEntityOptions)
            static StyleOptions: sxii.style.RectangleEntityStyle
        }

        interface WallEntityOptions extends BaseGraphicOptions, Omit<ExtraEntityOptions, 'position' | 'orientation' | 'drawShow'> {
            style: sxii.style.WallEntityStyle
        }
        /**墙 Entity矢量数据 */
        class WallEntity extends BasePolyEntity {
            constructor(options: WallEntityOptions)
            static StyleOptions: sxii.style.WallEntityStyle
        }

        /** 点 */
        class PointEntity extends BasePointEntity {
            constructor(options: BasePointEntityOptions)
            static StyleOptions: sxii.style.PointEntityStyle
        }

        interface ModelPrimitiveOptions extends BaseGraphicOptions, Pick<ExtraEntityOptions, 'position'> {
            /** 样式信息 */
            style?: sxii.style.ModelPrimitive
            /** 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。 */
            modelMatrix?: Cesium.Matrix4
            /** [cesium原生]用于渲染图元的外观。 */
            appearance?: Cesium.Appearance
            /** [cesium原生]每个实例的属性。 */
            attributes?: Cesium.Appearance
        }
        /** gltf小模型 Primitive图元矢量对象 */
        class ModelPrimitive extends BasePointPrimitive {
            constructor(options: ModelPrimitiveOptions)
            static StyleOptions: sxii.style.ModelPrimitive
        }

        interface RoamLineOptions extends BaseGraphicOptions {
            /** 轨迹的 坐标数组 */
            points: Array<Array<number>> | Array<LatLngPoint>
            /** 轨迹的 速度( 单位：千米/小时) */
            speed: Array<Array<number>> | number
            /**@default 'time' 当points数组中已有时间值，请传入该值的字段名称，同时speed将失效，已实际传入时间字段为准。 */
            timeField?: string
            /**@default 0 轨迹偏移增加的高度 */
            offsetHeight?: number
            /**@default clock.currentTime 轨迹的开始时间 */
            startTime?: string | Cesium.JulianDate
            /**@default 0 每个点的停留时长（单位：秒） */
            pauseTime?: number | Function
            /**@default 1 轨迹播放的倍率 */
            multiplier?: number
            /**@default true 是否显示在最后一个位置 */
            showLastPoint?: Boolean
            /**@default true 是否记录缓存，提高效率 */
            hasCache?: Boolean
            /**@default Cesium.Transforms.eastNorthUpToFixedFrame 参考系 */
            fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame
            /**@default false 是否LagrangePolynomialApproximation插值，对轨迹进行圆弧状插值 */
            interpolation?: Boolean
            /**@default 2 当interpolation为true时，使用的插值程度。 */
            interpolationDegree?: Boolean
            /**设置是否显示 文本 和对应的样式 */
            label?: sxii.style.LabelEntity
            /**@default false 是否求准确的 地面海拔 和 离地高度(没有此需求时可以关闭，提高效率) */
            showGroundHeight?: Boolean
            /**设置是否显示 gltf模型 和对应的样式 */
            model?: sxii.style.ModelEntityStyle
            /**设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。 */
            billboard?: sxii.style.BillboardEntityStyle
            /**设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。 */
            point?: sxii.style.PointEntityStyle
            /**设置是否显示 轨迹路线 和对应的样式 */
            path?: sxii.style.PathEntityStyle
            /**设置是否显示 圆对象 和对应的样式 */
            circle?: sxii.style.CircleEntityStyle
            /** 设置投影或附加的对象 */
            shadow?: Shading
            /** 视角模式设置 */
            camera?: CameraOptions
            /** 可选指定播放的模式 */
            clockRange?: Cesium.ClockRange
            /**@default {false} 可选是否循环播放，等价于clockRange:Cesium.ClockRange.LOOP_STOP */
            clockLoop?: Boolean
            /**@default {false} 可选是否自动停止，等价于clockRange:Cesium.ClockRange.UNBOUNDED */
            autoStop?: Boolean
            /**@default {100} 可选当clampToGround计算时，插值数，等比分割的个数 */
            splitNum?: number
            /**@default {null} 可选当clampToGround计算时，插值最小间隔(单位：米)，优先级高于splitNum */
            minDistance?: number
            /**@default {false} 可选当clampToGround计算时，是否在3dtiles模型上分析（模型分析较慢，按需开启） */
            has3dtiles?: Boolean
            /**@default {0} 可选当clampToGround计算时，可以按需增加偏移高度（单位：米），便于可视 */
            offset?: number
        }

        /** 飞行漫游路线管理类 【静态一次性传入的数据】 */
        class RoamLine extends BaseRoamLine {
            constructor(options: RoamLineOptions)
            readonly info: Object
            clampToGround(callback: Function): void
            getTerrainHeight(callback: Function): void
            start(): void
            stop(): void
        }

        interface BasePrimitiveOptions extends BaseGraphicOptions {
            /** [cesium原生]用于渲染图元的外观。 */
            appearance?: Cesium.Appearance
            /** [cesium原生]每个实例的属性。 */
            attributes?: Cesium.Appearance
            /** 当深度测试失败时，用于为该图元着色的外观。 */
            depthFailAppearance?: Cesium.Appearance
            /**@default {false} 当true，几何顶点优化前和后顶点着色缓存。 */
            vertexCacheOptimize?: Boolean
            /**@default {false} 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。 */
            interleave?: Boolean
            /**@default {true} 当true时，几何顶点被压缩，这将节省内存。提升效率。 */
            compressVertices?: Boolean
            /**@default {true} 当true时，图元不保留对输入geometryInstances的引用以节省内存。 */
            releaseGeometryInstances?: Boolean
            /**@default {true} 当true时，每个几何图形实例只能通过Scene#pick进行挑选。当false时，保存GPU内存。 */
            allowPicking?: Boolean
            /**@default {true} 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。 */
            cull?: Boolean
            /**@default {true} 确定该图元是异步创建还是阻塞创建，直到就绪。 */
            asynchronous?: Boolean
            /**@default {false} 仅供调试。确定该图元命令的边界球是否显示。 */
            debugShowBoundingVolume?: Boolean
            /**@default {false} 仅供调试。贴地时，确定是否绘制了图元中每个几何图形的阴影体积。必须是true创建卷之前要释放几何图形或选项。releaseGeometryInstance必须是false。 */
            debugShowShadowVolume?: Boolean
        }

        class BasePrimitive extends BaseGraphic {
            constructor(options: BasePrimitiveOptions)
            readonly geometryInstanceAttributes: Cesium.GeometryInstance
            readonly label: Cesium.Label
            readonly primitive: Cesium.Primitive
            readonly primitiveCollection: Cesium.PrimitiveCollection
        }

        interface BasePointPrimitiveOptions extends BaseGraphicOptions, BasePrimitiveOptions, Pick<ExtraEntityOptions, 'position'> {
            style: sxii.style.BillboardEntityStyle
            modelMatrix?: Cesium.Matrix4
        }
        class BasePointPrimitive extends BasePrimitive {
            constructor(options?: BasePointPrimitiveOptions)
            readonly center: Cesium.Cartesian3
            readonly centerPoint: LatLngPoint
            readonly coordinate: Array<any>
            readonly modelMatrix: Cesium.Matrix4
            readonly point: LatLngPoint
            position: Cesium.Cartesian3
            heading: number
            pitch: number
            roll: number
        }

        interface BillboardPrimitiveOptions extends BaseGraphicOptions, Pick<ExtraEntityOptions, 'position'> {
            style: sxii.style.BillboardEntityStyle
        }
        class BillboardPrimitive extends BasePointPrimitive {

        }
    }

    namespace style {
        interface Material {
            image?: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
            repeat?: Array<number>;
            color?: string;
            transparent?: boolean;
        }

        interface BillboardEntityStyle {
            /** 用于矢量对象的 图像、URI或Canvas */
            image?: string | HTMLCanvasElement
            /**@defalut {1} 透明度 */
            opacity?: number
            /**@defalut {1} 图像大小的比例 */
            scale?: number
            /**@defalut {0} 旋转角度（弧度值），正北为0，逆时针旋转 */
            rotation?: number
            /**@defalut {0} 旋转角度（度数值，0-360度），与rotation二选一 */
            rotationDegree?: number
            /**@defalut {"CENTER"} 横向对齐 ,string可选项：LEFT (解释：左边),CENTER (解释：居中),RIGHT (解释：右边), */
            horizontalOrigin?: 'LEFT' | 'CENTER' | 'RIGHT'
            /**@defalut {"BOTTOM"} 垂直对齐 ,string可选项：TOP (解释：顶部),CENTER (解释：居中),BOTTOM (解释：底部), */
            verticalOrigin?: 'BOTTOM' | 'CENTER' | 'TOP'
            /** 指定广告牌的宽度(以像素为单位)，覆盖图片本身大小。 */
            width?: number
            /** 指定广告牌的高度(以像素为单位)，覆盖图片本身大小。 */
            height?: number
            /**@defalut {false} 是否存在偏移量 */
            hasPixelOffset?: Boolean
            /**@defalut {0} 横向偏移像素 */
            pixelOffsetX?: number
            /**@defalut {0} 纵向偏移像素 */
            pixelOffsetY?: number
            /**@defalut {Cartesian2.ZERO} 指定像素偏移量。 */
            pixelOffset?: Cesium.Cartesian2 | Array<number>
            /**@defalut {false} 是否按视距缩放 或 设置基于与相机的距离缩放点 */
            scaleByDistance?: Boolean | Cesium.NearFarScalar | Array<number>
            /**@defalut {1000000} 上限 */
            scaleByDistance_far?: number
            /**@defalut {0.1} 比例值 */
            scaleByDistance_farValue?: number
            /**@defalut {1000} 下限 */
            scaleByDistance_near?: number
            /**@defalut {1} 比例值 */
            scaleByDistance_nearValue?: number
            /**@defalut {false} 是否按视距显示 或 指定该广告牌将显示在与摄像机的多大距离 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@defalut {10000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@defalut {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@defalut {false} 是否贴地 */
            clampToGround?: Boolean
            /**@defalut {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。 */
            heightReference?: Cesium.HeightReference
            /**@defalut {true} 是否被遮挡 */
            visibleDepth?: Boolean
            /** 指定从相机到禁用深度测试的距离。 */
            disableDepthTestDistance?: number
            /**@defalut {Color.WHITE} 附加的颜色 */
            color?: Cesium.Color
            /**@defalut {Cartesian3.ZERO} 眼偏移量 */
            eyeOffset?: Cesium.Cartesian3
            /**@defalut {Cartesian3.ZERO} 指定单位旋转向量轴。 */
            alignedAxis?: Cesium.Cartesian3
            /** 指定该广告牌的大小是否应该以米来度量。 */
            sizeInMeters?: boolean
            /** 用于基于与相机的距离设置半透明度。 */
            translucencyByDistance?: Cesium.NearFarScalar
            /** 用于基于与相机的距离设置pixelOffset。 */
            pixelOffsetScaleByDistance?: Cesium.NearFarScalar
            /** 定义用于广告牌的图像的子区域，而不是从左下角开始以像素为单位的整个图像。 */
            imageSubRegion?: Cesium.BoundingRectangle
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface BoxEntityStyle {
            /** 指定盒子的长度、宽度和高度。*/
            dimensions?: Cesium.Cartesian3
            /**@default {100} 盒子长度 */
            dimensions_x?: number
            /**@default {100} 盒子宽度 */
            dimensions_y?: number
            /**@default {100} 盒子高度 */
            dimensions_z?: number
            /**@default {0} 方向角 （度数值，0-360度） */
            heading?: number
            /**@default {0} 俯仰角（度数值，0-360度） */
            pitch?: number
            /**@default {0} 翻滚角（度数值，0-360度） */
            roll?: number
            /**@default {true} 是否填充 */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。 */
            material?: Material | Cesium.Color | string
            /**@default {"#00FF00"} 颜色 */
            color?: string | Cesium.Color
            /**@default {0.6} 透明度 */
            opacity?: number
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {1.0} 边框宽度 */
            outlineWidth?: string
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否投射阴影 */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地 */
            clampToGround?: Boolean
            /**@default {Cesium.HeightReference.NONE} 指定从实体位置到它的相对高度。 */
            heightReference?: Cesium.HeightReference
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }
        interface CircleEntityStyle {
            /**@default {100} 半径 */
            radius?: number
            /**@default {0} 高程，圆相对于椭球面的高度。 */
            height?: number
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。 */
            heightReference?: Cesium.HeightReference
            /**@default {100} 高度差（圆柱本身的高度），与extrudedHeight二选一。 */
            diffHeight?: number
            /** 指定椭圆的挤压面相对于椭球面的高度。 */
            extrudedHeight?: number
            /**@default {Cesium.HeightReference.NONE} 指定挤压高度相对于什么的属性。 */
            extrudedHeightReference?: Cesium.HeightReference
            /**@default {true} 是否填充 */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。 */
            material?: Material | Cesium.Color
            /**@default {"#3388ff"} 填充颜色 */
            color?: string | Cesium.Color
            /**@default {0.6} 透明度 */
            opacity?: number
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {1} 边框宽度 */
            outlineWidth?: number
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {0} 旋转角度（弧度值），正北为0，逆时针旋转 */
            rotation?: number
            /**@default {0} 旋转角度（度数值，0-360度），与rotation二选一 */
            rotationDegree?: number
            /**@default {0} 椭圆纹理的角度（弧度值），正北为0，逆时针旋转 */
            stRotation?: number
            /**@default {0} 椭圆纹理的角度（度数值，0-360度），与stRotation二选一 */
            stRotationDegree?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 指定椭圆上各点之间的角距离。 */
            granularity?: number
            /**@default {16} 指定沿轮廓的周长绘制的垂直线的数量。 */
            numberOfVerticalLines?: number
            /**@default {false} 是否投射阴影 */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定椭圆是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地 */
            clampToGround?: Boolean
            /**@default {Cesium.ClassificationType.BOTH} 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。 */
            classificationType?: Cesium.ClassificationType
            /**@default {0} 层级顺序。用于排序地面几何。只有在椭圆为常量且没有指定height或exturdedHeight时才有效果。 */
            zIndex?: number
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface CorridorEntityStyle {
            /**@default {100} 走廊宽度，指定走廊边缘之间的距离。 */
            width?: number
            /**@default {"ROUNDED"} 指定边角的样式。string可选项：ROUNDED (解释：圆滑),MITERED (解释：斜接),BEVELED (解释：斜切), */
            cornerType?: string | Cesium.CornerType
            /**@default {0} 高程，圆相对于椭球面的高度。 */
            height?: number
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。 */
            heightReference?: Cesium.HeightReference
            /**@default {100} 高度差（走廊本身的高度），与extrudedHeight二选一。 */
            diffHeight?: number
            /** 指定走廊挤压面相对于椭球面的高度。 */
            extrudedHeight?: number
            /**@default {Cesium.HeightReference.NONE} 指定挤压高度相对于什么的属性。 */
            extrudedHeightReference?: Cesium.HeightReference
            /**@default {true} 是否填充。 */
            fill?: boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。 */
            material?: Material | Cesium.Color
            /**@default {"#3388ff"} 颜色 */
            color?: string | Cesium.Color
            /**@default {0.6} 透明度 */
            opacity?: number
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {1} 边框宽度 */
            outlineWidth?: number
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 指定每个纬度和经度之间的距离。 */
            granularity?: number
            /**@default {false} 是否投射阴影 */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定走廊是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地 */
            clampToGround?: string
            /**@default {Cesium.ClassificationType.BOTH} 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。 */
            classificationType?: Cesium.ClassificationType
            /**@default {0} 层级顺序，用于排序。只有在高度和挤压高度未定义，并且走廊是静态的情况下才有效果。 */
            zIndex?: number
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface PolylineEntityStyle {
            /**@default {"Color"} 线型 ,可选项：MaterialType*/
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。*/
            material?: Material | Cesium.Color
            /**@default {4} 线宽*/
            width?: number
            /**@default {"#3388ff"} 颜色*/
            color?: string | Cesium.Color
            /**@default {1} 透明度*/
            opacity?: number
            /**指定当折线位于地形之下时用于绘制折线的材质。 */
            depthFailMaterial?: Material | Cesium.Color
            /**@default {false} 是否闭合*/
            closure?: Boolean
            /**@default {false} 是否衬色*/
            outline?: Boolean
            /**@default {"#ffffff"} 衬色颜色*/
            outlineColor?: string | Cesium.Color
            /**@default {2} 衬色宽度*/
            outlineWidth?: number
            /**@default {false} 是否显示遮挡*/
            depthFail?: Boolean
            /**@default {"#ff0000"} 遮挡处颜色*/
            depthFailColor?: string
            /**@default {0.2} 遮挡处透明度*/
            depthFailOpacity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。*/
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离*/
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离*/
            distanceDisplayCondition_near?: number
            /**@default {Cesium.ArcType.GEODESIC} 折线段必须遵循的线的类型。*/
            arcType?: Cesium.ArcType
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 如果arcType不是arcType.none，则指定每个纬度和经度之间的角距离的数字属性。*/
            granularity?: number
            /**@default {false} 是否阴影*/
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定对象是投射还是接收来自光源的阴影。*/
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地*/
            clampToGround?: Boolean
            /**@default {Cesium.ClassificationType.BOTH} 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。*/
            classificationType?: Cesium.ClassificationType
            /**@default {0} 层级顺序,指定用于排序地面几何的zIndex。只有当' clampToGround '为真且支持地形上的折线时才会有效果。*/
            zIndex?: number
            /**支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface CylinderEntityStyle {
            /**@default {0} 顶部半径，指定圆柱体顶部的半径，当为0时即为圆锥。 */
            topRadius?: number
            /**@default {100} 底部半径，指定圆柱体底部半径。 */
            bottomRadius?: number
            /**@default {100} 高度，柱面长度。 */
            length?: number
            /**@default {0} 方向角 （度数值，0-360度） */
            heading?: number
            /**@default {0} 俯仰角（度数值，0-360度） */
            pitch?: number
            /**@default {0} 翻滚角（度数值，0-360度） */
            roll?: number
            /**@default {true} 是否填充 */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。 */
            material?: Material | Cesium.Color
            /**@default {"#00FF00"} 填充颜色 */
            color?: string
            /**@default {0.6} 透明度 */
            opacity?: number
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {1} 边框宽度 */
            outlineWidth?: string
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {16} 指定沿轮廓的周长绘制的垂直线的数量。 */
            numberOfVerticalLines?: number
            /**@default {128} 圆柱体周长周围的边数。 */
            slices?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否阴影 */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定圆柱是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {Cesium.HeightReference.NONE} 指定从实体位置到它的相对高度。 */
            heightReference?: Cesium.HeightReference
            /**支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface DivBillboardEntityStyle extends BillboardEntityStyle {
            /** Html 内容 */
            html?: string
        }

        interface EllipseEntityStyle extends CircleEntityStyle {
            /**@default {100} 椭圆时的 短半径*/
            semiMinorAxis?: number
            /**@default {100} 椭圆时的 长半径*/
            semiMajorAxis?: number
        }

        interface EllipsoidEntity {
            /** 指定椭球半径。*/
            radii?: Cesium.Cartesian3 | Array<number>
            /**@default {100} X半径 */
            radii_x?: number
            /**@default {100} Y半径 */
            radii_y?: number
            /**@default {100} Z半径 */
            radii_z?: number
            /** 指定椭球的内半径。*/
            innerRadii?: Cesium.Cartesian3 | Array<number>
            /**@default {0} 内部X半径 */
            innerRadii_x?: number
            /**@default {0} 内部Y半径 */
            innerRadii_y?: number
            /**@default {0} 内部Z半径 */
            innerRadii_z?: number
            /**@default {0} 最小时钟角度（弧度值） */
            minimumClock?: number
            /**@default {0} 最小时钟角度（度数值，0-360度），与minimumClock二选一 */
            minimumClockDegree?: number
            /**@default {360} 最大时钟角度（弧度值） */
            maximumClock?: number
            /**@default {360} 最大时钟角度（度数值，0-360度），与maximumClock二选一 */
            maximumClockDegree?: number
            /**@default {0} 最小锥角（弧度值） */
            minimumCone?: number
            /**@default {0} 最小锥角（度数值，0-360度），与minimumCone二选一 */
            minimumConeDegree?: number
            /**@default {180} 最大圆锥角（弧度值） */
            maximumCone?: number
            /**@default {180} 最大圆锥角（度数值，0-360度），与maximumCone二选一 */
            maximumConeDegree?: number
            /**@default {0} 方向角 （度数值，0-360度） */
            heading?: number
            /**@default {0} 俯仰角（度数值，0-360度） */
            pitch?: number
            /**@default {0} 翻滚角（度数值，0-360度） */
            roll?: number
            /**@default {true} 是否填充 */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。 */
            material?: Material | Cesium.Color
            /**@default {"#00FF00"} 颜色 */
            color?: string
            /**@default {0.6} 透明度 */
            opacity?: number
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {1} 边框宽度 */
            outlineWidth?: string
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {64} 指定竖向划分数量 */
            stackPartitions?: number
            /**@default {64} 指定横向划分数量 */
            slicePartitions?: number
            /**@default {128} 指定每个轮廓环的样本数量，确定曲率的粒度。 */
            subdivisions?: number
            /**@default {Cesium.HeightReference.NONE} 指定从实体位置到它的相对高度。 */
            heightReference?: Cesium.HeightReference
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否投射阴影 */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定椭球是否投射或接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /** 支持附带文字的显示*/
            label?: sxii.style.LabelEntity
        }

        interface FontBillboardEntityStyle extends Omit<BillboardEntityStyle, 'color'> {
            /**@default {"fa fa-automobile"	} 字体css样式*/
            iconClass?: string
            /**@default {50	} 字体大小*/
            iconSize?: number
            /**@default {'#ff0000'	} 字体颜色*/
            color?: string | Cesium.Color
        }

        interface LabelEntity {
            /**@default {"文字"} 文本内容，换行可以用换行符'\n'。*/
            text?: string
            /**@default {1.0} 指定缩放比例。*/
            scale?: number
            /**@default {'CENTER'} A Property specifying the HorizontalOrigin.*/
            horizontalOrigin?: 'CENTER' | 'RIGHT' | 'LEFT' | Cesium.HorizontalOrigin
            /**@default {'CENTER'} A Property specifying the VerticalOrigin.*/
            verticalOrigin?: 'CENTER' | 'BOTTOM' | 'TOP' | Cesium.VerticalOrigin
            /**@default {"楷体"} 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体,*/
            font_family?: string
            /**@default {30} 字体大小*/
            font_size?: number
            /**@default {"normal"} 是否加粗 ,可选项：bold (解释：是),normal (解释：否),*/
            font_weight?: string
            /**@default {"normal"} 是否斜体 ,可选项：italic (解释：是),normal (解释：否),*/
            font_style?: string
            /**@default {'30px normal normal 楷体'} 上叙4个属性的一次性指定CSS字体的属性。*/
            font?: string
            /**@default {true} 是否填充*/
            fill?: Boolean
            /**@default {"#ffffff"} 文本颜色*/
            color?: string
            /**@default {1} 透明度*/
            opacity?: number
            /**@default {false} 是否衬色*/
            outline?: Boolean
            /**@default {"#000000"} 衬色颜色*/
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 衬色透明度*/
            outlineOpacity?: number
            /**@default {2.0} 衬色宽度*/
            outlineWidth?: number
            /**@default {false} 是否背景*/
            background?: Boolean
            /**@default {"#000000"} 背景颜色*/
            backgroundColor?: string | Cesium.Color
            /**@default {0.5} 背景透明度*/
            backgroundOpacity?: number
            /**@default {new Cesium.Cartesian2(7, 5)} 背景内边距，指定文字与填充边界内容之间的空间(以像素为单位)。*/
            backgroundPadding?: number | Cesium.Cartesian2
            /**@default {false} 是否存在偏移量*/
            hasPixelOffset?: Boolean
            /**@default {0} 横向偏移像素*/
            pixelOffsetX?: number
            /**@default {0} 纵向偏移像素*/
            pixelOffsetY?: number
            /**@default {Cartesian2.ZERO} A Cartesian2 Property specifying the pixel offset.*/
            pixelOffset?: Cesium.Cartesian2 | Array<number>
            /** A NearFarScalar Property used to set pixelOffset based on distance from the camera.*/
            pixelOffsetScaleByDistance?: Cesium.NearFarScalar
            /**@default {Cartesian3.ZERO} A Cartesian3 Property specifying the eye offset.*/
            eyeOffset?: Cesium.Cartesian3
            /**@default {false} 是否按视距缩放 或 设定基于与相机的距离设置比例。*/
            scaleByDistance?: Boolean | Cesium.NearFarScalar
            /**@default {1000000} 上限*/
            scaleByDistance_far?: number
            /**@default {0.1} 比例值*/
            scaleByDistance_farValue?: number
            /**@default {1000} 下限*/
            scaleByDistance_near?: number
            /**@default {1} 比例值*/
            scaleByDistance_nearValue?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。*/
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离*/
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离*/
            distanceDisplayCondition_near?: number
            /**@default {false} 是否贴地*/
            clampToGround?: Boolean
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。*/
            heightReference?: Cesium.HeightReference
            /**@default {true} 是否被遮挡*/
            visibleDepth?: Boolean
            /** 指定从相机到禁用深度测试的距离。 */
            disableDepthTestDistance?: number
            /** 用于基于与相机的距离设置半透明度。 */
            translucencyByDistance?: Cesium.NearFarScalar
        }

        interface ModelEntityStyle {
            /** 是否显示 */
            show?: Boolean
            /** glTF模型的URI的字符串或资源属性。 */
            uri?: string | Cesium.Resource
            /**@default {1} 比例 */
            scale?: number
            /**@default {0} 方向角 （度数值，0-360度） */
            heading?: number
            /**@default {0} 俯仰角（度数值，0-360度） */
            pitch?: number
            /**@default {0} 翻滚角（度数值，0-360度） */
            roll?: number
            /**@default {0.0} 指定模型的近似最小像素大小，而不考虑缩放。 */
            minimumPixelSize?: number
            /** 模型的最大比例尺寸。minimumPixelSize的上限。 */
            maximumScale?: number
            /**@default {false} 是否填充，指定与模型渲染颜色混合 */
            fill?: Boolean
            /**@default {"#3388ff"} 颜色 */
            color?: string | Cesium.Color
            /**@default {1} 透明度 */
            opacity?: number
            /**@default {ColorBlendMode.HIGHLIGHT} 指定颜色如何与模型混合。 */
            colorBlendMode?: Cesium.ColorBlendMode
            /**@default {0.5} 当colorBlendMode为MIX时指定颜色强度的数字属性。0.0的值表示模型渲染的颜色，1.0的值表示纯色，任何介于两者之间的值表示两者的混合。 */
            colorBlendAmount?: number
            /**@default {false} 是否轮廓 */
            silhouette?: Boolean
            /**@default {"#ffffff"} 轮廓颜色 */
            silhouetteColor?: string | Cesium.Color
            /**@default {2} 轮廓宽度 */
            silhouetteSize?: number
            /**@default {0.8} 轮廓透明度 */
            silhouetteAlpha?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {true} 是否阴影 */
            hasShadows?: Boolean
            /**@default {ShadowMode.ENABLED} 指定模型是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地 */
            clampToGround?: Boolean
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。 */
            heightReference?: Cesium.HeightReference
            /**@default {true} 确定模型加载后纹理是否会继续流进来。 */
            incrementallyLoadTextures?: boolean
            /**@default {true} 指定模型中指定的glTF动画是否应该启动。 */
            runAnimations?: boolean
            /**@default {true} 指定在没有关键帧的情况下，glTF动画是否应该保持最后一个姿势。 */
            clampAnimations?: boolean
            /**@default {new Cartesian2(1.0, 1.0)} 指定来自基于图像的漫反射和镜面照明的贡献。 */
            imageBasedLightingFactor?: Cesium.Cartesian2
            /** 在为模型着色时指定光的颜色的属性。当undefined场景的浅色被使用代替。 */
            lightColor?: Cesium.Color
            /** 一个对象，其中键是节点的名称，值是TranslationRotationScale属性，描述要应用到该节点的转换。该转换是在节点的现有转换之后(如glTF中指定的那样)应用的，并且不会替换节点的现有转换。 */
            nodeTransformations?: Cesium.PropertyBag | object
            /** An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties. */
            articulations?: Cesium.PropertyBag | object
            /** 用于裁剪模型的Plane平面集合 */
            clippingPlanes?: Cesium.ClippingPlaneCollection
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface PathEntityStyle {
            /** 是否显示 */
            show?: Boolean
            /**@default {1.0} 以像素为单位指定宽度的数字属性。 */
            width?: number
            /**@default {"#FFFF00"} 颜色 */
            color?: string | Cesium.Color
            /**@default {1} 透明度 */
            opacity?: number
            /**@default {#ffffff} 指定用于填充的材质，指定material后fillType和color属性将被覆盖。 */
            material?: Material | string
            /** 指定要在保留path对象前面显示的秒数。 */
            leadTime?: number
            /** 指定要显示的对象后面的秒数。 */
            trailTime?: number
            /**@default {60} 指定在对位置进行采样时步进的最大秒数。 */
            resolution?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface PlaneEntityStyle {
            /** 是否显示 */
            show?: Boolean
            /** 指定平面的宽度和高度。 */
            dimensions?: Cesium.Cartesian2
            /**@default {100} 长度*/
            dimensions_x?: number
            /**@default {100} 宽度*/
            dimensions_y?: number
            /** 指定平面的法线和距离。 */
            plane?: Cesium.Plane
            /**@default {"z"} 方向 ,可选项：x (解释：X轴),y (解释：Y轴),z (解释：Z轴),*/
            plane_normal?: string
            /**@default {0} 偏移距离*/
            plane_distance?: number
            /**@default {0} 方向角 （度数值，0-360度）*/
            heading?: number
            /**@default {0} 俯仰角（度数值，0-360度）*/
            pitch?: number
            /**@default {0} 翻滚角（度数值，0-360度）*/
            roll?: number
            /**@default {true} 是否填充*/
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType*/
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。*/
            material?: Material | Cesium.Color | string
            /**@default {false} 是否随机颜色*/
            randomColor?: Boolean
            /**@default {"#00FF00"} 颜色*/
            color?: string
            /**@default {0.6} 透明度*/
            opacity?: number
            /**@default {false} 是否边框*/
            outline?: Boolean
            /**@default {1} 边框宽度*/
            outlineWidth?: string
            /**@default {"#ffffff"} 边框颜色*/
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度*/
            outlineOpacity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。*/
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离*/
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离*/
            distanceDisplayCondition_near?: number
            /**@default {false} 是否阴影*/
            hasShadows?: Boolean
            /**
             * 0 对象不投射或接收阴影。
             * 1 对象投射和接收阴影。
             * 2 对象仅投射阴影。
             * 3 对象仅接收阴影。
             * @default {Cesium.ShadowMode.DISABLED} 指定平面是投射还是接收来自光源的阴影。*/
            shadows?: Cesium.ShadowMode | 0 | 1 | 2 | 3
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface PointEntityStyle {
            /** 是否显示 */
            show?: Boolean
            /**@default {10} 像素大小 */
            pixelSize?: number
            /**@default {"#3388ff"} 颜色 */
            color?: string | Cesium.Color
            /**@default {1} 透明度 */
            opacity?: number
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {2} 边框宽度 */
            outlineWidth?: number
            /**@default {false} 是否按视距缩放 */
            scaleByDistance?: Boolean | Cesium.NearFarScalar
            /**@default {1000000} 上限 */
            scaleByDistance_far?: number
            /**@default {0.1} 比例值 */
            scaleByDistance_farValue?: number
            /**@default {1000} 下限 */
            scaleByDistance_near?: number
            /**@default {1} 比例值 */
            scaleByDistance_nearValue?: number
            /**@default {false} 是否按视距显示 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {10000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {true} 是否被遮挡 */
            visibleDepth?: Boolean
            /** 指定从相机到禁用深度测试的距离。 */
            disableDepthTestDistance?: number
            /** 用于基于与相机的距离设置半透明度。 */
            translucencyByDistance?: Cesium.NearFarScalar
            /**@default {false} 是否贴地 */
            clampToGround?: Boolean
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。 */
            heightReference?: Cesium.HeightReference
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface PolygonEntityStyle {
            /** 是否显示 */
            show?: Boolean
            /**@default {true} 是否填充  */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType  */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。  */
            material?: Material | Cesium.Color
            /**@default {"#3388ff"} 颜色  */
            color?: string | Cesium.Color
            /**@default {0.6} 透明度  */
            opacity?: number
            /**@default {0} 多边形纹理的角度（弧度值），正北为0，逆时针旋转  */
            stRotation?: number
            /**@default {0} 多边形纹理的角度（度数值，0-360度），与stRotation二选一  */
            stRotationDegree?: number
            /**@default {false} 是否边框  */
            outline?: Boolean
            /**@default {1} 边框宽度  */
            outlineWidth?: number
            /**@default {"#ffffff"} 边框颜色  */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度  */
            outlineOpacity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。  */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离  */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离  */
            distanceDisplayCondition_near?: number
            /**@default {0} 高程，圆相对于椭球面的高度。  */
            height?: number
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。  */
            heightReference?: Cesium.HeightReference
            /**@default {100} 高度差（走廊本身的高度），与extrudedHeight二选一。  */
            diffHeight?: number
            /** 指定走廊挤压面相对于椭球面的高度。 */
            extrudedHeight?: number
            /**@default {Cesium.HeightReference.NONE} 指定挤压高度相对于什么的属性。  */
            extrudedHeightReference?: Cesium.HeightReference
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 指定每个纬度点和经度点之间的角距离。  */
            granularity?: number
            /**@default {true} 当为false时，离开一个挤压多边形的顶部打开。  */
            closeTop?: Boolean | boolean
            /**@default {true} 当为false时，离开挤压多边形的底部打开。  */
            closeBottom?: Boolean | boolean
            /**@default {Cesium.ArcType.GEODESIC} 多边形的边缘必须遵循的线条类型。  */
            arcType?: Cesium.ArcType
            /**@default {false} 是否阴影  */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定多边形是投射还是接收来自光源的阴影。  */
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地  */
            clampToGround?: string
            /**@default {false} 指定是否使用每个位置的高度。同clampToGround，与clampToGround反之  */
            perPositionHeight?: boolean
            /**@default {Cesium.ClassificationType.BOTH} 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。  */
            classificationType?: Cesium.ClassificationType
            /**@default {0} 层级顺序，指定用于排序地面几何的zIndex。只有当多边形是常数且没有指定高度或挤压高度时才有效果。  */
            zIndex?: number
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface PolylineVolumeEntityStyle {
            /**@default {10} 半径  */
            radius?: number
            /**@default {"pipeline"} 形状类型 或 定义要挤压的形状。类型可选项：pipeline (解释：空心管),circle (解释：实心管),star (解释：星状管),  */
            shape?: string | Array<Cesium.Cartesian2>
            /**@default {true} 是否填充  */
            fill?: boolean
            /**@default {"#FFFF00"} 颜色  */
            color?: string
            /**@default {1} 透明度  */
            opacity?: number
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后fillType和color属性将被覆盖。  */
            material?: Material | Cesium.Color
            /**@default {false} 是否边线  */
            outline?: Boolean
            /**@default {1.0} 边线宽度  */
            outlineWidth?: number
            /**@default {"#ffffff"} 边线颜色  */
            outlineColor?: string | Cesium.Color
            /**@default {opacity} 边框透明度  */
            outlineOpacity?: number
            /**@default {CornerType.ROUNDED} 指定边角的样式。  */
            cornerType?: Cesium.CornerType
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 指定每个纬度点和经度点之间的角距离。  */
            granularity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。  */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离  */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离  */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否投射阴影  */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定管道是否投射或接收来自光源的阴影。  */
            shadows?: Cesium.ShadowMode
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface RectangleEntityStyle {
            /**@default {true} 是否填充  */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType  */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。  */
            material?: Material | Cesium.Color
            /**@default {"#3388ff"} 颜色  */
            color?: string | Cesium.Color
            /**@default {0.6} 透明度  */
            opacity?: number
            /**@default {false} 是否边框  */
            outline?: Boolean
            /**@default {1} 边框宽度  */
            outlineWidth?: number
            /**@default {"#ffffff"} 边框颜色  */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度  */
            outlineOpacity?: number
            /**@default {0} 高程，圆相对于椭球面的高度。  */
            height?: number
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。  */
            heightReference?: Cesium.HeightReference
            /**@default {100} 高度差（走廊本身的高度），与extrudedHeight二选一。  */
            diffHeight?: number
            /** 指定走廊挤压面相对于椭球面的高度。 */
            extrudedHeight?: number
            /**@default {Cesium.HeightReference.NONE} 指定挤压高度相对于什么的属性。  */
            extrudedHeightReference?: Cesium.HeightReference
            /**@default {0} 旋转角度（弧度值），正北为0，逆时针旋转  */
            rotation?: number
            /**@default {0} 旋转角度（度数值，0-360度），与rotation二选一  */
            rotationDegree?: number
            /**@default {0} 矩形纹理的角度（弧度值），正北为0，逆时针旋转  */
            stRotation?: number
            /**@default {0} 矩形纹理的角度（度数值，0-360度），与stRotation二选一  */
            stRotationDegree?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。  */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离  */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离  */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否阴影  */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定矩形是投射还是接收来自光源的阴影。  */
            shadows?: Cesium.ShadowMode
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 指定矩形上各点之间的角距离。  */
            granularity?: number
            /**@default {false} 是否贴地  */
            clampToGround?: string
            /**@default {Cesium.ClassificationType.BOTH} 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。  */
            classificationType?: Cesium.ClassificationType
            /**@default {0} 层级顺序，指定用于排序地面几何的zIndex。只有当矩形为常量且没有指定height或extrdedheight时才有效果。  */
            zIndex?: number
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface WallEntityStyle {
            /**@default {100} 墙高 */
            diffHeight?: number
            /** 没有指定diffHeight时，可以指定用于墙壁底部而不是球体表面的高度数组。 */
            minimumHeights?: Array<number>
            /** 没有指定diffHeight时，可以指定用于墙顶的高度数组，而不是每个位置的高度。 */
            maximumHeights?: Array<number>
            /**@default {true} 是否填充 */
            fill?: Boolean
            /**@default {"Color"} 填充类型 ,可选项：MaterialType */
            materialType?: string
            /**@default {Cesium.Color.WHITE} 指定用于填充的材质，指定material后materialType和material材质参数将被覆盖。 */
            material?: Material | Cesium.Color
            /**@default {"#00FF00"} 颜色 */
            color?: string
            /**@default {0.6} 透明度 */
            opacity?: number
            /**@default {false} 是否闭合 */
            closure?: Boolean
            /**@default {false} 是否边框 */
            outline?: Boolean
            /**@default {1} 边框宽度 */
            outlineWidth?: string
            /**@default {"#ffffff"} 边框颜色 */
            outlineColor?: string | Cesium.Color
            /**@default {0.6} 边框透明度 */
            outlineOpacity?: number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否阴影 */
            hasShadows?: Boolean
            /**@default {Cesium.ShadowMode.DISABLED} 指定墙壁是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {Cesium.Math.RADIANS_PER_DEGREE} 指定每个纬度点和经度点之间的角距离。 */
            granularity?: number
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }

        interface DivGraphic {
            /**@default {""} Html文本 */
            html?: string
            /**@default {"CENTER"} 横向定位 ,可选项：LEFT (解释：左边),CENTER (解释：居中),RIGHT (解释：右边), */
            horizontalOrigin?: "CENTER" | 'LEFT' | 'RIGHT'
            /**@default {"CENTER"} 垂直定位 ,可选项：TOP (解释：顶部),CENTER (解释：居中),BOTTOM (解释：底部), */
            verticalOrigin?: "CENTER" | 'BOTTOM' | 'TOP'
            /** 用于非规则div时，横向偏移的px像素值 */
            offsetX?: number
            /** 用于非规则div时，垂直方向偏移的px像素值 */
            offsetY?: number
            /**@default {false} 是否按视距缩放 */
            scaleByDistance?: Boolean
            /**@default {1000000} 上限 */
            scaleByDistance_far?: number
            /**@default {0.1} 比例值 */
            scaleByDistance_farValue?: number
            /**@default {1000} 下限 */
            scaleByDistance_near?: number
            /**@default {1} 比例值 */
            scaleByDistance_nearValue?: number
            /**@default {false} 是否按视距显示 */
            distanceDisplayCondition?: Boolean
            /**@default {10000} 最大距离 */
            distanceDisplayCondition_far?: number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: number
            /**@default {false} 是否贴地 */
            clampToGround?: Boolean
            /**@default {true} 是否被遮挡 */
            depthTest?: Boolean
            /**@default {'left bottom 0'} DIV的 transform-origin css值 */
            css_transform_origin?: string
        }

        interface ModelPrimitive {
            /** glTF模型的URI的字符串或资源属性。 */
            url?: string | Cesium.Resource
            /**@default {1} 比例 */
            scale?: Number
            /**@default {0} 方向角 （度数值，0-360度） */
            heading?: Number
            /**@default {0} 俯仰角（度数值，0-360度） */
            pitch?: Number
            /**@default {0} 翻滚角（度数值，0-360度） */
            roll?: Number
            /**@default {0.0} 指定模型的近似最小像素大小，而不考虑缩放。 */
            minimumPixelSize?: number
            /** 模型的最大比例尺寸。minimumPixelSize的上限。 */
            maximumScale?: number
            /**@default {false} 是否填充，指定与模型渲染颜色混合 */
            fill?: Boolean
            /**@default {"#3388ff"} 颜色 */
            color?: string | Cesium.Color
            /**@default {1} 透明度 */
            opacity?: Number
            /**@default {ColorBlendMode.HIGHLIGHT} 指定颜色如何与模型混合。 */
            colorBlendMode?: Cesium.ColorBlendMode
            /**@default {0.5} 当colorBlendMode为MIX时指定颜色强度的数字属性。0.0的值表示模型渲染的颜色，1.0的值表示纯色，任何介于两者之间的值表示两者的混合。 */
            colorBlendAmount?: number
            /**@default {false} 是否轮廓 */
            silhouette?: Boolean
            /**@default {"#ffffff"} 轮廓颜色 */
            silhouetteColor?: string | Cesium.Color
            /**@default {2} 轮廓宽度 */
            silhouetteSize?: Number
            /**@default {0.8} 轮廓透明度 */
            silhouetteAlpha?: Number
            /**@default {false} 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。 */
            distanceDisplayCondition?: Boolean | Cesium.DistanceDisplayCondition
            /**@default {100000} 最大距离 */
            distanceDisplayCondition_far?: Number
            /**@default {0} 最小距离 */
            distanceDisplayCondition_near?: Number
            /**@default {true} 是否阴影 */
            hasShadows?: Boolean
            /**@default {ShadowMode.ENABLED} 指定模型是投射还是接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {false} 是否贴地 */
            clampToGround?: Boolean
            /**@default {Cesium.HeightReference.NONE} 指定高度相对于什么的属性。 */
            heightReference?: Cesium.HeightReference
            /**@default {true} 确定模型加载后纹理是否会继续流进来。 */
            incrementallyLoadTextures?: boolean
            /**@default {true} 指定模型中指定的glTF动画是否应该启动。 */
            runAnimations?: boolean
            /**@default {true} 指定在没有关键帧的情况下，glTF动画是否应该保持最后一个姿势。 */
            clampAnimations?: boolean
            /**@default {new Cartesian2(1.0, 1.0)} 指定来自基于图像的漫反射和镜面照明的贡献。 */
            imageBasedLightingFactor?: Cesium.Cartesian2
            /** 在为模型着色时指定光的颜色的属性。当undefined场景的浅色被使用代替。 */
            lightColor?: Cesium.Color
            /** 一个对象，其中键是节点的名称，值是TranslationRotationScale属性，描述要应用到该节点的转换。该转换是在节点的现有转换之后(如glTF中指定的那样)应用的，并且不会替换节点的现有转换。 */
            nodeTransformations?: Cesium.PropertyBag | object
            /** An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties. */
            articulations?: Cesium.PropertyBag | object
            /** 用于裁剪模型的Plane平面集合 */
            clippingPlanes?: Cesium.ClippingPlaneCollection
            /**@default {true} 当true时，每个glTF和Primitive都可以用Cesium.Scene#pick来拾取。 */
            allowPicking?: Boolean
            /**@default {true} 确定模型WebGL资源创建是否将分散在几个帧或块上，直到所有glTF文件加载完成。 */
            asynchronous?: Boolean
            /**@default {true} 确定一个Draco编码的模型是否在GPU上被去量化。这减少了编码模型的总内存使用量。 */
            dequantizeInShader?: Boolean
            /**@default {true} 是否剔除面向背面的几何图形。当为真时，背面剔除是由材料的双面属性决定的;当为false时，禁用背面剔除。如果Model#color是半透明的，或者Model#silhouette大于0.0，则背面不会被剔除。 */
            backFaceCulling?: Boolean
            /**@default {false} 仅供调试。查看模型的包围边界球。 */
            debugShowBoundingVolume?: Boolean
            /**@default {false} 仅供调试。查看模型的三角网线框图。 */
            debugWireframe?: Boolean

            //以下是 以下是 模型动画相关
            /** 场景时间开始播放动画。当undefined时，动画从下一帧开始。 */
            startTime?: Cesium.JulianDate
            /**@default {0.0} 从startTime开始播放的延迟，以秒为单位。 */
            delay?: Number
            /** 场景时间停止播放动画。当这是undefined，动画播放它的整个持续时间。 */
            stopTime?: Cesium.JulianDate
            /**@default {false} 当true时，动画在停止播放后被删除。 */
            removeOnStop?: Boolean
            /**@default {1.0} 大于1.0的值增加动画播放的速度相对于场景时钟的速度;小于1.0会降低速度。 */
            multiplier?: Number
            /**@default {false} 当true时，动画会反向播放。 */
            reverse?: Boolean
            /**@default {Cesium.ModelAnimationLoop.REPEAT} 决定动画是否循环以及如何循环。 */
            loop?: Cesium.ModelAnimationLoop
            /** 支持附带文字的显示 */
            label?: sxii.style.LabelEntity
        }
    }

    namespace layer {

        enum State {
            'INITIALIZED' = 'INITIALIZED',
            'ADDED' = 'ADDED',
            'REMOVED' = 'REMOVED',
        }
        interface BaseLayerOptions {
            /**@default {uuid()	} 可选图层id标识 */
            id?: string | number
            /**@default {-1} 可选图层父级的id，一般图层管理中使用 */
            pid?: string | number
            /**@default {'未命名'} 可选图层名称 */
            name?: string
            /**@default {true} 可选图层是否显示 */
            show?: Boolean
            /**@default {1} 可选透明度，取值范围：0.0-1.0 */
            opacity?: number
            /** 可选图层自定义定位视角 */
            center?: Object
            /** 可选当图层支持popup弹窗时，绑定的值 */
            popup?: Object
            /** 可选当图层支持tooltip弹窗时，绑定的值 */
            tooltip?: Object
            /** 可选当图层支持右键菜单时，绑定的值 */
            contextmenuItems?: Object
        }
        class BaseLayer extends BaseClass {
            constructor(options?: BaseLayerOptions)
            readonly hasOpacity: Boolean
            id: string | number
            readonly isAdded: Boolean
            opacity: number
            show: Boolean
            readonly state: State
            readonly type: string
            readonly uuid: string

            addTo(map: sxii.Map): this
            flyTo(options: Omit<sxii.graphic.flyToOptions,
                'minHeight' | 'maxHeight' | 'maxHeight' | 'maxHeight' |
                'heading' | 'pitch' | 'roll'
            >): this
            flyToByAnimationEnd(): this
            remove(destroy: Boolean): void
            setOptions(options: {}): this
            showError(title: string, error: {}): this
        }

        interface EchartsLayerOptions extends echarts.EChartOption {
            /**@default {uuid()} 图层id标识*/
            id?: string | number
            /**@default {-1} 图层父级的id，一般图层管理中使用*/
            pid?: string | number
            /**@default {'未命名'} 图层名称*/
            name?: string
            /**@default {true} 图层是否显示*/
            show?: Boolean
            /** 图层自定义定位视角*/
            center?: Object
            /**@default {true} 是否进行计算深度判断，在地球背面或被遮挡时不显示（大数据时，需要关闭）*/
            depthTest?: Boolean
            /**@default {0} 点的固定的海拔高度*/
            fixedHeight?: number
            /**@default {false} 点是否贴地*/
            clampToGround?: Boolean
            /**@default {false} 图层是否可以进行鼠标交互，为false时可以穿透操作及缩放地图*/
            pointerEvents?: Boolean
            GLMap?: object
        }

        class EchartsLayer extends BaseLayer {
            constructor(options?: EchartsLayerOptions)
            /** echarts对象，是echarts.init方法返回的 echartsInstance 实例 */
            readonly layer: HTMLCanvasElement
            resize(): void
            /**
             * 设置图表实例的配置项以及数据， 万能接口，所有参数和数据的修改都可以通过 setOption 完成， ECharts 会合并新的参数和数据，然后刷新图表。 
             * 如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化
             * @param option 图表的配置项和数据，具体见 Echarts配置项手册。
             * @param notMerge 是否不跟之前设置的 option 进行合并。默认为 false。即表示合并。合并的规则，详见 组件合并模式。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。
             * @param lazyUpdate 在设置完 option 后是否不立即更新图表，默认为 false，即同步立即更新。如果为 true，则会在下一个 animation frame 中，才更新图表。
             */
            setEchartsOption(option: echarts.EChartOption, notMerge?: boolean, lazyUpdate?: boolean): void
        }

        interface BaseGraphicLayerOptions {
            id?: string | number
            pid?: string | number
            name?: string
            show?: Boolean
            center?: LngLatProps
            extent?: ExtentProps
            flyTo?: Boolean
            popuo?: {}
            tooltip?: {}
            contextmenuItems?: {}
            opacity?: number
            zIndex?: number
        }

        interface ContentMenuProps {
            text?: string
            iconCls?: string
            show?: Function | Boolean
            callback?: Function
            children?: Array<{}>
        }
        class BaseGraphicLayer extends BaseLayer {
            constructor(options?: BaseGraphicLayerOptions)
            addGraphic(graphic: any): void
            bindContextMenu(content: Array<ContentMenuProps>, options?: {}): this
            bindPopup(content: string | Function, options: {
                anchor?: Array<number>
                timeRender?: Boolean
                onAdd?: Function
                onRemove?: Function
            }): this
            bindTooltip(content: string | Function, options: {
                anchor?: Array<number>
                onAdd?: Function
                onRemove?: Function
            }): this
            closeContextMenu(): this
            closePopup(): this
            closeSmallTooltip(): this
            closeTooltip(): this
            getContextMenu(): Array<Object>
            hasContextMenu(): this
            hasPopup(): Boolean
            hasTooltip(): Boolean
            openContextMenu(position: sxii.graphic.BaseGraphic | Cesium.Cartesian3, options: {}): this
            openPopup(position: sxii.graphic.BaseGraphic | Cesium.Cartesian3, options: {}): this
            openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: any): this
            openTooltip(position: sxii.graphic.BaseGraphic | Cesium.Cartesian3, options: {}): this
            unbindContextMenu(stopPropagation: Boolean): this
            unbindPopup(stopPropagation: Boolean): this
            unbindTooltip(stopPropagation: Boolean): this
        }


        interface BaseTileLayerOptions {
            /**@default {uuid()} 图层id标识 */
            id?: string | number
            /**@default {-1} 图层父级的id，一般图层管理中使用 */
            pid?: string | number
            /**@default {'未命名'} 图层名称 */
            name?: string
            /**@default {true} 图层是否显示 */
            show?: Boolean
            /**图层自定义定位视角 */
            center?: LngLatProps
            /**加载完成数据后是否自动飞行定位到数据所在的区域。 */
            flyTo?: Boolean
            /**瓦片所支持的最低层级，如果数据没有第0层，该参数必须配置,当地图小于该级别时，平台不去请求服务数据。 */
            minimumLevel?: number
            /**瓦片所支持的最大层级,大于该层级时会显示上一层拉伸后的瓦片，当地图大于该级别时，平台不去请求服务数据。 */
            maximumLevel?: number
            /**展示影像图层的最小地形细节级别，小于该级别时，平台不显示影像数据。 */
            minimumTerrainLevel?: number
            /**展示影像图层的最大地形细节级别，大于该级别时，平台不显示影像数据。 */
            maximumTerrainLevel?: number
            rectangle?: Omit<ExtentProps, 'height' | 'formatNum'>
            /**bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。 */
            bbox?: Array<number>
            /**@default {CRS.E瓦片数据的坐标系信息，默认为墨卡托投影PSG:3857} */
            crs?: CRSString
            /**@default {'abc'URL模板中用于 {s} 占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是一个子域。如果是 一个数组，数组中的每个元素都是一个子域。} */
            subdomains?: string | Array<string>
            /** 允许替换网址模板中的自定义关键字。该对象必须具有字符串作为键，并且必须具有值。*/
            customTags?: object
            /**@default {256} 图像图块的像素宽度。*/
            /**@default {256} 图像图块的像素高度。*/
            tileHeight?: number
            /**@default {true}如果此图像提供者提供的图像为真 包括一个Alpha通道；否则为假。如果此属性为false，则为Alpha通道，如果 目前，将被忽略。如果此属性为true，则任何没有Alpha通道的图像都将 它们的alpha随处可见。当此属性为false时，内存使用情况 和纹理上传时间可能会减少。 */
            hasAlphaChannel?: Boolean
            /**@default {true}如果为true，则 UrlTemplateImageryProvider#pickFeatures 请求 pickFeaturesUrl 并尝试解释响应中包含的功能。 如果为 falseUrlTemplateImageryProvider#pickFeatures 会立即返回未定义（表示没有可拾取的内容） 功能）而无需与服务器通信。如果您知道数据，则将此属性设置为false 源不支持选择功能，或者您不希望该提供程序的功能可供选择。注意 可以通过修改 UriTemplateImageryProvider#enablePickFeatures来动态覆盖 属性。 */
            enablePickFeatures?: Boolean
            /**在某处获取功能信息的格式 调用 UrlTemplateImageryProvider#pickFeatures 的特定位置。如果这 参数未指定，功能选择已禁用。 */
            getFeatureInfoFormats?: Array<any>
            /** 当pickFeatures有效返回时，图层支持popup弹窗，绑定的弹窗值（如wms动态服务）*/
            popup?: object
            /**@default {1.0} 透明度，取值范围：0.0-1.0。*/
            opacity?: number
            /**@default {1.0} 同opacity。*/
            alpha?: number | Function
            /**@default {1.0} 当 enableLighting 为 true 时 ，在地球的夜晚区域的透明度，取值范围：0.0-1.0。*/
            nightAlpha?: number | Function
            /**@default {1.0} 当 enableLighting 为 true 时，在地球的白天区域的透明度，取值范围：0.0-1.0。*/
            dayAlpha?: number | Function
            /**@default {1.0} 亮度，取值范围：0.0-1.0。*/
            brightness?: number | Function
            /**@default {1.0} 对比度。 1.0使用未修改的图像颜色，小于1.0会降低对比度，而大于1.0则会提高对比度。*/
            contrast?: number | Function
            /**@default {0.0} 色调。 0.0 时未修改的图像颜色。*/
            hue?: number | Function
            /**@default {1.0} 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度。*/
            saturation?: number | Function
            /**@default {1.0} 伽马校正值。 1.0使用未修改的图像颜色。*/
            gamma?: number | Function
            /**@default {maximum supported} 使用的最大各向异性水平 用于纹理过滤。如果未指定此参数，则支持最大各向异性 将使用WebGL堆栈。较大的值可使影像在水平方向上看起来更好 视图。*/
            maximumAnisotropy?: number
            /** 制图矩形，用于裁剪此ImageryLayer的一部分。*/
            cutoutRectangle?: Cesium.Rectangle
            /** 用作Alpha的颜色。*/
            colorToAlpha?: Cesium.Color
            /**@default {0.004} 颜色到Alpha的阈值。*/
            colorToAlphaThreshold?: number
            /** 加载资源时要使用的代理服务url。*/
            proxy?: string
            /** 一个对象，用于替换Url中的模板值的键 / 值对*/
            templateValues?: object
            /** 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: { 'access_token': '123-435-456-000' },*/
            queryParameters?: object
            /** 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' },*/
            headers?: object
            /** 控制图层的叠加层次，默认按加载的顺序进行叠加，但也可以自定义叠加顺序，数字大的在上面。*/
            zIndex?: number
        }
        class BaseTileLayer extends BaseLayer {
            constructor(options?: BaseTileLayerOptions)
            alpha: number
            brightness: number
            contrast: number
            gamma: number
            readonly hasZIndex: Boolean
            hue: number
            readonly layer: Cesium.ImageryLayer
            saturation: number
            zIndex: number
            _createImageryProvider(options: {}): Cesium.UrlTemplateImageryProvider | any
            setOpacity(value: number): void

        }

        class BaiduLayer extends BaseTileLayer { }
        class GaodeLayer extends BaseTileLayer { }
        class GoogleLayer extends BaseTileLayer { }

        interface XyzLayerOptions extends BaseTileLayerOptions {
            urlSchemeZeroPadding?: {}
            pickFeaturesUrl?: Cesium.Resource | string
        }
        class XyzLayer extends BaseTileLayer {
            constructor(options: XyzLayerOptions)
        }

        interface WmsLayerOptions extends BaseTileLayerOptions {
            /** WMS服务的URL。URL支持相同的关键字 XyzLayer.*/
            url?: Cesium.Resource | string
            /** 要包含的图层，用逗号分隔。*/
            layers?: string
            /** 可选要在URL中 传递给WMS服务GetMap请求的其他参数。*/
            parameters?: object
            /** 可选要在GetFeatureInfo URL中传递给WMS服务器的其他参数。*/
            getFeatureInfoParameters?: object
            /** 可选CRS规范，用于WMS规范>= 1.3.0。 */
            crs?: string
            /** 可选SRS规范，与WMS规范1.1.0或1.1.1一起使用*/
            srs?: string
            /**可选一个时钟实例，用于确定时间维度的值。指定' times '时需要。 */
            clock?: Cesium.Clock
            /** 可选TimeIntervalCollection 的数据属性是一个包含时间动态维度及其值的对象。*/
            times?: Cesium.TimeIntervalCollection
        }

        class WmsLayer extends BaseTileLayer {
            constructor(options?: WmsLayerOptions)
        }

        interface BingLayerOptions extends BaseTileLayerOptions {
            /** 托管影像图像的Bing Maps服务器的网址 */
            url?: Cesium.Resource | string
            /** 于确定图块是否为无效，应将其丢弃。
             * 如果未指定此值，则为默认 DiscardMissingTileImagePolicy 用于平铺的地图服务器，并且NeverTileDiscardPolicy 用于非平铺地图服务器。
             * 在前一种情况下， 我们要求最大图块级别的图块0,0并检查像素（0,0），（200,20），（20,200）， （80,110）和（160，130）。
             * 如果所有这些像素都是透明的，则丢弃检查为 禁用，并且不会丢弃任何图块。
             * 如果它们中的任何一种具有不透明的颜色， 在这些像素位置具有相同值的图块将被丢弃。
             * 的最终结果 对于标准ArcGIS Server，这些默认值应该是正确的图块丢弃。
             * 确保 不会丢弃任何图块，为此构造并传递 NeverTileDiscardPolicy 参数。 */
            tileDiscardPolicy?: any
        }

        class BingLayer extends BaseTileLayer {
            constructor(options?: BingLayerOptions)
        }

        interface TencentLayerOptions extends BaseTileLayerOptions {
            /** 图层类型 */
            layer?: string
            /** 当layer为custom时，标识的样式，可选值：灰白地图:3,暗色地图:4 */
            style?: string
        }

        class TencentLayer extends BaseTileLayer {
            constructor(options?: TencentLayerOptions)
        }

        interface DivLayerOptions extends Omit<GraphicLayerOptions, 'clustering'> {
            /** DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。 */
            pointerEvents?: Boolean
        }
        class DivLayer extends GraphicLayer {
            constructor(options: DivLayerOptions)
            readonly container: Element
            pointerEvents: Boolean
        }

        interface GraphicLayerOptions extends BaseGraphicLayerOptions {
            /** 是否可编辑 */
            hasEdit?: boolean
            /** 完成标绘时是否自动启动编辑(需要hasEdit:true时) */
            isAutoEditing?: boolean
            /** 是否连续标绘 */
            isContinued?: boolean
            /** 需要自动加载的数据，内部自动生成Graphic对象。 */
            data?: object | Array<object>
            /** 点数据时，设置聚合相关参数 */
            clustering?: ClusteringOptions | boolean
        }
        interface ClusteringOptions {
            /**@default {false} 可选是否开启聚合*/
            enabled?: Boolean
            /**@default {20} 可选多少像素矩形范围内聚合*/
            pixelRange?: Number
            /**@default {true} 可选是否贴地*/
            clampToGround?: Boolean
            /**@default {28} 可选圆形图标的整体半径大小（单位：像素）*/
            radius?: Number
            /**@default {radius-5} 可选圆形图标的内圆半径大小（单位：像素）*/
            radiusIn?: Number
            /**@default {'#ffffff'} 可选数字的颜色*/
            fontColor?: string
            /**@default {rgba(181, 226, 140, 0.6)} 可选圆形图标的背景颜色，默认自动处理*/
            color?: string
            /**@default {rgba(110, 204, 57, 0.5)} 可选圆形图标的内圆背景颜色，默认自动处理*/
            colorIn?: string
        }

        export type GraphicType =
            /**文本点,对应类为：LabelEntity */
            'label' |
            /** 文本点（图元）,对应类为：LabelPrimitive*/
            'labelP' |
            /** 像素点,，对应类为：PointEntity*/
            'point' |
            /** 像素点（图元），对应类为：PointPrimitive*/
            'pointP' |
            /** 图标点，对应类为：BillboardEntity*/
            'billboard' |
            /** HTML转图片后的图标点，对应类为：DivBillboardEntity*/
            'divBillboard' |
            /** Font CSS字体点转图片后的图标点，对应类为：FontBillboardEntity*/
            'fontBillboard' |
            /** 图标点（图元），对应类为：BillboardPrimitive*/
            'billboardP' |
            /** gltf小模型，对应类为：ModelEntity*/
            'model' |
            /** gltf小模型（图元）对应类为：ModelPrimitive*/
            'modelP' |
            /** gltf小模型（数据集），对应类为：ModelInstance*/
            'modelInstance' |
            /** 平面，对应类为：PlaneEntity*/
            'plane' |
            /** 平面（图元），对应类为：PlanePrimitive*/
            'planeP' |
            /** 盒子，对应类为：BoxEntity*/
            'box' |
            /** 盒子（图元），对应类为：BoxPrimitive*/
            'boxP' |
            /** 圆、圆柱，对应类为：CircleEntity*/
            'circle' |
            /** 圆、圆柱（图元）对应类为：CirclePrimitive*/
            'circleP' |
            /** 椭圆、椭圆柱，对应类为：EllipseEntity*/
            'ellipse' |
            /** 圆锥，对应类为：CylinderEntity*/
            'cylinder' |
            /** 圆锥（图元），对应类为：CylinderPrimitive*/
            'cylinderP' |
            /** 球体，对应类为：EllipsoidEntity*/
            'ellipsoid' |
            /** 球体（图元），对应类为：EllipsoidPrimitive*/
            'ellipsoidP' |
            /** 线，对应类为：PolylineEntity*/
            'polyline' |
            /** 曲线，对应类为：CurveEntity*/
            'curve' |
            /** 线（图元），对应类为：PolylinePrimitive*/
            'polylineP' |
            /** 管道线，对应类为：PolylineVolumeEntity*/
            'polylineVolume' |
            /** 管道线（图元），对应类为：PolylineVolumePrimitive*/
            'polylineVolumeP' |
            /** 路径，对应类为：PathEntity*/
            'path' |
            /** 走廊，对应类为：CorridorEntity*/
            'corridor' |
            /** 走廊（图元），对应类为：CorridorPrimitive*/
            'corridorP' |
            /** 墙，对应类为：WallEntity*/
            'wall' |
            /** 墙（图元），对应类为：WallPrimitive*/
            'wallP' |
            /** 面，对应类为：PolygonEntity*/
            'polygon' |
            /** 面（图元）对应类为：PolygonPrimitive*/
            'polygonP' |
            /** 水域面，对应类为：Water*/
            'water' |
            /** 矩形，对应类为：RectangleEntity*/
            'rectangle' |
            /** 矩形（图元），对应类为：RectanglePrimitive*/
            'rectangleP' |
            /** DIV点，对应类为：DivGraphic*/
            'div' |
            /** 粒子效果，对应类为：ParticleSystem*/
            'particleSystem' |
            /** 视频融合（投射2D平面），对应类为：Video2D*/
            'video2D' |
            /** 视频融合（投射3D，贴物体表面）对应类为：Video3D*/
            'video3D' |
            /** 平放的图标（数据集），对应类为：FlatBillboard*/
            'flatBillboard' |
            /** 光锥体，对应类为：LightCone*/
            'lightCone' |
            /** 走马灯围墙效果，对应类为：ScrollWall*/
            'scrollWall' |
            /** 立体面(或圆)散射效果，对应类为：DiffuseWall*/
            'diffuseWall' |
            /** 动态河流，对应类为：DynamicRiver*/
            'dynamicRiver' |
            /** 道路，对应类为：Road*/
            'road' |
            /** 相控阵雷达，对应类为：RectangularSensor*/
            'rectangularSensor' |
            /** 井，对应类为：Pit*/
            'pit' |
            /** 攻击箭头，对应类为：AttackArrow*/
            'attackArrow' |
            /** 攻击箭头(平尾)，对应类为：AttackArrowPW*/
            'attackArrowPW' |
            /** 攻击箭头（燕尾），对应类为：AttackArrowYW*/
            'attackArrowYW' |
            /** 双箭头（钳击），对应类为：DoubleArrow*/
            'doubleArrow' |
            /** 直箭头(2个点)，对应类为：FineArrow*/
            'fineArrow' |
            /** 燕尾直箭头(2个点)，对应类为：FineArrowYW*/
            'fineArrowYW' |
            /** 直箭头(3个点)，对应类为：StraightArrow*/
            'straightArrow' |
            /** 弓形面(3个点)，对应类为：Lune*/
            'lune' |
            /** 扇形(3个点)，对应类为：Sector*/
            'sector' |
            /** 正多边形，对应类为：Regular*/
            'regular' |
            /** 等腰三角形(3个点)，对应类为：IsosTriangle*/
            'isosTriangle' |
            /** 闭合曲面(3个点)，对应类为：CloseVurve*/
            'closeVurve' |
            /** 集结地(3个点)，对应类为：GatheringPlace*/
            'gatheringPlace' |
            /** 双曲面拱形雷达【sxii-space插件】，对应类为：CamberRadar*/
            'camberRadar' |
            /** 圆锥体（单目标雷达）【sxii-space插件】，对应类为：ConicSensor*/
            'conicSensor' |
            /** 四棱锥体【sxii-space插件】，对应类为：RectSensor*/
            'rectSensor' |
            /** 卫星视锥综合体（圆锥或四凌锥）【sxii-space插件】，对应类为：SatelliteSensor*/
            'satelliteSensor' |
            /** 卫星综合体【sxii-space插件】，对应类为：Satellite*/
            'satellite'

        class GraphicLayer extends BaseGraphicLayer {
            constructor(options?: GraphicLayerOptions)
            clustering: Boolean | ClusteringOptions
            readonly dataSource: Cesium.CustomDataSource
            readonly graphics: Array<sxii.graphic.BaseGraphic>
            hasEdit: Boolean
            readonly hasZIndex: Boolean
            readonly length: Number
            zIndex: Number
            _removedHook(): void
            activateEdit(): this
            ddGraphic(graphic: sxii.graphic.BaseGraphic): this
            clear(hasDestory: Boolean): void
            disableEdit(): this
            eachGraphic(method: Function, context: {}): this
            endDraw(): this
            getGraphicByAttr(attrName: object | string | number, attrVal: string): sxii.graphic.BaseGraphic
            getGraphicById(id: string | number): sxii.graphic.BaseGraphic
            getGraphics(): Array<sxii.graphic.BaseGraphic>
            getGraphicsByAttr(attrName: object | string | number, attrVal: string): Array<sxii.graphic.BaseGraphic>
            loadGeoJSON(geojson: sxii.graphic.BaseGraphic, options: {
                clear?: Boolean
                flyTo?: Boolean
                style?: {}
            }): Array<sxii.graphic.BaseGraphic>
            removeGraphic(graphic: sxii.graphic.BaseGraphic, hasDestory: Boolean): this
            startDraw(options: {
                type: GraphicType
                drawShow?: boolean
                style?: {}
            }): sxii.graphic.BaseGraphic
            startEditing(graphic: sxii.graphic.BaseGraphic, event: {}): this
            stopDraw(): this
            stopEditing(): this
            toGeoJSON(): Object

        }

        interface BaseModelLayer {
            /** 【方式1】模型的url地址 */
            url?: string
            /** 模型所在位置坐标 */
            position?: LatLngPoint | Cesium.Cartesian3
            /** 模型的样式配置 */
            style?: object
        }

        interface ModelLayerOptions extends GraphicLayerOptions, BaseModelLayer {
            /** 【方式2】多个模型时，可以传入data数组构造： */
            data?: Array<BaseModelLayer>
            positions?: Array<LatLngPoint> | Array<Cesium.Cartesian3>
        }

        class ModelLayer extends GraphicLayer {
            constructor(options: ModelLayerOptions)
        }

        interface TilesetLayerOptions extends BaseGraphicLayerOptions {
            /** tileset的主JSON文件的 url */
            url?: string
            /**@default {16} 用于驱动细化细节级别的最大屏幕空间错误。数值加大，能让最终成像变模糊  */
            maximumScreenSpaceError?: number
            /**@default {512} 数据集可以使用的最大内存量(以MB计)。这个参数默认是512，也即是当几何体和纹理资源大于512MB的时候，Cesium就会淘汰掉当前帧中没有visited的所有块，这个值其实很小，也是cesium为了避免资源占用过高的一个保障，不过上述我们也估算过最差情况下，没有做纹理crn压缩的情况下，这个值很容易被超过，导致很多人误以为cesium的淘汰没有效果。这个值如果设置的过小，导致cesium几乎每帧都在尝试淘汰数据，增加了遍历的时间，也同时增加了崩溃的风险。这个值如果设置的过大，cesium的淘汰机制失效，那么容易导致显存超过显卡内存，也会导致崩溃。 这个值应该处于最差视角下资源占用 和 显存最大量之间。结论：这个参数要根据当前显卡显存来配置，如果我们场景只显示这一个模型数据，这个可以设置到显存的50 % 左右，比如我的显存是6G，这个可以设置到3000左右。那么既保证不超过显存限制，又可以最大利用显存缓存，配合crn压缩之后，这个几乎可以保证你第二次查看模型同一位置的时候，看不到加载过程，非常棒。 */
            maximumMemoryUsage?: number
            /**@default {ShadowMode.ENABLED} 确定tileset是否投射或接收来自光源的阴影。 */
            shadows?: Cesium.ShadowMode
            /**@default {true} 优化选择。是否使用子绑定卷的并集来筛选贴图。 */
            cullWithChildrenBounds?: Boolean
            /**@default {true} 优化选择。不要要求贴图，当他们回来的时候可能不会使用，因为相机的运动。这个优化只适用于固定瓷砖组。 */
            cullRequestsWhileMoving?: Boolean
            /**@default {60.0} 优化选择。在移动时选择请求时使用的倍增器。越大的选择性越强，越小的选择性越弱。值越小能够更快的剔除。 */
            cullRequestsWhileMovingMultiplier?: number
            /**@default {false} 当true时，tileset.show是false，也去预加载数据。 */
            preloadWhenHidden?: Boolean
            /**@default {true} 优化选择。当摄像机在飞行时，在摄像机的飞行目的地预加载贴图。 */
            preloadFlightDestinations?: Boolean
            /**@default {false} 优化选择。最好先加载上叶子节点数据。这个参数默认是false，同等条件下，叶子节点会优先加载。但是Cesium的tile加载优先级有很多考虑条件，这个只是其中之一，如果skipLevelOfDetail=false，这个参数几乎无意义。所以要配合skipLevelOfDetail=true来使用，此时设置preferLeaves=true。这样我们就能最快的看见符合当前视觉精度的块，对于提升大数据以及网络环境不好的前提下有一点点改善意义。 */
            preferLeaves?: Boolean
            /**@default {false} 优化选择。减少远离摄像头的贴图的屏幕空间误差。true时会在真正的全屏加载完之后才清晰化模型. */
            dynamicScreenSpaceError?: Boolean
            /**@default {0.00278} 密度用来调整动态画面空间误差，类似于雾密度。 */
            dynamicScreenSpaceErrorDensity?: number
            /**@default {4.0} 用于增加计算的动态屏幕空间误差的因素。 */
            dynamicScreenSpaceErrorFactor?: number
            /**@default {0.25} 瓷砖密度开始下降时的高度之比。 */
            dynamicScreenSpaceErrorHeightFalloff?: number
            /**@default {0.3} 优化选择。如果在(0.0,0.5)之间，在屏幕空间或以上的瓷砖错误降低屏幕分辨率 progressiveResolutionHeightFraction*screenHeight 将优先。这可以帮助得到一个快速层的瓷砖下来，而全分辨率的瓷砖继续加载。 */
            progressiveResolutionHeightFraction?: number
            /**@default {true} 优化选择。通过暂时提高屏幕边缘的贴图的屏幕空间误差，优先加载屏幕中央的贴图。一旦所有由cesium3dtilesset#foveatedConeSize确定的屏幕中央的贴图被加载，屏幕空间错误就会恢复正常。 */
            foveatedScreenSpaceError?: Boolean
            /**@default {0.1} 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制决定哪些贴图被延迟的锥大小。装在这个圆锥体里的瓷砖会立即被装入。锥外的贴图有可能被延迟，这取决于它们在锥外的距离和它们的屏幕空间误差。这是由Cesium3DTileset#foveatedInterpolationCallback和Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation控制的。设置为0.0意味着圆锥将是由相机位置和它的视图方向形成的线。将此设置为1.0意味着圆锥将包含相机的整个视场，禁用此效果。 */
            foveatedConeSize?: number
            /**@default {0.0} 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛。屏幕空间错误将基于所提供的Cesium3DTileset#foveatedInterpolationCallback从tileset值开始直到Cesium3DTileset#maximumScreenSpaceError。 */
            foveatedMinimumScreenSpaceErrorRelaxation?: number
            /**@default {Math.lerp} 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛。优化选择。当Cesium3DTileset#foveatedScreenSpaceError为true时使用，以控制凸出圆锥外的贴图的屏幕空间误差提高多少，插值在Cesium3DTileset#foveatedminimumscreenspaceerror和Cesium3DTileset#maximumScreenSpaceError之间。 */
            foveatedInterpolationCallback?: any
            /**@default {0.2} 优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛。优化选择。优化选择。当cesium3dtilesset#foveatedScreenSpaceError为true时使用，以控制在延迟tile开始加载前摄像机停止移动后等待多长时间(秒)。这个时间延迟阻止了在相机移动时请求屏幕边缘的贴图。将此设置为0.0将立即请求任何给定视图中的所有贴图。 */
            foveatedTimeDelay?: number
            /**@default {false} 优化选择。确定在遍历过程中是否应应用跳过详细信息的级别。是Cesium在1.5x 引入的一个优化参数，这个参数在金字塔数据加载中，可以跳过一些级别，这样整体的效率会高一些，数据占用也会小一些。但是带来的异常是：1） 加载过程中闪烁，看起来像是透过去了，数据载入完成后正常。2，有些异常的面片，这个还是因为两级LOD之间数据差异较大，导致的。当这个参数设置false，两级之间的变化更平滑，不会跳跃穿透，但是清晰的数据需要更长，而且还有个致命问题，一旦某一个tile数据无法请求到或者失败，导致一直不清晰。所以我们建议：对于网络条件好，并且数据总量较小的情况下，可以设置false，提升数据显示质量。 */
            skipLevelOfDetail?: Boolean
            /**@default {1024} 当skipLevelOfDetail为true时，跳过详细级别之前必须达到的屏幕空间错误。 */
            baseScreenSpaceError?: number
            /**@default {16} 当skipLevelOfDetail = true时，一个定义要跳过的最小屏幕空间错误的乘法器。与skipLevels一起使用，以决定加载哪些贴图。 */
            skipScreenSpaceErrorFactor?: number
            /**@default {1} 当skipLevelOfDetail是true，一个常量定义了加载tiles时要跳过的最小级别数。当它为0时，不会跳过任何级别。与skipScreenSpaceErrorFactor一起使用，以决定加载哪些贴图。 */
            skipLevels?: number
            /**@default {false} 当skipLevelOfDetail为true时，只有满足最大屏幕空间错误的tiles才会被下载。跳过因素将被忽略，并且只加载所需的块。 */
            immediatelyLoadDesiredLevelOfDetail?: Boolean
            /**@default {false} 当skipLevelOfDetail = true时，判断遍历过程中是否总是下载可见块的兄弟块。如果为true则不会在已加载完模型后，自动从中心开始超清化模型。 */
            loadSiblings?: Boolean
            /** ClippingPlaneCollection用于选择性地禁用tile集的渲染。 */
            clippingPlanes?: any
            /** 确定地形、3D贴图或两者都将被这个贴图集分类。有关限制和限制的详细信息，请参阅#classificationType。 */
            classificationType?: Cesium.ClassificationType
            /** 基于几何误差和光照构造一个PointCloudShading对象来控制点衰减的选项。 */
            pointCloudShading?: Object
            /**@default {new Cartesian2(1.0, 1.0)} 缩放来自地球、天空、大气和星星天空盒的漫反射和高光图像照明。 */
            imageBasedLightingFactor?: Cesium.Cartesian2
            /** 光的颜色当遮光模型。当undefined场景的浅色被使用代替。 */
            lightColor?: Cesium.Cartesian3
            /**@default {0.2} 太阳在天顶的亮度，单位是千坎德拉每平方米，用于这个模型的程序环境地图。 */
            luminanceAtZenith?: number
            /** 三阶球面调和系数用于基于图像的漫射色彩照明。 */
            sphericalHarmonicCoefficients?: Array<Cesium.Cartesian3 | Array<number>>
            /** 一个KTX文件的URL，该文件包含高光照明的立方体映射和复杂的高光mipmaps。 */
            specularEnvironmentMaps?: string
            /**@default {true} 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;当为false时，禁用背面剔除。 */
            backFaceCulling?: Boolean
            /** 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;作为热图着色的tile变量。所有渲染的贴图都将相对于其他指定的变量值着色。 */
            debugHeatmapTilePropertyName?: string
            /** 要在拾取过程中呈现的原语，而不是tile集合 */
            pickPrimitive?: Object
            /** 模型新的中心点位置（移动模型） */
            position?: Partial<Pick<LngLatProps, 'lng' | 'lat' | 'alt'>>
            /** 模型的旋转方向 */
            rotation?: Rotation
            /** @default {1} 缩放比例 */
            scale?: number
            /** @default {''} 轴方向 */
            axis?: string
            /** 标识模型的国内坐标系（用于自动纠偏或加偏） */
            chinaCRS?: ChinaCRSString
            /** 模型样式， 使用3D Tiles Styling language. */
            style?: Object | Cesium.Cesium3DTileStyle
            /** @default {false} 开启或设置建筑物特效样式。 */
            marsJzwStyle?: Boolean | string
            /** @default {false} 是否鼠标单击高亮显示模型构件 */
            showClickFeature?: Boolean
            /**  @default {false}是否鼠标移入高亮显示模型构件 */
            showMoveFeature?: Boolean
            /** 鼠标单击或移入高亮构件的style样式 */
            pickFeatureStyle?: { color: string, opacity: number }
        }

        class TilesetLayer extends BaseGraphicLayer {
            constructor(options: TilesetLayerOptions)
            axis: string
            height: number
            marsJzwStyle: Boolean | object
            readonly orginCenterPoint: LatLngPoint
            readonly orginCenterPosition: Cesium.Cartesian3
            readonly orginRotation: Object
            readonly position: Cesium.Cartesian3
            rotation: Object
            rotation_x: number
            rotation_y: number
            rotation_z: number
            scale: number
            readonly showClickFeature: Boolean
            readonly tileset: Cesium.Cesium3DTileset
            clampToGround(addHeight: number): void
            getPositionByOrginMatrix(position: Cesium.Cartesian3): Cesium.Cartesian3
            setOpacity(value: number): void
            updateMatrix(): Cesium.Matrix4
            updateMatrix2(): Cesium.Matrix4
        }
    }

    namespace thing {

        interface ModelPlanClipOptions {
            /**@default {uuid()} 对象的id标识 */
            id?: string | number
            /**@default {true} 对象的启用状态 */
            enabled?: Boolean
            /** 需要裁剪的对象（gltf模型） */
            graphic?: sxii.graphic.ModelEntity
            /** 裁剪区域坐标数组(按面或线裁剪) */
            positions?: Array<Array<any>> | Array<string> | Array<LatLngPoint> | Array<Cesium.Cartesian3>
            /** 当有裁剪区域挖时，底面的高度（单位米），未设置时不显示底面。 */
            height?: number
            /** 裁剪类型（按方向类型正方向单面裁剪） */
            type?: any
            /**@default {0} 裁剪的距离 */
            distance?: number
            /**@default {false} 是否外裁剪 */
            clipOutSide?: Boolean
            /**@default {0} 裁剪区域边线宽度，0时不显示 */
            edgeWidth?: number
            /**@default {Cesium.Color.WHITE} 裁剪区域边线颜色 */
            edgeColor?: Cesium.Color
        }
        class ModelPlanClip extends TilesetPlanClip {
            constructor(options: ModelPlanClipOptions)
            static Type: TilesetPlanClipType
            graphic: sxii.graphic.ModelEntity
            readonly matrix: Cesium.Matrix4
        }

        interface TilesetPlanClipType {
            /** z水平面, 切底部 */
            Z?: number
            /** z水平面，切顶部 */
            ZR?: number
            /** x垂直面,切西向 */
            X?: number
            /** x垂直面,切东向 */
            XR?: number
            /** y垂直面, 切南向 */
            Y?: number
            /** y垂直面，切北向 */
            YR?: number
        }

        interface TilesetPlanClipOptions {
            /**@default {uuid()} 可选对象的id标识 */
            id?: string | number
            /**@default {true} 可选对象的启用状态 */
            enabled?: Boolean
            /** 需要裁剪的对象（3dtiles图层） */
            layer: sxii.layer.TilesetLayer
            /** 可选裁剪区域坐标数组(按面或线裁剪) */
            positions?: Array<Array<any>> | Array<string> | Array<LatLngPoint> | Array<Cesium.Cartesian3>
            /** 可选当有裁剪区域挖时，底面的高度（单位米），未设置时不显示底面。 */
            height?: number
            /** 可选裁剪类型（按方向类型正方向单面裁剪） */
            type?: TilesetPlanClipType
            /**@default {0} 可选裁剪的距离 */
            distance?: number
            /**@default {false} 可选是否外裁剪 */
            clipOutSide?: Boolean
            /**@default {0} 可选裁剪区域边线宽度，0时不显示 */
            edgeWidth?: number
            /**@default {Cesium.Color.WHITE} 裁剪区域边线颜色 */
            edgeColor?: Cesium.Color
        }

        class TilesetPlanClip extends BaseThing {
            constructor(options: TilesetPlanClipOptions)
            static Type: TilesetPlanClipType
            clipOutSide: Boolean
            distance: number
            readonly matrix: Cesium.Matrix4
            readonly planes: Cesium.ClippingPlaneCollection
            positions: Array<Array<any>> | Array<string> | Array<LatLngPoint> | Array<Cesium.Cartesian3>
            type: TilesetPlanClipType
            clear(): void
            updateAllDistance(value: number): void
        }

    }
}