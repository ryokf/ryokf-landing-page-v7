import { Canvas } from '@react-three/fiber';
import { workExperiences } from '../constant';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import Developer from '../components/Developer';

const Experience = () => {
    // const [animationName, setAnimationName] = useState('');
    return (
        <section className='c-space my-20 max-w-7xl mx-auto'>
            <div className="w-full text-white-600">
                <h3 className='head-text'>My Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={5} />
                            <spotLight position={[10,10,10]} angle={0.15} intensity={1} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}></OrbitControls>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer scale={3} position={[0, -3, 0]}></Developer>
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {
                                workExperiences.map(({ id, name, pos, duration, title, icon }) => {
                                    return (
                                        <div key={id} className="work-content_container group" >
                                            <div className="flex flex-col h-full justify-start items-start py-2 !pt-6">
                                                <div className="work-content_logo">
                                                    <img src={icon} className="object-cover max-h-16" alt="" />
                                                </div>
                                                <div className="work-content_bar"></div>
                                            </div>
                                            <div className="sm:p-5 px-2.5 py-5">
                                                <p className='!font-bold text-white-600'>{name}</p>
                                                <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                                <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience