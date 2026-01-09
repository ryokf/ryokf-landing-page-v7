import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import Button from '../components/Button.jsx';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;
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
                    <div className="grid-container bg-white dark:bg-black">
                        
                        <img src="assets/photo-profile.JPG" alt="Ryo Khrisna Fitriawan" className="w-full sm:h-[276px] h-fit object-cover rounded-lg overflow-hidden" />
                        <div>
                            <p className="grid-headtext">{t.title}</p>
                            <p className="grid-subtext">
                                {t.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/skill.png" alt="Technology stack and programming skills" className="w-full sm:h-[276px] h-fit object-contain backdrop-filter backdrop-blur-lg" />
                        <div>
                            <p className="grid-headtext">{t.techStack}</p>
                            <p className="grid-subtext">
                                {t.techStackDesc}
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
                            <p className="grid-headtext">{t.writingTitle}</p>
                            <p className="grid-subtext">{t.writingDesc}</p>
                            <a href="https://medium.com/@ryokhrisnaf">
                                <Button name={t.readArticle} isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid-test.jpg" alt="3D web development and WebAssembly research" className="w-full invert dark:invert-0 sm:h-[266px] h-fit backdrop-filter backdrop-brightness-0" />
                        <div>
                            <p className="grid-headtext">{t.currentFocus}</p>
                            <p className="grid-subtext">
                                {t.currentFocusDesc}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top invert dark:invert-0"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">{t.contactMe}</p>
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