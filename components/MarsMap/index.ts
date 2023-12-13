import { withInstall } from '../util/type';
import { Map, Marker, PointEntity } from './3DMap';

export const JLMap = withInstall(Map, 'JMap');
export const JMarker = withInstall(Marker, 'JMarker');
export const JPoint = withInstall(PointEntity, 'JPoint');

export default JLMap;
