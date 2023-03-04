/**
 * 公共类型数据
 */
import type { TableProps, ColumnProps } from 'ant-design-vue/lib/table';
import type { TooltipProps } from 'ant-design-vue/lib/tooltip';
import type { PopconfirmProps } from 'ant-design-vue/lib/popconfirm';
import { CSSProperties } from 'vue';

export enum TypeEnum {
    TREE = 'TREE',
    PAGE = 'PAGE',
}

export enum ModelEnum {
    TABLE = 'TABLE',
    CARD = 'CARD',
}

export type ModelType = keyof typeof ModelEnum;

export type RequestData =
    | {
          code: string;
          result: {
              data: Record<string, any>[] | undefined;
              pageIndex: number;
              pageSize: number;
              total: number;
          };
          status: number;
      }
    | Record<string, any>;

export type ActionsType = {
    key: string;
    text?: string;
    disabled?: boolean;
    permission?: boolean;
    onClick?: (data: any) => void;
    style?: CSSProperties;
    tooltip?: TooltipProps;
    popConfirm?: PopconfirmProps;
    icon?: string;
};

export interface JColumnProps extends ColumnProps {
    scopedSlots?: boolean; // 是否为插槽 true: 是 false: 否
    hideInTable?: boolean; //
}

export interface CommonProps extends TableProps {
    cardBodyClass?: string;
    columns: JColumnProps[];
    model?: ModelType; // 显示table还是card
    noPagination?: boolean;
    rowSelection?: TableProps['rowSelection'];
    // cardProps?: Record<string, any>;
    dataSource?: Record<string, any>[];
    gridColumn?: number;
    /**
     * 用于不同分辨率
     * gridColumns[0] 1366 ~ 1440 分辨率；
     * gridColumns[1] 1440 ~  1600 分辨率；
     * gridColumns[2] > 1600 分辨率；
     */
    gridColumns?: number[];
    alertRender?: boolean; // 选择提示框
    type?: keyof typeof TypeEnum; // 判断表格类型：SCROLL：滑动表格； TREE：树表格； PAGE：分页表格
    bodyStyle?: Record<string, any>;
}
