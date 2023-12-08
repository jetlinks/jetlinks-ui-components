/** 默认地图基础设置 */
export const defaultBaseMapOptions: sxii.MapOptions = {
    scene: {
        center: { lng: 109.986292, lat: 27.534673, alt: 50000, heading: 0, pitch: 87 },
        showMoon: false,
        showSun: false,
        showSkyBox: false,
        fog: false,
        fxaa: false,
        cameraController: {
            enableCollisionDetection: false
        }
    },

    basemaps: [
        {
            name: '高德电子',
            icon: 'img/basemaps/gaode_vec.png',
            type: 'gaode',
            layer: 'vec',
            show: true,
        }
    ]
}