import { withInstall } from '../util/type';
import MarsMap from './3DMap/MarsMap';
import Marker from './3DMap/components/Marker'

export const JLMarsMap = withInstall(MarsMap, 'JMarsMap');
export const JMarker = withInstall(Marker, 'JMarker');

export default JLMarsMap;
