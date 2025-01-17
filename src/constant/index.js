import { color } from "three/tsl";

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
        desc: 'Devlearn is a comprehensive online learning platform escpecially in the IT sector that offers users a centralized education management dashboard. It allows users to connect with instructors and monitor real-time progress.',
        subdesc:
            'Built with Laravel 9 and TailwindCSS Devlearn ensures a smooth and secure learning experience, tailored to meet the needs of modern learners.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/devlearn.mp4',
        logo: '/assets/project_logo/devlearn.png',
        logoStyle: {
            backgroundColor: '#000044',
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
        title: 'BantuRiset - Funding Research Platform',
        desc: 'BantuRiset is a funding research platform that connects researchers with potential donors. It allows users to create and manage research projects, track funding progress, and collaborate with other researchers.',
        subdesc:
            'built with reactJS, TailwindCSS, TypeScript, for frontend and golang for backend. BantuRiset is designed for optimal performance and scalability.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/banturiset.mp4',
        logo: '/assets/project_logo/banturiset.svg',
        logoStyle: {
            backgroundColor: '#13202F',
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
        title: 'Olvad - POS System for Bakery Shop',
        desc: 'Olvad is a POS system for a bakery shop that allows users to manage inventory, track sales, and optimize operations. It provides a user-friendly interface and efficient data management.',
        subdesc:
            'Built with Laravel 10 and ReactJS with Inertia, Olvad is designed to streamline bakery shop operations and enhance the customer experience.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/olvad.mp4',
        logo: '/assets/project_logo/olvad.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
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
        title: 'SmartPet - Pet Care App',
        desc: 'SmartPet is a pet care app that offers users a centralized platform to manage their pet’s health and well-being. Integrated with a smart collar for tracking and monitoring pet behavior and IOT for automatic feeding.',
        subdesc:
            'Built with Laravel 10 and Arduino, SmartPet is designed to provide pet owners with peace of mind and ensure the well-being of their furry friends.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/smart-pet.mp4',
        logo: '/assets/project_logo/smart-pet.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
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
        title: 'Agenda Dinas - Event Management App',
        desc: 'Agenda Dinas is an event management app that allows users to create and manage events, track attendance, and generate reports. It provides a centralized platform for event planning and execution.',
        subdesc:
            'Built with Laravel 10 and TailwindCSS, Agenda Dinas is built for optimal performance and scalability, ensuring a seamless event management experience.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/agenda-dinas.mp4',
        logo: '/assets/project_logo/agenda-dinas.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
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
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -6.5, 0] : [1.5, -4.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [11, -4, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-15, -7, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'DNCC',
        pos: 'Mobile Division',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Laboratory Assistant',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
];