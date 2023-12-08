import React, { PureComponent } from 'react'
import DivGraphic, { DivGraphicProps } from './DivLayer/DivGraphic';
import DivLayer from './DivLayer';
import classnames from 'classnames';
import './infoWindow.css'

export interface InfoWindowProps extends Omit<DivGraphicProps, 'style'> {
    /** 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容） */
    isCustom?: boolean

}

export default class InfoWindow extends PureComponent<InfoWindowProps> {

    render() {
        const { children, className, ...extra } = this.props

        return <DivLayer name='infoWindow-layer'>
            <DivGraphic
                style={{
                    horizontalOrigin: 'CENTER',
                    verticalOrigin: 'BOTTOM',
                    distanceDisplayCondition: false,
                }}
                {...extra}
            >
                <div className={classnames('JetLinkss-Map-InfoWindow', className, { 'map-infoWindow': !this.props.isCustom })} >
                    <div className='infoWindow-content'>
                        <div className='infoWindow-children'>
                            {
                                children
                            }
                        </div>
                    </div>
                </div>
            </DivGraphic>
        </DivLayer>
    }
}
