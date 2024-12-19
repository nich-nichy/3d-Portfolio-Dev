import {
    aroopa, guvi, ors, nizzie, urlShort, udemy, crypt, nizzieScrape
} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    postgres,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Aroopa Technologies Pvt. Ltd.",
        icon: aroopa,
        iconBg: "#fff",
        date: "February 2023 - August 2023",
        months: "7 months",
        points: [
            "Learned web development fundamentals and gained practical experience in building web applications.",
            "Learned to create interactive Power BI dashboards using DAX expressions and Python, with MongoDB data as the dataset.",
            "From the third month onwards, I entered on a project called Aroopa Apps, Integrated OAuth 2.0 for third-party access to manage orders and products.",
        ],
        skills: "HTML, CSS, JavaScript, React Redux, Node JS, Express JS, MongoDB, Git, GitHub, Python, Power BI, DAX, OAuth 2.0",
    },
    {
        title: "MERN Developer - Trainee",
        company_name: "Aroopa Technologies Pvt. Ltd.",
        icon: aroopa,
        iconBg: "#fff",
        date: "September 2023 - May 2024",
        months: "9 months",
        points: [
            "Developed and maintained web applications using React JS, React Redux, Node JS, and Express JS.",
            "I worked on a module called Integration, where I created a system that authenticates more than 15 OAuth 2.0 integrations for sub-domains or sub-tenants, such as Google, Microsoft, Amazon etc.",
            "Leveraged AWS Secret Manager and Scheduler to securely manage user tokens and automate the refresh process.",
            "I also developed microservices (RESTful API using Node.js and Express.js) that integrated third-party services into the Product, such as Google Spreadsheets, Microsoft Teams, and Zoho CRM.",
            "Participated in guiding and providing constructive feedback on OAuth 2.0 and microservices to other developers in our product based project.",
            "Developed a reusable node that allows users to easily add Google Sheets functionality by drag and drop to any node in the Flow workflow module.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Collaborated with team members on Azure DevOps to ensure smooth code integration, push, pull, and commit operations.",
            "Volunteerly involved in creating videos for OAuth 2.0 scope access for clover and google."
        ],
        skills: "React JS, React Redux, Node JS, Express JS, React Flow, AWS Secret Manager, Amazon EventBridge Scheduler",
    },
];

export const certificates = [
    {
        title: "",
        company_name: "Udemy",
        icon: udemy,
        iconBg: "#fff",
        date: "",
        points: [

        ],
        url: ""
    }]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nich-nichy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohamed-nishath-m-049516191/',
    }
];

export const projects = [
    // {
    //     iconUrl: nizzie,
    //     theme: 'btn-back-green',
    //     name: 'Nizzie',
    //     description: 'Developed a workflow automation platform using React Flow, enabling users to connect third-party integrations as drag- and - drop nodes to automate recurring tasks.',
    //     link: '',
    //     gitLink: 'https://github.com/nich-nichy/nizzie-dev',
    //     teckUsed: "Next JS, TypeScript, Prisma, Firebase and Neon Tech"
    // },
    {
        iconUrl: nizzieScrape,
        theme: 'btn-back-green',
        name: 'Nizzie Scrape',
        description: 'Developed a flow-based web scraping automation platform using React Flow, The platform features AI integration for data extraction.  It increased data extraction efficiency by 60%.',
        link: '',
        gitLink: '',
        teckUsed: "Next JS, TypeScript, SQL Lite and Prisma"
    },
    {
        iconUrl: ors,
        theme: 'btn-back-red',
        name: 'ORS',
        description: 'Built an online vehicle rental system that enables users to rent vehicles and manage their rental history, while providing admins with detailed views of all rental management.',
        link: 'https://ors-vehicle-renting.netlify.app/',
        gitLink: 'https://github.com/nich-nichy/FSD61WD-T-VehicleRentalSystem-Frontend',
        teckUsed: "React JS, Redux, Node JS, Express JS, and MongoDB"
    },
    {
        iconUrl: crypt,
        theme: 'btn-back-pink',
        name: 'Web3 Dapp',
        description: 'An web3 based decentralized application (Dapp) that allows users to buy Indie NFTs.',
        link: 'https://crypt-mer.vercel.app/',
        gitLink: 'https://github.com/nich-nichy/Crypto-merchendise',
        teckUsed: "Next JS and Sanity"
    },
    {
        iconUrl: urlShort,
        theme: 'btn-back-pink',
        name: 'Url Shortner',
        description: 'An URL shortner using AG-Grid.',
        link: 'https://url-shortner-t.netlify.app/',
        gitLink: 'https://github.com/nich-nichy/FSD61WD-T-URLShortener-Frontend',
        teckUsed: "React JS, Node JS, Express JS, and MongoDB"
    },
]; 