import { useState } from 'react';

import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('ryokhrisnaf@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20 max-w-7xl mx-auto" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/photo-profile.JPG" alt="Ryo Khrisna Fitriawan" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Ryo Khrisna Fitriawan</p>
                            <p className="grid-subtext">
                                With 3 years of journey, I have honed my skills in frontend web development and UI/UX design to create immersive and user-friendly experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/skill.png" alt="Technology stack and programming skills" className="w-full sm:h-[276px] h-fit object-contain backdrop-filter backdrop-blur-lg" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden opacity-70">
                            <img src="assets/writing-article.jpg" alt="Writing programming articles and blog posts" />
                        </div>
                        <div>
                            <p className="grid-headtext">I love writing articles about programming & tech</p>
                            <p className="grid-subtext">In my spare time, I love spending time writing blog posts about programming and tech. It’s my little space to share what I’ve learned, experiment with new ideas, and connect with others who are passionate about the same things. I hope you enjoy reading them as much as I enjoy writing them!</p>
                            <a href="https://medium.com/@ryokhrisnaf">
                                <Button name="Read my article" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid-test.jpg" alt="3D web development and WebAssembly research" className="w-full sm:h-[266px] h-fit backdrop-filter backdrop-brightness-0" />
                        <div>
                            <p className="grid-headtext">My Current Focus</p>
                            <p className="grid-subtext">
                                I’m currently focused on creating immersive web experiences using 3D technologies like Three.js to boost user engagement. In addition, I’m exploring WebAssembly as part of my research project to push the boundaries of performance on the web.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ryokhrisnaf@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;