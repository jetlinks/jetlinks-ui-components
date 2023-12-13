import { withInstall } from '../util/type';
import { Map, Marker, PointEntity, PolygonEntity, GraphicLayer, InfoWindow } from './3DMap';

export const JLMap = withInstall(Map, 'JMap');
export const JMarker = withInstall(Marker, 'JMarker');
export const JPoint = withInstall(PointEntity, 'JPoint');
export const JPolygon = withInstall(PolygonEntity, 'JPolygon');
export const JGraphicLayer = withInstall(GraphicLayer, 'JGraphicLayer');
export const JInfoWindow = withInstall(InfoWindow, 'JInfoWindow');

export default JLMap;
