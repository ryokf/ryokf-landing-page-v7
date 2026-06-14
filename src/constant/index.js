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
        title: 'LiniAksara',
        desc: 'LiniAksara adalah platform digital terintegrasi yang menghubungkan para kreator (penulis, komikus, pembuat film) langsung dengan audiensnya.',
        type: 'web',
        bullets: [
            { icon: '🎨', label: 'Platform Kreator', text: 'Menghubungkan penulis, komikus, dan pembuat film secara langsung' },
            { icon: '📁', label: 'Multi-Format', text: 'Mendukung unggahan karya dalam bentuk teks, PDF, dan video' },
            { icon: '💰', label: 'Monetisasi Mandiri', text: 'Monetisasi karya per bab atau episode secara mandiri' },
        ],
        href: 'https://liniaksara.vercel.app',
        texture: '/textures/project/inkura.mp4',
        logo: '/assets/project_logo/liniaksara.webp',
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
    {
        title: 'Olvad',
        desc: 'Olvad adalah aplikasi e-commerce yang dirancang khusus untuk mempermudah operasional dan sistem pemesanan pada kedai kopi dan toko roti.',
        type: 'web',
        bullets: [
            { icon: '☕', label: 'Sistem Pemesanan', text: 'Mempermudah operasional kedai kopi dan toko roti' },
            { icon: '🛒', label: 'Transaksi Praktis', text: 'Alur transaksi dan manajemen keranjang belanja yang efisien' },
            { icon: '🌐', label: 'Visualisasi 3D', text: 'Pengalaman belanja imersif dengan produk 3D interaktif' },
        ],
        href: 'http://13.250.17.233',
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
                name: 'NestJS',
                path: 'assets/NestJS.svg',
            },
            {
                id: 3,
                name: 'Typescript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'AWS',
                path: '/assets/aws.png',
            },
        ],
    },
    {
        title: 'OmniFlux',
        desc: 'Omniflux adalah aplikasi mobile pelacak portofolio keuangan dan investasi terpadu.',
        type: 'mobile',
        bullets: [
            { icon: '📈', label: 'Pelacak Keuangan', text: 'Memantau saham, kripto, emas, dan valuta asing terpusat' },
            { icon: '🦀', label: 'Backend Rust', text: 'Performa tinggi dan sistem backend yang sangat tangguh' },
            { icon: '💼', label: 'Manajemen Dompet', text: 'Pencatatan transaksi personal dan manajemen multi-wallet' },
        ],
        href: 'https://drive.google.com/file/d/1MDAhKj8vI9a30wMUsA7Dycv0mhbJz8iv/view?usp=drive_link',
        texture: '/textures/project/smart-pet.mp4',
        logo: '/assets/project_logo/omniflux.png',
        logoStyle: {
            backgroundColor: '#f59e0b',
            boxShadow: '0px 0px 60px -10px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React Native',
                path: 'assets/expo.png',
            },
            {
                id: 2,
                name: 'Rust',
                path: 'assets/rust.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'AWS',
                path: '/assets/aws.png',
            },
        ],
    },
    {
        title: 'Wasm Image Processing Comparison',
        desc: 'Wasm Image Processing Comparison adalah aplikasi eksperimental berbasis web untuk membandingkan performa WebAssembly vs JS.',
        type: 'web',
        bullets: [
            { icon: '⚡', label: 'Komparasi Kinerja', text: 'Membandingkan kecepatan WebAssembly (Rust) vs JavaScript murni' },
            { icon: '🎨', label: 'Filter Visual', text: 'Penerapan blur, sepia, hingga deteksi tepi Sobel & Canny' },
            { icon: '📊', label: 'Analitik Real-time', text: 'Mengukur waktu eksekusi, memori, dan kualitas gambar (PSNR)' },
        ],
        href: 'https://wasm-image-processing-comparison.vercel.app',
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
        title: 'Sistem Peminjaman Buku',
        desc: 'Aplikasi manajemen perpustakaan digital terpadu yang dirancang untuk menyederhanakan akses literatur.',
        type: 'web',
        bullets: [
            { icon: '📚', label: 'Perpustakaan Digital', text: 'Pencarian literatur, pinjaman, dan reservasi buku secara praktis' },
            { icon: '👥', label: 'Manajemen Anggota', text: 'Pengelolaan koleksi bacaan pribadi dan riwayat peminjaman' },
            { icon: '📊', label: 'Dasbor Admin', text: 'Memantau aktivitas, sirkulasi buku, inventaris, dan kategori' },
        ],
        href: 'https://9418-114-10-22-206.ngrok-free.app',
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
                name: 'Express.js',
                path: 'assets/express.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'AWS',
                path: '/assets/aws.png',
            },
        ],
    },
    {
        title: 'Parisure',
        desc: 'Parisure adalah platform asuransi terdesentralisasi (dApp) berbasis blockchain untuk manajemen risiko peer-to-peer.',
        type: 'web',
        bullets: [
            { icon: '⛓️', label: 'Asuransi Web3', text: 'Platform P2P terdesentralisasi dengan smart contract Solidity' },
            { icon: '💸', label: 'Pool Mandiri & Klaim', text: 'Membuat kolam dana asuransi, beli polis, dan klaim langsung' },
            { icon: '🗳️', label: 'Tata Kelola DAO', text: 'Sistem voting komunitas (Wagmi) untuk persetujuan klaim' },
        ],
        href: 'https://90de-114-10-22-206.ngrok-free.app',
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
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Solidity',
                path: '/assets/solidity.svg',
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
