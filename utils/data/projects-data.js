import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Wechat- whatsapp clone',
        description: "WeChat is a WhatsApp-like web application built using modern web technologies, offering real-time messaging, video calling, and peer-to-peer communication. Developed from December 2023 to January 2024, this project was designed to provide users with a seamless chatting experience, backed by a robust backend and scalable infrastructure.",
        tools: ['Express', 'PostgresSQL','NextJs', 'NodeJS', 'Prisma', 'PeerJS', 'Tailwindcss',  ],
        role: 'Full stack',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travellgo',
        description: 'Travellgo is a web-based platform designed to connect travelers with local guides who offer personalized services and host trips. On Travellgo, travelers can search for and book trips, read reviews, and explore various destinations. Local guides can register, create profiles, and provide details about their trips and services, such as accommodations, itineraries, and other facilities. Guides have full control to host their own trips, showcasing their expertise and offering customized experiences.',
        tools: ['ReactJS', 'Tailwind CSS', "Google Maps", "Gemni Api", "JavaScript", "MongoDB", "Clodinary",  "Firebase"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },