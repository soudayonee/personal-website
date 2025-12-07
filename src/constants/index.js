const navLinks = [
  {
    id: 2,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Skills",
    type: "terminal",
  },
];

// const navIcons = [
//   {
//     id: 1,
//     img: "/icons/wifi.svg",
//   },
//   {
//     id: 2,
//     img: "/icons/search.svg",
//   },
//   {
//     id: 3,
//     img: "/icons/user.svg",
//   },
//   {
//     id: 4,
//     img: "/icons/mode.svg",
//   },
// ];

const dockApps = [
  {
    id: "finder",
    name: "Finder", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "playlist",
    name: "Favorite Songs", // awas "Apple Music"
    icon: "apple-music.png",
    canOpen: true,
    size: "w-9 sm:w-11 3xl:w-20",
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: false,
  // },
];

// const blogPosts = [
//   {
//     id: 1,
//     date: "Sep 2, 2025",
//     title:
//       "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
//     image: "/images/blog1.png",
//     link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
//   },
//   {
//     id: 2,
//     date: "Aug 28, 2025",
//     title: "The Ultimate Guide to Mastering Three.js for 3D Development",
//     image: "/images/blog2.png",
//     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
//   },
//   {
//     id: 3,
//     date: "Aug 15, 2025",
//     title: "The Ultimate Guide to Mastering GSAP Animations",
//     image: "/images/blog3.png",
//     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
//   },
// ];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Flutterflow"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Laravel"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQLlite", "MySQL", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/soudayonee",
  },
  {
    id: 2,
    text: "Intagram",
    icon: "/icons/instagram.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/nv_xfal",
  },
  {
    id: 3,
    text: "Facebook",
    icon: "/icons/facebook.svg",
    bg: "#ff866b",
    link: "https://www.facebook.com/profile.php?id=100094158555121",
  },
  {
    id: 4,
    text: "TikTok",
    icon: "/icons/tiktok.svg",
    bg: "#05b6f6",
    link: "https://www.tiktok.com/@soudayonee",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    type: "me",
    name: "Me",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "nay1.jpg",
        img: "/images/nay1.jpg",
      },
      {
        id: 2,
        name: "nay2.jpg",
        img: "/images/nay2.jpg",
      },
      {
        id: 3,
        name: "nay3.jpg",
        img: "/images/nay3.jpg",
      },
      {
        id: 4,
        name: "nay4.jpg",
        img: "/images/nay4.jpg",
      },
      {
        id: 5,
        name: "nay5.jpg",
        img: "/images/nay5.jpg",
      },
    ],
  },
  {
    id: 2,
    icon: "/icons/file.svg",
    type: "activity",
    name: "Activity",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "japanclub1.jpg",
        img: "/images/japanclub1.jpg",
      },
      // {
      //   id: 2,
      //   name: "japanclub2.jpg",
      //   img: "/images/japanclub2.jpg",
      // },
      {
        id: 2,
        name: "japanclub2.jpg",
        img: "/images/japanclub3.jpg",
      },
      {
        id: 3,
        name: "band1.jpg",
        img: "/images/band1.jpg",
      },
      {
        id: 4,
        name: "band2.jpg",
        img: "/images/band2.jpg",
      },
    ],
  },
  {
    id: 3,
    icon: "/icons/gicon4.svg",
    type: "special",
    name: "Special",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "event1.jpg",
        img: "/images/event1.jpg",
      },
      {
        id: 2,
        name: "event2 (meet with kitsune).jpg",
        img: "/images/event2.jpg",
      },
      {
        id: 3,
        name: "bassist1.jpg",
        img: "/images/bassist1.jpg",
      },
    ],
  },
  {
    id: 4,
    icon: "/icons/gicon5.svg",
    type: "favorites",
    name: "Favorites",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "nay1.jpg",
        img: "/images/nay1.jpg",
      },
      {
        id: 2,
        name: "nay5.jpg",
        img: "/images/nay5.jpg",
      },
      {
        id: 3,
        name: "japanclub1.jpg",
        img: "/images/japanclub1.jpg",
      },
      {
        id: 4,
        name: "band1.jpg",
        img: "/images/band1.jpg",
      },
      {
        id: 5,
        name: "band2.jpg",
        img: "/images/band2.jpg",
      },
      {
        id: 6,
        name: "event2 (meet with kitsune).jpg",
        img: "/images/event2.jpg",
      },
      {
        id: 7,
        name: "bassist1.jpg",
        img: "/images/bassist1.jpg",
      },
    ],
  },
  {
    id: 5,
    icon: "/icons/background.svg",
    type: "wallpapers",
    name: "Wallpapers",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "default1.jpg",
        img: "/images/wallpapers/wallpaper1.jpg",
        isWallpaper: true,
      },
      {
        id: 2,
        name: "girl-katana.jpg",
        img: "/images/wallpapers/wallpaper2.jpg",
        isWallpaper: true,
      },
      {
        id: 3,
        name: "minegahara.jpg",
        img: "/images/wallpapers/wallpaper3.jpg",
        isWallpaper: true,
      },
      {
        id: 4,
        name: "default2.jpg",
        img: "/images/wallpapers/wallpaper4.jpg",
        isWallpaper: true,
      },
    ],
  },
];

