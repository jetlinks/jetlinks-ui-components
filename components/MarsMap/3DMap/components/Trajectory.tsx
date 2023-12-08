import MapContext from '../MapContext'
import React, { PureComponent } from 'react'
import { renderToString } from 'react-dom/server'
import { RoamLineEvent, RoamLineEventProps, UnRegisterEvents, UpdatePropsAndRegisterEvents } from '../utils'

export enum TrajectoryStatus {
    /**  开始*/
    'start' = 'start',
    /** 停止 */
    'stop' = 'stop',
    /** 暂停 */
    'pause' = 'pause',
    /** 继续 */
    'proceed' = 'proceed',
}

type TrajectoryStatusType = keyof typeof TrajectoryStatus

export interface TrajectoryProps extends Omit<sxii.graphic.RoamLineOptions, 'speed'>, RoamLineEventProps {
    /** 车辆速度 */
    speed: number
    /** 播放的倍率 */
    multiplier?: number
    /**
     * 是否开启InfoWindow 默认false
     * @default {false} 
     * */
    openInfoWindow?: boolean
    infoWindowContent?: string | React.ReactNode
    infoWindowClassName?: string
    /**
     * 状态控制
     */
    status?: TrajectoryStatusType
    onLoad?: (entity: sxii.graphic.RoamLine) => void
    onUnmount?: (entity: sxii.graphic.RoamLine) => void
}

const defaultTrajectoryLayer = 'JetLinks-3DMap-Trajectory-Layer'

const updateMap = {
    status(instance: sxii.graphic.RoamLine, status: TrajectoryStatusType) {
        if (status === TrajectoryStatus.start) {
            instance.start()
        } else if (status === TrajectoryStatus.stop) {
            instance.stop()
        } else if (status === TrajectoryStatus.pause) {
            instance.pause()
        } else {
            instance.proceed()
        }
    }
}

export default class Trajectory extends PureComponent<TrajectoryProps> {

    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.GraphicLayer | undefined
    entity: sxii.graphic.RoamLine | undefined
    defaultOptions: Omit<sxii.graphic.RoamLineOptions, 'points' | 'style' | 'position' | 'positions'> = {
        speed: 120,
        path: {
            color: '#ffff00',
            width: 2,
            show: true
        },
        camera: {
            type: 'gs',
            pitch: -30,
            radius: 500
        },
        interpolation: false,
        clockLoop: false
    }

    componentDidMount() {
        this.layer = this.getLayer() || this.createLayer()

        this.createTrajectory()
    }

    componentDidUpdate(prevProps: TrajectoryProps) {
        if (this.entity) {

            this.updateContent()


            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: RoamLineEvent,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.entity
            })

            if (this.props.multiplier !== undefined && prevProps.multiplier != this.props.multiplier) {
                this.map.clock.multiplier = this.props.multiplier
            }
        }
    }

    componentWillUnmount() {
        if (this.entity) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.entity)
            }
            UnRegisterEvents(this.props, this.entity, RoamLineEvent)

            this.entity.destroy(true)

            if (this.layer && !this.layer.getGraphics().length) {
                this.layer.destroy(true)
            }
        }
    }

    createTrajectory() {
        const { openInfoWindow, infoWindowClassName, onLoad, onChange, onUnmount, ...extra } = this.props

        this.entity = new sxii.graphic.RoamLine({ ...this.defaultOptions, ...extra })

        if (openInfoWindow) {
            this.createInfoWindowContent()
        }
        if (this.layer) {
            this.entity.addTo(this.layer)
            console.log(this.layer.getGraphics());
        }

        this.entity.clampToGround(() => {

            if (onLoad) {
                onLoad(this.entity!)
            }
            this.entity?.start()
        })

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: RoamLineEvent,
            prevProps: {},
            nextProps: this.props,
            instance: this.entity
        })
    }

    createInfoWindowContent() {
        const { infoWindowClassName, infoWindowContent } = this.props
        const _infoWindowContent = typeof infoWindowContent === 'string' ? infoWindowContent : renderToString(<>{infoWindowContent}</>)
        if (this.entity) {
            this.entity.bindPopup(
                `<div class='${infoWindowClassName}'>${_infoWindowContent}</div>`,
                {
                    anchor: [0, -20], //左右、上下的偏移像素值。
                })
        }

    }

    getLayer(): sxii.layer.GraphicLayer {
        return this.map.getLayer({ id: defaultTrajectoryLayer }) as sxii.layer.GraphicLayer
    }

    createLayer() {
        let layer = new sxii.layer.GraphicLayer({
            name: 'trajectory',
            id: defaultTrajectoryLayer
        })

        layer.addTo(this.map)

        return layer
    }

    updateContent() {
        this.createInfoWindowContent()
    }

    render() {
        return null
    }
}
