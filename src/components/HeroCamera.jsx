import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import PropTypes from 'prop-types';

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);

        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y /5, -state.pointer.x / 3, 0], 0.25, delta);
        }
    })

    return (
        <group ref={groupRef} scale={!isMobile ? 1.2 : 1}>{children}</group>
    )
}
HeroCamera.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    children: PropTypes.node
};


export default HeroCamera