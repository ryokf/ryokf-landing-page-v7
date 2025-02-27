import { useEffect } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Developer = ({ ...props }) => {
    const { scene } = useGLTF('/models/animations/developer.glb');
    const { animations } = useFBX('/models/animations/salute.fbx');

    // Buat AnimationMixer untuk model
    const mixer = new THREE.AnimationMixer(scene);

    const player = useAnimations(animations, scene);

    useEffect(() => {
        const animName = Object.keys(player.actions)[0]; // Ambil nama animasi pertama
        if (player.actions[animName]) {
            player.actions[animName].play();
        }

        return () => mixer.stopAllAction(); // Hentikan animasi saat komponen unmount
    }, []);

    return <primitive object={scene} {...props} />;
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;