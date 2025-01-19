import { useRef } from 'react'
import { PropTypes } from 'prop-types';
import { useGLTF, useTexture} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const LaptopHero = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/laptop.glb')
    const txt = useTexture(props.texture)

    useFrame(() => {
        group.current.rotation.y += 0.01
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.1} position={[0, 1, 0]}>
                <group
                    position={[-0.223, -5.477, 1.396]}
                    rotation={[Math.PI, 0, 0]}
                    scale={[9.059, 7.172, 9.059]}>
                    <group
                        position={[0.001, -1.421, 1.468]}
                        rotation={[1.386, 0, 0]}
                        scale={[11.038, 11.143, 13.86]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_Material002_0.geometry}
                            material={materials['Material.002']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_Material003_0.geometry}
                            material={materials['Material.003']}
                        >
                            <meshBasicMaterial map={txt} />
                        </mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_Material004_0.geometry}
                            material={materials['Material.004']}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_Material002_0.geometry}
                        material={materials['Material.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_Material002_0.geometry}
                        material={materials['Material.002']}
                        position={[-0.01, -0.047, -0.739]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[1.035, 0.972, 0.968]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Keyboard_Material001_0.geometry}
                        material={materials['Material.001']}
                        position={[0.024, -0.032, 0.48]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.976, 0.976, 0.978]}
                    />
                </group>
            </group>
        </group>
    )
}

LaptopHero.propTypes = {
    texture: PropTypes.string.isRequired,
}
useGLTF.preload('/models/laptop.glb')

export default LaptopHero
