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
        name: 'Services',
        href: '#services',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Reviews',
        href: '#reviews',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
];



export const myProjects = [
    {
        title: 'POS System for Bakery Shop',
        desc: 'A Point-of-Sale system tailored for bakery shops, providing features for inventory management, sales tracking, and operations optimization.',
        subdesc: 'Developed with Laravel 10 and ReactJS using Inertia.js, the system streamlines daily tasks and enhances customer service.',
        href: 'https://github.com/ryokf/pos-app',
        texture: '/textures/project/pos-bakery.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#14b8a6',
            // border: '0.2px solid #238F60',
            boxShadow: '0px 0px 60px -10px #238F604D',
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
        href: 'https://olvad.vercel.app/',
        texture: '/textures/project/olvad.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#14b8a6',
            // border: '0.2px solid #238F60',
            boxShadow: '0px 0px 60px -10px #238F604D',
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
        title: 'WebAssmebly and js Comparison Website (ongoing)',
        desc: 'This website was developed as part of a research project comparing the performance of WebAssembly and JavaScript in image processing tasks.',
        subdesc: 'Built with Rust and JavaScript, the platform provides a testbed to evaluate and contrast the execution efficiency of both technologies.',
        href: 'https://github.com/ryokf/wasm-image-processing-comparison',
        texture: '/textures/project/wasm-compare.mp4',
        logo: '/assets/wasm.png',
        logoStyle: {
            backgroundColor: 'oklch(67.3% 0.182 276.935)',
            // border: '0.2px solid #000033',
            boxShadow: '0px 0px 60px -10px #000033',
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
        title: 'SmartPet - Pet Care App',
        desc: 'SmartPet is an IoT-enabled pet care solution featuring smart collar integration for activity tracking and automated feeding.',
        subdesc: 'Created with Laravel 10 and Arduino, SmartPet offers a complete ecosystem for monitoring and managing pet health.',
        href: 'https://github.com/Agnestia/SmartPetLaravel',
        texture: '/textures/project/smart-pet.mp4',
        logo: '/assets/project_logo/smart-pet.png',
        logoStyle: {
            backgroundColor: '#f59e0b',
            // border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px -10px #2F67B64D',
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
        title: 'LiniAksara - An International Platform For Original Works (ongoing)',
        desc: 'LiniAksara is a collaborative platform developed for a digital startup project, designed to showcase and manage original user-created works.',
        subdesc: 'Powered by NextJS and Supabase, LiniAksara delivers an intuitive interface and reliable backend for content management and collaboration.',
        href: 'https://liniaksara.vercel.app/',
        texture: '/textures/project/inkura.mp4',
        logo: '/assets/project_logo/inkura.webp',
        logoStyle: {
            backgroundColor: 'oklch(45.2% 0.211 324.591)',
            // border: '0.2px solid #000033',
            boxShadow: '0px 0px 60px -10px #000033',
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
        id: 4,
        name: 'PT Telkomsel',
        pos: 'Software Engineer Intern',
        duration: '2025',
        title: "As a Software Engineer Intern, I learned and improved my skills in software development using Laravel, Node.js, and Unity, while also developing soft skills such as communication and teamwork.",
        icon: '/assets/Telkomsel.svg',
        animation: 'victory',
    },
    {
        id: 3,
        name: 'DISKOMINFO Kota Semarang',
        pos: 'Web Developer Intern',
        duration: '2025',
        title: "As a Web Developer Intern, I learned and improved my skills in web development using ReactJS and Supabase, while also developing soft skills such as communication and teamwork.",
        icon: '/assets/diskominfo.png',
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
        id: 1,
        name: 'DNCC',
        pos: 'Mobile Division',
        duration: '2022 - 2024',
        title: "As part of the Mobile Division, I learned and improved my skills in mobile development using Flutter, while also developing soft skills such as communication and teamwork.",
        icon: '/assets/logo2.png',
        animation: 'victory',
    },
];
export const services = [
    {
        id: 1,
        title: 'Landing Pages & 3D Web',
        description: 'Stunning promotional pages with interactive 3D elements to elevate your brand presence and engagement.',
        icon: '🚀',
    },
    {
        id: 2,
        title: 'POS Systems & Point of Sale',
        description: 'Integrated inventory and cashier applications to accelerate store and cafe operations with real-time tracking.',
        icon: '🏪',
    },
    {
        id: 3,
        title: 'E-Commerce & Online Stores',
        description: 'Professional sales websites with complete payment features to reach customers beyond your physical location.',
        icon: '🛒',
    },
    {
        id: 4,
        title: 'Mobile Applications',
        description: 'Fast and responsive Android & iOS apps using Flutter and React Native for cross-platform reach.',
        icon: '📱',
    },
    {
        id: 5,
        title: 'Blockchain & Smart Contracts',
        description: 'Secure smart contract development for Web3 applications and decentralized solutions.',
        icon: '⛓️',
    },
    {
        id: 6,
        title: 'Custom Web Applications',
        description: 'Specialized business information systems designed for your company\'s unique workflow and needs.',
        icon: '💻',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Indah Puspitasari',
        position: 'Founder of Olvad',
        img: 'assets/review1.png',
        review: 'Working with Ryo was an absolute pleasure. He delivered a stunning website that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
    },
    {
        id: 2,
        name: 'Bapak Agus',
        position: 'Administrator of Masjid An-nuur Pucang Gading',
        img: 'assets/review2.png',
        review: 'Ryo built our mobile app from scratch and it turned out amazing. His professionalism and ability to understand our vision made the entire process smooth and efficient.',
    },
];
