import * as THREE from 'three';
import { cameraPerspectiva } from "../camera";
import { parede, piso } from '../objects';


const renderer = new THREE.WebGLRenderer();

export const animarCena = (cena: THREE.Scene) => {
    requestAnimationFrame(()=>animarCena(cena));
    parede.rotation.x += 0.01;
	parede.rotation.y += 0.01;
	renderer.render( cena, cameraPerspectiva );
}

export const montarCena = () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const cena = new THREE.Scene();
    cameraPerspectiva.position.z = 5;
    cena.add( parede );
    cena.add( piso );
    animarCena(cena);
}

