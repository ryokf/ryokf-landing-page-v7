import { Canvas } from "@react-three/fiber"
import HackerRoom from '../components/HackerRoom';
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    <span>
                        Hi, I am Ryo Khrisna Fitriawan
                    </span>
                    <span className="waving-hand"> 👋 </span>
                </p>
                <p className="hero_tag text-gray_gradient">Building immersive web experiences</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}></Suspense>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}>
                        <HackerRoom></HackerRoom>
                    </PerspectiveCamera>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero