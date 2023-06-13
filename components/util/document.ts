export const updateStyle = (dom: HTMLElement, style: Partial<CSSStyleDeclaration>) => {
    if (dom) {
        for (const key in style) {
            dom.style[key] = style[key]
        }
    }
}