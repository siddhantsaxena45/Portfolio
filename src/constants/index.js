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
    name: 'Manish Kumar Thakur',
    position: 'Professor & Associate HoD at JIIT Noida',
    img: 'assets/review1.jpg',
    review:
      'Siddhant demonstrated exceptional problem-solving skills while working on real-time systems. His ability to independently build and document projects like the Voice Band Simulator was impressive.',
  },
  {
    id: 2,
    name: 'Suma Dawn',
    position: 'Assistant Professor at JIIT Noida',
    img: 'assets/review2.jpg',
    review:
      'During his internship, Siddhant delivered two full-fledged interactive applications using Pygame and gesture recognition frameworks. His understanding of accessibility in game design stood out.',
  },

  {
    id: 3,
    name: 'Adithya Bansal',
    position: 'Product Manager at Microsoft',
    img: 'assets/review3.jpg',
    review:
      'Wow, this looks super polished! Real-time chat and video calling? That’s no small feat...bet the WebRTC part was tricky to implement. I’ll be checking out the live demo for sure! hashtag#webdevelopment hashtag#MERNstack',
  },
];

export const myProjects = [
  {
    title: 'Zocial - Full-stack Social Media App',
    desc: 'Zocial is a modern social media platform with real-time chat, Google login, WebRTC video calls, and features like posts, comments, bookmarks, and seen indicators.',
    subdesc:
      'Built using the MERN stack, Redux Toolkit, Socket.IO, WebRTC, and Tailwind CSS. Deployed on Vercel and Render with Cloudinary image uploads.',
    href: 'https://zocial.vercel.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
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
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
         {
        id: 3,
        name: 'JavaScript',
        path: '/assets/node.svg',
      },
      {
        id: 4,
        name: 'Mongo Db',
        path: '/assets/mongo.svg',
      },
    ],
  },
  {
    title: 'Get Me a Chai - Creator Support Platform',
    desc: 'A platform where creators can accept donations and interact with their audience through personalized messages and tipping.',
    subdesc:
      'Built using Next.js, Razorpay, MongoDB, and NextAuth.js. Features creator pages, responsive layouts, and payment workflows.',

    href: 'https://get-me-a-chai-sooty.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
       name: 'NetJS',
        path: '/assets/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/node.svg',
      },
      {
        id: 4,
        name: 'Mongo Db',
        path: '/assets/mongo.svg',
      },
    ],
  },
  {
    title: 'Wanderlust - Hotel Booking and Listing App',
    desc: 'Wanderlust is an Airbnb-like web app for exploring, reviewing, and listing accommodations with image uploads and maps.',
    subdesc:
      'Uses Node.js, EJS, Express, MongoDB, Cloudinary, and Google Maps API. Supports secure user login and category filters.',

    href: 'https://wnaderlust-89l3.onrender.com/listings',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
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
        name: 'exressjs',
        path: 'assets/express.svg',
      },
        {
        id: 3,
        name: 'Nodejs',
        path: '/assets/node.svg',
      },
      {
        id: 4,
        name: 'Mongo Db',
        path: '/assets/mongo.svg',
      },
    ],
  },
 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [4, 3, 0] : isMobile ? [5, 3, 0] : isTablet ? [5, 3, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-7, 6, 0] : isMobile ? [-11, 6, 0] : isTablet ? [-12,6, 0] : [-24, 6, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'DIRD, JIIT Noida - Audio/sign-language/ Gesture based game control',
    pos: 'Student Research Intern at JIIT Noida',
    duration: 'May 2025 - July 2025',
    title:
      'Contributed to the DIRD GAINT project focused on enhancing mental well-being for differently abled individuals through innovative game development. Implemented gesture-based and audio-controlled game control using MediaPipe and Vosk.',
    icon: '/assets/python.svg',
    animation: 'victory',
  }, {
    id: 2,
    name: 'DIRD, JIIT Noida - Audio/sign-language/ Gesture based game control',
    pos: 'Student Research Intern at JIIT Noida',
    duration: 'May 2025 - July 2025',
    title:
      'Contributed to the DIRD GAINT project focused on enhancing mental well-being for differently abled individuals through innovative game development. Implemented gesture-based and audio-controlled game control using MediaPipe and Vosk.',
    icon: '/assets/python.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'DIRD, JIIT Noida - Audio/sign-language/ Gesture based game control',
    pos: 'Student Research Intern at JIIT Noida',
    duration: 'May 2025 - July 2025',
    title:
      'Contributed to the DIRD GAINT project focused on enhancing mental well-being for differently abled individuals through innovative game development. Implemented gesture-based and audio-controlled game control using MediaPipe and Vosk.',
    icon: '/assets/python.svg',
    animation: 'salute',
  },
];
