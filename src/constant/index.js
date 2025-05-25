export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Devlearn - Online Learning Platform',
        desc: 'Devlearn is a centralized online learning platform focused on the IT sector, enabling users to connect with instructors and track their learning progress in real time.',
        subdesc: 'Developed using Laravel 9 and TailwindCSS, Devlearn offers a seamless, secure, and modern e-learning experience tailored for today\'s learners.',
        href: 'https://learn.dnccudinus.org/',
        texture: '/textures/project/devlearn.mp4',
        logo: '/assets/project_logo/devlearn.png',
        logoStyle: {
            backgroundColor: '#1e3a8a',
            border: '0.2px solid #000033',
            boxShadow: '0px 0px 60px 0px #000033',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Laravel',
                path: '/assets/laravel.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'WebAssmebly and js Comparison Website (ongoing)',
        desc: 'This website was developed as part of a research project comparing the performance of WebAssembly and JavaScript in image processing tasks.',
        subdesc: 'Built with Rust and JavaScript, the platform provides a testbed to evaluate and contrast the execution efficiency of both technologies.',
        href: 'https://learn.dnccudinus.org/',
        texture: '/textures/project/wasm-compare.mp4',
        logo: '/assets/wasm.png',
        logoStyle: {
            backgroundColor: 'oklch(67.3% 0.182 276.935)',
            border: '0.2px solid #000033',
            boxShadow: '0px 0px 60px 0px #000033',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'WebAssembly',
                path: 'assets/wasm.png',
            },
            {
                id: 3,
                name: 'Rust',
                path: 'assets/rust.png',
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Inkura - An International Platform For Original Works (ongoing)',
        desc: 'Inkura is a collaborative platform developed for a digital startup project, designed to showcase and manage original user-created works.',
        subdesc: 'Powered by NextJS and Supabase, Inkura delivers an intuitive interface and reliable backend for content management and collaboration.',
        href: 'https://learn.dnccudinus.org/',
        texture: '/textures/project/inkura.mp4',
        logo: '/assets/project_logo/inkura.webp',
        logoStyle: {
            backgroundColor: 'oklch(45.2% 0.211 324.591)',
            border: '0.2px solid #000033',
            boxShadow: '0px 0px 60px 0px #000033',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'NextJS',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'Supabase',
                path: 'assets/supabase.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'BantuRiset - Funding Research Platform (ongoing)',
        desc: 'BantuRiset connects researchers with potential donors, supporting project management, funding tracking, and collaboration.',
        subdesc: 'Built with ReactJS, TailwindCSS, TypeScript for the frontend and Golang for the backend, ensuring performance and scalability.',
        href: 'https://banturiset.vercel.app/',
        texture: '/textures/project/banturiset.mp4',
        logo: '/assets/project_logo/banturiset.svg',
        logoStyle: {
            color: '#ffffff',
            backgroundColor: '#60a5fa',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Golang',
                path: '/assets/Go.png',
            },
        ],
    },
    {
        title: 'POS System for Bakery Shop',
        desc: 'A Point-of-Sale system tailored for bakery shops, providing features for inventory management, sales tracking, and operations optimization.',
        subdesc: 'Developed with Laravel 10 and ReactJS using Inertia.js, the system streamlines daily tasks and enhances customer service.',
        href: 'https://github.com/ryokf/pos-app',
        texture: '/textures/project/pos-bakery.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#14b8a6',
            border: '0.2px solid #238F60',
            boxShadow: '0px 0px 60px 0px #238F604D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Laravel',
                path: '/assets/laravel.png',
            },
            {
                id: 4,
                name: 'Inertia',
                path: '/assets/inertia.jpg',
            },
        ],
    },
    {
        title: 'Olvad - E-Commerce for Bakery Shop',
        desc: 'Olvad is an e-commerce platform that allows users to browse and purchase bakery products with ease.',
        subdesc: 'Built using NextJS and Supabase, Olvad is designed to optimize online bakery sales and simplify the customer journey.',
        href: 'https://github.com/ryokf/pos-app',
        texture: '/textures/project/olvad.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#14b8a6',
            border: '0.2px solid #238F60',
            boxShadow: '0px 0px 60px 0px #238F604D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'NextJS',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Supabase',
                path: '/assets/supabase.png',
            },
        ],
    },
    {
        title: 'SmartPet - Pet Care App',
        desc: 'SmartPet is an IoT-enabled pet care solution featuring smart collar integration for activity tracking and automated feeding.',
        subdesc: 'Created with Laravel 10 and Arduino, SmartPet offers a complete ecosystem for monitoring and managing pet health.',
        href: 'https://github.com/Agnestia/SmartPetLaravel',
        texture: '/textures/project/smart-pet.mp4',
        logo: '/assets/project_logo/smart-pet.png',
        logoStyle: {
            backgroundColor: '#f59e0b',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Laravel',
                path: '/assets/laravel.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Arduino',
                path: '/assets/arduino.png',
            },
        ],
    },
    {
        title: 'Rebranding SMPN 20 Semarang',
        desc: 'A website redesign initiative developed during an internship at DISKOMINFO Semarang, aimed at improving the school\'s digital presence.',
        subdesc: 'Built with ReactJS and Supabase, the platform features modern UI and robust backend capabilities for content management.',
        href: 'https://github.com/Agnestia/SmartPetLaravel',
        texture: '/textures/project/smp20.mp4',
        logo: '/assets/project_logo/agenda-dinas.png',
        logoStyle: {
            backgroundColor: '#f59e0b',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'ReactJS',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Supabase',
                path: '/assets/supabase.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    let deskScale;
    if (isSmall) {
        deskScale = 0.05;
    } else if (isMobile) {
        deskScale = 0.06;
    } else {
        deskScale = 0.065;
    }
    let cubePosition;
    if (isSmall) {
        cubePosition = [4, -5, 0];
    } else if (isMobile) {
        cubePosition = [5, -5, 0];
    } else if (isTablet) {
        cubePosition = [5, -5, 0];
    } else {
        cubePosition = [11, -4, 0];
    }

    let reactLogoPosition;
    if (isSmall) {
        reactLogoPosition = [3, 4, 0];
    } else if (isMobile) {
        reactLogoPosition = [5, 4, 0];
    } else if (isTablet) {
        reactLogoPosition = [5, 2, 0];
    } else {
        reactLogoPosition = [12, 3, 0];
    }

    let ringPosition;
    if (isSmall) {
        ringPosition = [-5, 7, 0];
    } else if (isMobile) {
        ringPosition = [-10, 10, 0];
    } else if (isTablet) {
        ringPosition = [-12, 6, 0];
    } else {
        ringPosition = [-24, 10, 0];
    }

    let targetPosition;
    if (isSmall) {
        targetPosition = [-5, -10, -10];
    } else if (isMobile) {
        targetPosition = [-9, -10, -10];
    } else if (isTablet) {
        targetPosition = [-11, -7, -10];
    } else {
        targetPosition = [-15, -7, -10];
    }

    return {
        deskScale: deskScale,
        deskPosition: isMobile ? [0.5, -6.5, 0] : [1.5, -4.5, 0],
        cubePosition: cubePosition,
        reactLogoPosition: reactLogoPosition,
        ringPosition: ringPosition,
        targetPosition: targetPosition,
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'DNCC',
        pos: 'Mobile Division',
        duration: '2022 - 2024',
        title: "As a Mobile Division, I was learning and improving my skills in mobile development using Flutter. and also learn softskills such as communication and teamwork.",
        icon: '/assets/logo2.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Universitas Dian Nuswantoro',
        pos: 'Laboratory Assistant',
        duration: '2023 - 2024',
        title: "As a Laboratory Assistant, I helped students in the laboratory to learn and practice their skills in subjects such as Programming Algorithm, Database, Web Programming and more.",
        icon: '/assets/udinus.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'DISKOMINFO Kota Semarang',
        pos: 'Web Developer Intern',
        duration: '2025',
        title: "As a Web Developer Intern, I was learning and improving my skills in web development using ReactJS and Supabase. and also learn softskills such as communication and teamwork.",
        icon: '/assets/diskominfo.png',
        animation: 'victory',
    },
];