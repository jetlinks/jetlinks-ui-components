import type { InjectionKey, Ref, ExtractPropTypes } from 'vue';

export const componentSizes = ['', 'default', 'small', 'large'] as const;

export type ComponentSizeType = (typeof componentSizes)[number];

const useSizeProp = {
    type: String,
    values: componentSizes,
    required: false,
};

export const configProviderProps = {
    a11y: {
        type: Boolean,
        default: true,
    },

    locale: {
        type: Object,
    },
    size: useSizeProp,
    button: {
        type: Object,
    },
    experimentalFeatures: {
        type: Object,
    },
    keyboardNavigation: {
        type: Boolean,
        default: true,
    },
    message: {
        type: Object,
    },
    zIndex: Number,
    namespace: {
        type: String,
        default: 'el',
    },
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

export interface ScrollbarContext {
    scrollbarElement: HTMLDivElement;
    wrapElement: HTMLDivElement;
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol(
    'scrollbarContextKey',
);
export type ConfigProviderContext = Partial<ConfigProviderProps>;

export const configProviderContextKey: InjectionKey<
    Ref<ConfigProviderContext>
> = Symbol();
