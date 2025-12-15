import { useGLTF, useTexture } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

const GamingRoom = (props) => {
    const { nodes, scene } = useGLTF("/models/gaming-room.glb");

    const monitorTexture = useTexture("/textures/desk/code_screen2.png");

    const monitorScreenMaterial = new MeshBasicMaterial({
        metalness: 0.9,
        map: monitorTexture

    });


    // Ganti material node tertentu
    if (nodes.MY_SCREEN_MY_SCREEN_0) {
        nodes.MY_SCREEN_MY_SCREEN_0.material = monitorScreenMaterial;
    }

    return (
        <group {...props}>
            <primitive object={scene} />
        </group>
    );
};

export default GamingRoom;