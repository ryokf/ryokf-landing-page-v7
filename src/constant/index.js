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
        desc: 'A high-performance Point-of-Sale system tailored for inventory and sales tracking.',
        subdesc: 'Developed with Laravel 10 and ReactJS using Inertia.js, the system streamlines daily tasks and enhances customer service.',
        bullets: [
            { icon: '📦', label: 'Smart Inventory', text: 'Real-time stock alerts & management' },
            { icon: '📊', label: 'Sales Analytics', text: 'Automated daily operational tracking' },
            { icon: '⚡', label: 'Modern Stack', text: 'Laravel & React via Inertia.js for seamless SPA experience' },
        ],
        href: 'https://github.com/ryokf/pos-app',
        texture: '/textures/project/pos-bakery.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#14b8a6',
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
        desc: 'A modern e-commerce platform allowing users to browse and purchase bakery products with ease.',
        subdesc: 'Built using NextJS and Supabase, Olvad is designed to optimize online bakery sales and simplify the customer journey.',
        bullets: [
            { icon: '🛒', label: 'Online Store', text: 'Full product catalog with cart & checkout flow' },
            { icon: '🔒', label: 'Auth & Orders', text: 'Secure user authentication & order management' },
            { icon: '🚀', label: 'JAMstack', text: 'Next.js SSR + Supabase for real-time data' },
        ],
        href: 'https://olvad.vercel.app/',
        texture: '/textures/project/olvad.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#14b8a6',
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
        title: 'WebAssembly vs JS Comparison (ongoing)',
        desc: 'A research platform benchmarking WebAssembly against JavaScript for image processing performance.',
        subdesc: 'Built with Rust and JavaScript, the platform provides a testbed to evaluate and contrast the execution efficiency of both technologies.',
        bullets: [
            { icon: '🔬', label: 'Benchmarking', text: 'Side-by-side performance metrics for WASM vs JS' },
            { icon: '🦀', label: 'Rust + WASM', text: 'Compiled Rust to WebAssembly for near-native speed' },
            { icon: '📈', label: 'Research', text: 'Academic research project on execution efficiency' },
        ],
        href: 'https://github.com/ryokf/wasm-image-processing-comparison',
        texture: '/textures/project/wasm-compare.mp4',
        logo: '/assets/wasm.png',
        logoStyle: {
            backgroundColor: 'oklch(67.3% 0.182 276.935)',
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
        desc: 'An IoT-enabled pet care solution featuring smart collar integration for activity tracking and automated feeding.',
        subdesc: 'Created with Laravel 10 and Arduino, SmartPet offers a complete ecosystem for monitoring and managing pet health.',
        bullets: [
            { icon: '📡', label: 'IoT Integration', text: 'Smart collar syncs real-time activity data' },
            { icon: '🍽️', label: 'Auto Feeding', text: 'Arduino-controlled automated feeding schedule' },
            { icon: '❤️', label: 'Health Monitor', text: 'Complete pet health dashboard & alerts' },
        ],
        href: 'https://github.com/Agnestia/SmartPetLaravel',
        texture: '/textures/project/smart-pet.mp4',
        logo: '/assets/project_logo/smart-pet.png',
        logoStyle: {
            backgroundColor: '#f59e0b',
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
        title: 'LiniAksara - International Platform for Original Works',
        desc: 'A collaborative platform for a digital startup, designed to showcase and manage original user-created works internationally.',
        subdesc: 'Powered by NextJS and Supabase, LiniAksara delivers an intuitive interface and reliable backend for content management and collaboration.',
        bullets: [
            { icon: '🌍', label: 'Global Reach', text: 'Multi-language content platform for international creators' },
            { icon: '✍️', label: 'Content Hub', text: 'Upload, manage & publish original works with ease' },
            { icon: '🔗', label: 'Collaboration', text: 'Next.js + Supabase powering real-time collaboration' },
        ],
        href: 'https://liniaksara.vercel.app/',
        texture: '/textures/project/inkura.mp4',
        logo: '/assets/project_logo/inkura.webp',
        logoStyle: {
            backgroundColor: 'oklch(45.2% 0.211 324.591)',
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
