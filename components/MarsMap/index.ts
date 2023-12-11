import { withInstall } from '../util/type';
import { Map, Marker } from './3DMap';

export const JLMap = withInstall(Map, 'JMap');
export const JMarker = withInstall(Marker, 'JMarker');

export default JLMap;
