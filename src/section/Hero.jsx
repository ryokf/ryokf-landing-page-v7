import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constant";
import Target from "../components/Target";
import ReactLogo from '../components/ReactLogo';
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from '../components/HeroCamera';
import Button from "../components/Button";
import GamingRoom from '../components/GamingRoom';
import LaptopHero from "../components/LaptopHero";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative bg-gradient-to-b from-blue-100 dark:from-violet-900 to-white dark:to-transparent" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-gray-800 dark:text-white text-center font-generalsans">
                    <span>
                        {t.greeting}
                    </span>
                    <span className="waving-hand"> 👋 </span>
                </p>
                <p className="hero_tag text-blue_gradient dark:text-violet_gradient text-7xl">{t.tagline}</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isTablet={isTablet} isMobile={isMobile}>
                            {
                                !isMobile &&
                                <GamingRoom
                                    rotation={[0, -Math.PI / 2, 0]}
                                    position={sizes.deskPosition}
                                ></GamingRoom>
                            }
                        </HeroCamera>
                        {
                            isMobile &&
                            <group>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[5, 5, 5]} intensity={3} color={'#a78bfa'} />
                                <LaptopHero
                                    position={[0, -5.5, 0]}
                                    scale={1.5}
                                    texture={"/textures/desk/code_screen2.png"}
                                ></LaptopHero>
                            </group>
                        }
                        {
                            !isMobile &&
                            <group>
                                <ReactLogo position={sizes.reactLogoPosition}></ReactLogo>
                                <Rings position={sizes.ringPosition}></Rings>
                                {
                                    !isTablet &&
                                    <group>
                                        <Target position={sizes.targetPosition}></Target>
                                        <Cube position={sizes.cubePosition}></Cube>
                                    </group>
                                }
                            </group>
                        }
                        <ambientLight intensity={0.4}></ambientLight>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name={t.cta} isBeam continerClass="sm:w-fit w-full sm:min-w-96"></Button>
                </a>
            </div>
        </section>
    )
}

export default Hero