export {
  navLinks,
  // navIcons,
  dockApps,
  // blogPosts,
  techStack,
  socials,
  photosLinks,
};

const PROJECTS_LOCATION = {
  id: 1,
  type: "projects",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Catatan Keuangan (Money Note)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[20vh] left-32", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "CK Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Catatan Keuangan Rumah Tangga is designed to help families manage their finances easily and in an organized manner.",
            "Its main features include recording daily income and expenses, monthly budget management, categorized spending, and encrypted data security.",
            "The app comes with a simple and intuitive interface, making it suitable for anyone who wants to live more frugally, stay organized, and reduce financial stress.",
            "Start managing your family’s finances better with this application.",
            "Note: The default language of this app is Indonesian, and you can change it in Pengaturan > Bahasa Aplikasi > Inggris (English).",
          ],
        },
        {
          id: 2,
          name: "catatankeuangan (download).com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://apps.apple.com/id/app/catatan-keuangan-rumah-tangga/id6743597255",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "logo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ck-logo.jpg",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/xdzBbD5gL5Z7mEW7GEPxcP/keuangan?node-id=63-244&t=3XNlglM2grOFmqO7-1",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    // {
    //   id: 6,
    //   name: "AI Resume Analyzer",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[12vh] left-48",
    //   children: [
    //     {
    //       id: 1,
    //       name: "AI Resume Analyzer Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "ai-resume-analyzer.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "ai-resume-analyzer.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // // ▶ Project 3
    // {
    //   id: 7,
    //   name: "Food Delivery App",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-80",
    //   windowPosition: "top-[7vh] left-[91vh]",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Food Delivery App Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
    //         "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
    //         "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
    //         "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "food-delivery-app.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "food-delivery-app.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  windowPosition: "top-[10vh] left-[100vh]",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/naufal.jpg",
    },
    {
      id: 2,
      name: "cool-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/nay3.jpg",
    },
    {
      id: 3,
      name: "error-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/nay4.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Who I Am as a Developer",
      image: "/images/nay5.jpg",
      moreImage:
        "https://github-readme-stats.vercel.app/api/top-langs?username=soudayonee&show_icons=true&locale=en&layout=compact&theme=default&hide_border=true",
      description: [
        "Hi, I’m Naufal 👋 a web developer who enjoys building things that are clean, functional, and actually pleasant to use.",
        "I work mainly with JavaScript, React, and the modern front-end ecosystem. I like structuring things in a way that feels logical and smooth, whether it’s UI, components, or the entire workflow.",
        "I’m driven by clarity and simplicity not because it’s easy, but because making something feel effortless is the real challenge.",
        "When I’m not working on web-related stuff, I often find myself exploring new tech, learning something random at midnight, or getting lost in small details that I think I can improve.",
        "Outside of coding, I enjoy quiet routines, music, and the occasional habit of overthinking ideas until they become something I want to build.",
      ],
    },
  ],
};

// const RESUME_LOCATION = {
//   id: 3,
//   type: "resume",
//   name: "Resume",
//   icon: "/icons/file.svg",
//   kind: "folder",
//   children: [
//     {
//       id: 1,
//       name: "Resume.pdf",
//       icon: "/images/pdf.png",
//       kind: "file",
//       fileType: "pdf",
//       // you can add `href` if you want to open a hosted resume
//       // href: "/your/resume/path.pdf",
//     },
//   ],
// };

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  about: ABOUT_LOCATION,
  projects: PROJECTS_LOCATION,
  // resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  playlist: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
