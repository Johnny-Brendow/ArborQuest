import * as THREE from 'three';
import { geometriaParede, geometriaPiso } from './geometries';
import { textura } from './textures';

export const parede = new THREE.Mesh( geometriaParede.rotateY(170), textura );
export const piso = new THREE.Mesh( geometriaPiso.rotateY(170).rotateX(170), textura );