import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import PropTypes from 'prop-types';

const HeroCamera = ({ children, isMobile, isTablet }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);

        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
        }
    })

    return (
        <group ref={groupRef} scale={isTablet ? 0.9 : 1.2}>{children}</group>
    )
}
HeroCamera.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    children: PropTypes.node
};


export default HeroCamera