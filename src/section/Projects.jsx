import { Suspense, useState } from "react"
import { myProjects } from "../constant"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from "../components/CanvasLoader";
import Laptop from "../components/Laptop";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    
    // Get project data from translations, fallback to myProjects for other data like logo, texture, etc.
    const projects = t.list;
    const currentProjectData = projects[selectedProjectIndex];
    const currentProject = { ...myProjects[selectedProjectIndex], ...currentProjectData };

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            } else {
                return prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            }
        })

    }

    return (
        <section className='c-space my-20 max-w-7xl m-auto'>
            <p className='head-text'>{t.title}</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-300/50 dark:shadow-black-200 rounded-lg bg-gray-50/50 dark:bg-black-200/50 transition-colors border border-gray-200 dark:border-black-300">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-3 w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt={`${ currentProject.title } logo`} className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-5 text-gray-700 dark:text-white-600 my-5 transition-colors">
                        <p className="text-gray-900 dark:text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText text-gray-700 dark:text-white-600">{currentProject.desc}</p>
                        <p className="text-gray-600 dark:text-white-600">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {
                                currentProject.tags.map((tag) => (
                                    <div key={tag.id} className="tech-logo text-gray-900 dark:text-white transition-colors">
                                        <img src={tag.path} alt={tag.name} className="text-gray-900 dark:text-white" />
                                    </div>
                                ))
                            }
                        </div>
                        <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-white-600 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <p>{t.checkLive}</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="external link icon" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')} aria-label="Previous project">
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4 invert dark:invert-0" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')} aria-label="Next project">
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4 invert dark:invert-0" />
                        </button>
                    </div>
                </div>
                <div className="border border-gray-200 dark:border-black-300 bg-gray-50/50 dark:bg-black-200 rounded-lg h-96 md:h-full transition-colors">
                    <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[8, 8, 4]} intensity={2} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group position={[0, -2.5, -0.5]} rotation={[0, -0.2, 0]} scale={1.5}>
                                    <Laptop texture={currentProject.texture}></Laptop>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects