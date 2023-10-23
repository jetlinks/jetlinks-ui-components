import { updateStyle } from '../util/document';

const modalName = 'popconfirm-modal-mask';
const maskActiveKeys = [];

const bodyHasScrollbar = () => {
    return document.body.scrollHeight > document.body.clientHeight;
};

const bodyHidden = () => {
    const hasScrollbar = bodyHasScrollbar();
    if (hasScrollbar) {
        updateStyle(document.body, {
            overflow: 'hidden',
            width: 'calc(100% - 17px)',
        });
    }
};

export const getMaskNode = (id: string): HTMLDivElement | null => {
    const maskNodes = document.querySelectorAll(`.${modalName}`);
    let maskNode = null;
    maskNodes.forEach((node) => {
        if ((node as HTMLDivElement).dataset.mask === id) {
            maskNode = node;
            return;
        }
    });
    return maskNode;
};

const getLastNode = (id: string) => {
    const maskNodes = document.querySelectorAll(`.${modalName}`);
    let indexOf = 0;
    maskNodes.forEach((node, index) => {
        if ((node as HTMLDivElement).dataset.mask === id) {
            indexOf = index - 1;
            return;
        }
    });
    if (indexOf >= 0) {
        return maskNodes[indexOf];
    }
    return null;
};
const showMask = (id: string) => {
    const maskNodes = document.querySelectorAll(`.${modalName}`);
    maskNodes.forEach((node) => {
        if ((node as HTMLDivElement).dataset.mask === id) {
            node.classList.remove('hide');
        } else {
            node.classList.add('hide');
        }
    });
};

export const hideMask = (id: string, parentMaskId: string) => {
    const maskNode = getMaskNode(id);
    if (maskNode) {
        maskNode.classList.add('hide');
    }
    // 获取上一个活跃的popconfirm
    const lastNode = getMaskNode(parentMaskId);
    if (lastNode) {
        lastNode.classList.remove('hide');
    } else {
        document.body.removeAttribute('style');
    }
};
export const createMaskNode = (id: string) => {
    let maskNode = getMaskNode(id);
    if (!maskNode) {
        const modalWarpNode = document.querySelector(`.modal-${id}`);
        maskNode = document.createElement('div') as HTMLDivElement;
        maskNode.classList.add(modalName);
        maskNode.dataset.mask = id;

        modalWarpNode.insertAdjacentElement('beforebegin', maskNode);
        maskActiveKeys.push(id);
    }
    showMask(id);
    bodyHidden();
};
