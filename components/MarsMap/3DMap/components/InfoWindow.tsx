import DivGraphic, { DivGraphicProps } from './DivLayer/DivGraphic';
import DivLayer from './DivLayer';
import './infoWindow.css';
import { defineComponent } from 'vue';

export interface InfoWindowProps extends Omit<DivGraphicProps, 'style'> {
    /** 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容） */
    isCustom?: boolean;
}
const Props = {
    /**
     * 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加
     * （默认为false，即在系统默认的信息窗体外框中显示content内容）
     * */
    isCustom: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: '',
    },
};
export default defineComponent({
    name: 'InfoWindow',
    inheritAttrs: false,
    props: Props,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        return () => {
            const { className, ...extra } = props;

            return (
                <DivLayer name="infoWindow-layer">
                    <DivGraphic
                        style={{
                            horizontalOrigin: 'CENTER',
                            verticalOrigin: 'BOTTOM',
                            distanceDisplayCondition: false,
                        }}
                        {...extra}
                    >
                        <div
                            class={[
                                'JetLinkss-Map-InfoWindow',
                                className,
                                { 'map-infoWindow': !props.isCustom },
                            ]}
                        >
                            <div class="infoWindow-content">
                                <div class="infoWindow-children">
                                    {slots.default?.()}
                                </div>
                            </div>
                        </div>
                    </DivGraphic>
                </DivLayer>
            );
        };
    },
});
