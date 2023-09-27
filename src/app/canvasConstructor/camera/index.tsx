import * as THREE from 'three';
const proporcaoTela = window.innerWidth / window.innerHeight;
export const cameraPerspectiva =  new THREE.PerspectiveCamera( 50, proporcaoTela, 0.01, 30000  );
export const cameraOrtografica = new THREE.OrthographicCamera(- 600 * proporcaoTela, 600 * proporcaoTela, 600, - 600, 0.01, 30000);
