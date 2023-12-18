define(["exports","./Transforms-5295b227","./Cartesian2-5b63e672","./Check-64f87f7d","./when-ca391574","./EllipsoidTangentPlane-0fb66b96","./Math-b53708b3","./Plane-99b2becd"],function(a,y,O,t,P,w,b,N){"use strict";function A(a,t){this.center=O.Cartesian3.clone(P.defaultValue(a,O.Cartesian3.ZERO)),this.halfAxes=y.Matrix3.clone(P.defaultValue(t,y.Matrix3.ZERO))}A.packedLength=O.Cartesian3.packedLength+y.Matrix3.packedLength,A.pack=function(a,t,e){return e=P.defaultValue(e,0),O.Cartesian3.pack(a.center,t,e),y.Matrix3.pack(a.halfAxes,t,e+O.Cartesian3.packedLength),t},A.unpack=function(a,t,e){return t=P.defaultValue(t,0),P.defined(e)||(e=new A),O.Cartesian3.unpack(a,t,e.center),y.Matrix3.unpack(a,t+O.Cartesian3.packedLength,e.halfAxes),e};var T=new O.Cartesian3,R=new O.Cartesian3,I=new O.Cartesian3,E=new O.Cartesian3,L=new O.Cartesian3,z=new O.Cartesian3,S=new y.Matrix3,U={unitary:new y.Matrix3,diagonal:new y.Matrix3};A.fromPoints=function(a,t){if(P.defined(t)||(t=new A),!P.defined(a)||0===a.length)return t.halfAxes=y.Matrix3.ZERO,t.center=O.Cartesian3.ZERO,t;for(var e=a.length,n=O.Cartesian3.clone(a[0],T),r=1;r<e;r++)O.Cartesian3.add(n,a[r],n);var i=1/e;O.Cartesian3.multiplyByScalar(n,i,n);var s,o=0,C=0,c=0,u=0,l=0,d=0;for(r=0;r<e;r++)o+=(s=O.Cartesian3.subtract(a[r],n,R)).x*s.x,C+=s.x*s.y,c+=s.x*s.z,u+=s.y*s.y,l+=s.y*s.z,d+=s.z*s.z;o*=i,C*=i,c*=i,u*=i,l*=i,d*=i;i=S;i[0]=o,i[1]=C,i[2]=c,i[3]=C,i[4]=u,i[5]=l,i[6]=c,i[7]=l,i[8]=d;var i=y.Matrix3.computeEigenDecomposition(i,U),i=y.Matrix3.clone(i.unitary,t.halfAxes),h=y.Matrix3.getColumn(i,0,E),x=y.Matrix3.getColumn(i,1,L),M=y.Matrix3.getColumn(i,2,z),m=-Number.MAX_VALUE,f=-Number.MAX_VALUE,p=-Number.MAX_VALUE,g=Number.MAX_VALUE,w=Number.MAX_VALUE,b=Number.MAX_VALUE;for(r=0;r<e;r++)s=a[r],m=Math.max(O.Cartesian3.dot(h,s),m),f=Math.max(O.Cartesian3.dot(x,s),f),p=Math.max(O.Cartesian3.dot(M,s),p),g=Math.min(O.Cartesian3.dot(h,s),g),w=Math.min(O.Cartesian3.dot(x,s),w),b=Math.min(O.Cartesian3.dot(M,s),b);h=O.Cartesian3.multiplyByScalar(h,.5*(g+m),h),x=O.Cartesian3.multiplyByScalar(x,.5*(w+f),x),M=O.Cartesian3.multiplyByScalar(M,.5*(b+p),M),i=O.Cartesian3.add(h,x,t.center);O.Cartesian3.add(i,M,i);i=I;return i.x=m-g,i.y=f-w,i.z=p-b,O.Cartesian3.multiplyByScalar(i,.5,i),y.Matrix3.multiplyByScale(t.halfAxes,i,t.halfAxes),t};var d=new O.Cartesian3,h=new O.Cartesian3;function V(a,t,e,n,r,i,s,o,C,c,u){var l=(u=!P.defined(u)?new A:u).halfAxes;y.Matrix3.setColumn(l,0,t,l),y.Matrix3.setColumn(l,1,e,l),y.Matrix3.setColumn(l,2,n,l),(e=d).x=(r+i)/2,e.y=(s+o)/2,e.z=(C+c)/2;n=h;n.x=(i-r)/2,n.y=(o-s)/2,n.z=(c-C)/2;C=u.center,e=y.Matrix3.multiplyByVector(l,e,e);return O.Cartesian3.add(a,e,C),y.Matrix3.multiplyByScale(l,n,l),u}var v=new O.Cartographic,B=new O.Cartesian3,_=new O.Cartographic,k=new O.Cartographic,W=new O.Cartographic,D=new O.Cartographic,q=new O.Cartographic,X=new O.Cartesian3,j=new O.Cartesian3,Z=new O.Cartesian3,G=new O.Cartesian3,F=new O.Cartesian3,Y=new O.Cartesian2,H=new O.Cartesian2,J=new O.Cartesian2,K=new O.Cartesian2,Q=new O.Cartesian2,$=new O.Cartesian3,aa=new O.Cartesian3,ta=new O.Cartesian3,ea=new O.Cartesian3,na=new O.Cartesian2,ra=new O.Cartesian3,ia=new O.Cartesian3,sa=new O.Cartesian3,oa=new N.Plane(O.Cartesian3.UNIT_X,0);A.fromRectangle=function(a,t,e,n,r){if(t=P.defaultValue(t,0),e=P.defaultValue(e,0),n=P.defaultValue(n,O.Ellipsoid.WGS84),a.width<=b.CesiumMath.PI){var i=O.Rectangle.center(a,v),s=n.cartographicToCartesian(i,B),o=new w.EllipsoidTangentPlane(s,n),C=o.plane,c=i.longitude,u=a.south<0&&0<a.north?0:i.latitude,l=O.Cartographic.fromRadians(c,a.north,e,_),d=O.Cartographic.fromRadians(a.west,a.north,e,k),h=O.Cartographic.fromRadians(a.west,u,e,W),x=O.Cartographic.fromRadians(a.west,a.south,e,D),M=O.Cartographic.fromRadians(c,a.south,e,q),m=n.cartographicToCartesian(l,X),f=n.cartographicToCartesian(d,j),p=n.cartographicToCartesian(h,Z),g=n.cartographicToCartesian(x,G),s=n.cartographicToCartesian(M,F),i=o.projectPointToNearestOnPlane(m,Y),u=o.projectPointToNearestOnPlane(f,H),c=o.projectPointToNearestOnPlane(p,J),l=o.projectPointToNearestOnPlane(g,K),h=o.projectPointToNearestOnPlane(s,Q),m=-(M=Math.min(u.x,c.x,l.x)),p=Math.max(u.y,i.y),s=Math.min(l.y,h.y);return d.height=x.height=t,f=n.cartographicToCartesian(d,j),g=n.cartographicToCartesian(x,G),c=Math.min(N.Plane.getPointDistance(C,f),N.Plane.getPointDistance(C,g)),u=e,V(o.origin,o.xAxis,o.yAxis,o.zAxis,M,m,s,p,c,u,r)}i=0<a.south,l=a.north<0,h=i?a.south:l?a.north:0,d=O.Rectangle.center(a,v).longitude,x=O.Cartesian3.fromRadians(d,h,e,n,$);x.z=0;f=Math.abs(x.x)<b.CesiumMath.EPSILON10&&Math.abs(x.y)<b.CesiumMath.EPSILON10?O.Cartesian3.UNIT_X:O.Cartesian3.normalize(x,aa),g=O.Cartesian3.UNIT_Z,o=O.Cartesian3.cross(f,g,ta);C=N.Plane.fromPointNormal(x,f,oa);d=O.Cartesian3.fromRadians(d+b.CesiumMath.PI_OVER_TWO,h,e,n,ea);M=-(m=O.Cartesian3.dot(N.Plane.projectPointOntoPlane(C,d,na),o)),p=O.Cartesian3.fromRadians(0,a.north,l?t:e,n,ra).z,s=O.Cartesian3.fromRadians(0,a.south,i?t:e,n,ia).z;n=O.Cartesian3.fromRadians(a.east,h,e,n,sa);return V(x,o,g,f,M,m,s,p,c=N.Plane.getPointDistance(C,n),u=0,r)},A.clone=function(a,t){if(P.defined(a))return P.defined(t)?(O.Cartesian3.clone(a.center,t.center),y.Matrix3.clone(a.halfAxes,t.halfAxes),t):new A(a.center,a.halfAxes)},A.intersectPlane=function(a,t){var e=a.center,n=t.normal,r=a.halfAxes,i=n.x,s=n.y,a=n.z,r=Math.abs(i*r[y.Matrix3.COLUMN0ROW0]+s*r[y.Matrix3.COLUMN0ROW1]+a*r[y.Matrix3.COLUMN0ROW2])+Math.abs(i*r[y.Matrix3.COLUMN1ROW0]+s*r[y.Matrix3.COLUMN1ROW1]+a*r[y.Matrix3.COLUMN1ROW2])+Math.abs(i*r[y.Matrix3.COLUMN2ROW0]+s*r[y.Matrix3.COLUMN2ROW1]+a*r[y.Matrix3.COLUMN2ROW2]),t=O.Cartesian3.dot(n,e)+t.distance;return t<=-r?y.Intersect.OUTSIDE:r<=t?y.Intersect.INSIDE:y.Intersect.INTERSECTING};var x=new O.Cartesian3,M=new O.Cartesian3,m=new O.Cartesian3,c=new O.Cartesian3;A.distanceSquaredTo=function(a,t){var e=O.Cartesian3.subtract(t,a.center,d),n=a.halfAxes,r=y.Matrix3.getColumn(n,0,x),i=y.Matrix3.getColumn(n,1,M),s=y.Matrix3.getColumn(n,2,m),o=O.Cartesian3.magnitude(r),t=O.Cartesian3.magnitude(i),a=O.Cartesian3.magnitude(s);O.Cartesian3.normalize(r,r),O.Cartesian3.normalize(i,i),O.Cartesian3.normalize(s,s);n=c;n.x=O.Cartesian3.dot(e,r),n.y=O.Cartesian3.dot(e,i),n.z=O.Cartesian3.dot(e,s);var C,s=0;return n.x<-o?s+=(C=n.x+o)*C:n.x>o&&(s+=(C=n.x-o)*C),n.y<-t?s+=(C=n.y+t)*C:n.y>t&&(s+=(C=n.y-t)*C),n.z<-a?s+=(C=n.z+a)*C:n.z>a&&(s+=(C=n.z-a)*C),s};var f=new O.Cartesian3,p=new O.Cartesian3;A.computePlaneDistances=function(a,t,e,n){P.defined(n)||(n=new y.Interval);var r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=a.center,o=a.halfAxes,C=y.Matrix3.getColumn(o,0,x),c=y.Matrix3.getColumn(o,1,M),u=y.Matrix3.getColumn(o,2,m),l=O.Cartesian3.add(C,c,f);O.Cartesian3.add(l,u,l),O.Cartesian3.add(l,s,l);a=O.Cartesian3.subtract(l,t,p),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i);return O.Cartesian3.add(s,C,l),O.Cartesian3.add(l,c,l),O.Cartesian3.subtract(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.add(s,C,l),O.Cartesian3.subtract(l,c,l),O.Cartesian3.add(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.add(s,C,l),O.Cartesian3.subtract(l,c,l),O.Cartesian3.subtract(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,l),O.Cartesian3.add(l,c,l),O.Cartesian3.add(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,l),O.Cartesian3.add(l,c,l),O.Cartesian3.subtract(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,l),O.Cartesian3.subtract(l,c,l),O.Cartesian3.add(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,l),O.Cartesian3.subtract(l,c,l),O.Cartesian3.subtract(l,u,l),O.Cartesian3.subtract(l,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),n.start=r,n.stop=i,n};var e=new y.BoundingSphere;A.isOccluded=function(a,t){a=y.BoundingSphere.fromOrientedBoundingBox(a,e);return!t.isBoundingSphereVisible(a)},A.prototype.intersectPlane=function(a){return A.intersectPlane(this,a)},A.prototype.distanceSquaredTo=function(a){return A.distanceSquaredTo(this,a)},A.prototype.computePlaneDistances=function(a,t,e){return A.computePlaneDistances(this,a,t,e)},A.prototype.isOccluded=function(a){return A.isOccluded(this,a)},A.equals=function(a,t){return a===t||P.defined(a)&&P.defined(t)&&O.Cartesian3.equals(a.center,t.center)&&y.Matrix3.equals(a.halfAxes,t.halfAxes)},A.prototype.clone=function(a){return A.clone(this,a)},A.prototype.equals=function(a){return A.equals(this,a)},a.OrientedBoundingBox=A});
