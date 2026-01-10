const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="c-space pt-7 pb-8 flex justify-between items-center flex-wrap gap-5 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-violet-700 dark:to-violet-600 transition-colors">

            <div className="flex gap-3">
                <a href="https://github.com/ryokf" className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 invert dark:invert-0" />
                </a>
                <a href="https://medium.com/@ryokhrisnaf" className="social-icon">
                    <img src="/assets/medium.webp" alt="medium" className="w-1/2 h-1/2 invert dark:invert-0" />
                </a>
                <a href="https://www.linkedin.com/in/ryokf/" className="social-icon">
                    <img src="/assets/linkedin.webp" alt="linkedin" className="w-1/2 h-1/2 invert dark:invert-0" />
                </a>
            </div>

            <p className="text-white-800">&copy;{year} Ryo khrisna fitriawan. All rights reserved.</p>
        </footer>
    );
};

export default Footer;