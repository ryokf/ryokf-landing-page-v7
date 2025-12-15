import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Target = (props) => {
    const targetRef = useRef()

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.3}>
            <pointLight position={[-1, 2, 2]} intensity={10} />

            {/* Target Stand Base */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
                <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Target Stand Pole */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#6366f1" metalness={0.6} roughness={0.3} />
            </mesh>

            {/* Target Rings */}
            <group position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                {/* Outer ring - red */}
                <mesh>
                    <torusGeometry args={[0.6, 0.02, 16, 32]} />
                    <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.4} />
                </mesh>
                {/* Middle ring - white */}
                <mesh>
                    <torusGeometry args={[0.45, 0.02, 16, 32]} />
                    <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.4} />
                </mesh>
                {/* Inner ring - blue */}
                <mesh>
                    <torusGeometry args={[0.3, 0.02, 16, 32]} />
                    <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
                </mesh>
                {/* Center circle - yellow */}
                <mesh>
                    <circleGeometry args={[0.15, 32]} />
                    <meshStandardMaterial color="#fbbf24" metalness={0.3} roughness={0.4} />
                </mesh>
            </group>
        </group>
    )
}

export default Target