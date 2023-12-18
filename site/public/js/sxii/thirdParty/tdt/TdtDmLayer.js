
//天地图 三维地名服务
class TdtDmLayer extends sxii.layer.BaseLayer {
  get layer() {
    return this.wtfs
  }


  /**
   * 创建图层对象的方法
   */
  _mountedHook() {
    // 服务域名
    var tdtUrl = 'https://t{s}.tianditu.gov.cn/';

    // 服务负载子域
    var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];

    var viewer = this._map.viewer

    if (!Cesium.GeoWTFS) {
      console.error("请确认正确引入天地图官方提供的cesiumTdt.js文件，并确认无冲突！")
      return
    }

    // 叠加三维地名服务
    var wtfs = new Cesium.GeoWTFS({
      viewer,
      subdomains: subdomains,
      metadata: {
        boundBox: {
          minX: -180,
          minY: -90,
          maxX: 180,
          maxY: 90
        },
        minLevel: 1,
        maxLevel: 20
      },
      aotuCollide: true, //是否开启避让
      collisionPadding: [5, 10, 8, 5], //开启避让时，标注碰撞增加内边距，上、右、下、左
      serverFirstStyle: true, //服务端样式优先
      labelGraphics: {
        font: "28px sans-serif",
        fontSize: 28,
        fillColor: Cesium.Color.WHITE,
        scale: 0.5,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 5,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        showBackground: false,
        backgroundColor: Cesium.Color.RED,
        backgroundPadding: new Cesium.Cartesian2(10, 10),
        horizontalOrigin: Cesium.HorizontalOrigin.MIDDLE,
        verticalOrigin: Cesium.VerticalOrigin.TOP,
        eyeOffset: Cesium.Cartesian3.ZERO,
        pixelOffset: new Cesium.Cartesian2(0, 8)
      },
      billboardGraphics: {
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
        eyeOffset: Cesium.Cartesian3.ZERO,
        pixelOffset: Cesium.Cartesian2.ZERO,
        alignedAxis: Cesium.Cartesian3.ZERO,
        color: Cesium.Color.WHITE,
        rotation: 0,
        scale: 1,
        width: 18,
        height: 18
      }
    });

    var token = this.options.key || sxii.Token.tianditu

    //三维地名服务，使用wtfs服务
    wtfs.getTileUrl = function () {
      return tdtUrl + 'mapservice/GetTiles?lxys={z},{x},{y}&tk=' + token;
    }

    wtfs.initTDT([{ "x": 6, "y": 1, "level": 2, "boundBox": { "minX": 90, "minY": 0, "maxX": 135, "maxY": 45 } }, { "x": 7, "y": 1, "level": 2, "boundBox": { "minX": 135, "minY": 0, "maxX": 180, "maxY": 45 } }, { "x": 6, "y": 0, "level": 2, "boundBox": { "minX": 90, "minY": 45, "maxX": 135, "maxY": 90 } }, { "x": 7, "y": 0, "level": 2, "boundBox": { "minX": 135, "minY": 45, "maxX": 180, "maxY": 90 } }, { "x": 5, "y": 1, "level": 2, "boundBox": { "minX": 45, "minY": 0, "maxX": 90, "maxY": 45 } }, { "x": 4, "y": 1, "level": 2, "boundBox": { "minX": 0, "minY": 0, "maxX": 45, "maxY": 45 } }, { "x": 5, "y": 0, "level": 2, "boundBox": { "minX": 45, "minY": 45, "maxX": 90, "maxY": 90 } }, { "x": 4, "y": 0, "level": 2, "boundBox": { "minX": 0, "minY": 45, "maxX": 45, "maxY": 90 } }, { "x": 6, "y": 2, "level": 2, "boundBox": { "minX": 90, "minY": -45, "maxX": 135, "maxY": 0 } }, { "x": 6, "y": 3, "level": 2, "boundBox": { "minX": 90, "minY": -90, "maxX": 135, "maxY": -45 } }, { "x": 7, "y": 2, "level": 2, "boundBox": { "minX": 135, "minY": -45, "maxX": 180, "maxY": 0 } }, { "x": 5, "y": 2, "level": 2, "boundBox": { "minX": 45, "minY": -45, "maxX": 90, "maxY": 0 } }, { "x": 4, "y": 2, "level": 2, "boundBox": { "minX": 0, "minY": -45, "maxX": 45, "maxY": 0 } }, { "x": 3, "y": 1, "level": 2, "boundBox": { "minX": -45, "minY": 0, "maxX": 0, "maxY": 45 } }, { "x": 3, "y": 0, "level": 2, "boundBox": { "minX": -45, "minY": 45, "maxX": 0, "maxY": 90 } }, { "x": 2, "y": 0, "level": 2, "boundBox": { "minX": -90, "minY": 45, "maxX": -45, "maxY": 90 } }, { "x": 0, "y": 1, "level": 2, "boundBox": { "minX": -180, "minY": 0, "maxX": -135, "maxY": 45 } }, { "x": 1, "y": 0, "level": 2, "boundBox": { "minX": -135, "minY": 45, "maxX": -90, "maxY": 90 } }, { "x": 0, "y": 0, "level": 2, "boundBox": { "minX": -180, "minY": 45, "maxX": -135, "maxY": 90 } }]);


    this.wtfs = wtfs
  }

  /**
   * 添加时
   */
  _addedHook() {

  }

  /**
   * 移除时
   */
  _removedHook() {

  }

  destory() {
    this.wtfs.destroy()
    super.destory()
  }

}
sxii.layer.TdtDmLayer = TdtDmLayer

//注册下
sxii.layer.register("tdt_dm", TdtDmLayer);

