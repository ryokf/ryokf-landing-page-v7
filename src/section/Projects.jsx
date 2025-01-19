import { Suspense, useState } from "react"
import { myProjects } from "../constant"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from "../components/CanvasLoader";
import Laptop from "../components/Laptop";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction === 'previous'){
                return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1
            } else {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1
            }
        })

    }

    return (
        <section className='c-space my-20 max-w-7xl m-auto'>
            <p className='head-text'>My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="" className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p>{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {
                                currentProject.tags.map((tag) => (
                                    <div key={tag.id} className="tech-logo text-white">
                                        <img src={tag.path} alt={tag.name} className="text-white" />
                                    </div>
                                ))
                            }
                        </div>
                        <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer text-white-600">
                            <p>Check live site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="" className="w-4 h-4" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas camera={{ position: [0, 1, 7], fov:50 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[8, 8, 4]} intensity={2} />
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group position={[0, -2.5, -0.5]} rotation={[0, -0.2, 0]} scale={1.5}>
                                    {/* <DemoComputer texture={currentProject.texture}></DemoComputer> */}
                                    <Laptop texture={currentProject.texture}></Laptop>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                        {/* <OrbitControls /> */}
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects