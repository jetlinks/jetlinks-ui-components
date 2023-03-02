import { withInstall } from "../util/type";
import Anchor from 'ant-design-vue/lib/anchor/Anchor';
import AnchorLink from 'ant-design-vue/lib/anchor/AnchorLink';

export type { AnchorProps, AnchorLinkProps } from 'ant-design-vue/lib/anchor/index';

export const JAnchor = withInstall(Anchor, 'JAnchor');
export const JAnchorLink = withInstall(AnchorLink, 'JAnchorLink');

export default JAnchor;