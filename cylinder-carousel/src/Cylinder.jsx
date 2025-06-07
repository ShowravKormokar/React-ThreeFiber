import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import cylinderImg from './assets/cylinder.png';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Scene = () => {

    let tex = useTexture(cylinderImg);
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })

    return (
        <group rotation={[0.1, 2, 0]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 2, 60, 60, true]} />
                <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene