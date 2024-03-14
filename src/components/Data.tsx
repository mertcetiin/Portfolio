export type ProjectsInfo = {
    name: string;
    info: string;
    skill: string;
    skill2: string;
    skill3?: string;
    skill4?: string;
    link: string;
}


export const projectsData: ProjectsInfo[] = [
    {
        name: 'Algoo',
        info: 'In this project, I played a significant role in developing a modern and impressive website for Algoo.',
        skill: 'Next.js',
        skill2: 'TypeScript',
        skill3: 'TailwindCss',
        skill4: 'Framer Motion',
        link: 'https://www.algoo.de',
    },
    {
        name: 'Chat App',
        info: 'This project contains a simple chat application built using Next.js. Firebase is used for user authentication, and Firestore is used as the database.',
        skill: 'Next.js',
        skill2: 'Firebase',
        link: 'https://github.com/mertcetiin/ChatApp',
    },
    {
        name: 'e-commerce',
        info: 'This project contains an e-commerce application created using React and TypeScript and developed with Zustand, a state management library.',
        skill: 'React.tsx',
        skill2: 'Tailwind Css',
        link: 'https://github.com/mertcetiin/e-commerce',
    },
    {
        name: 'Portfolio',
        info: 'This project contains a React TSX application used to create my personal portfolio website.',
        skill: 'React.tsx',
        skill2: 'Tailwind Css',
        link: 'https://github.com/mertcetiin/Portfolio',
    },
    {
        name: 'Movie-WebSite',
        info: 'Movie is a web application developed using Next.js, offering users the opportunity to discover and review film information.',
        skill: 'React.tsx',
        skill2: 'Zustand',
        link: 'https://github.com/mertcetiin/Movie-WebSite.git',
    },
    {
        name: 'TodoList',
        info: 'With this application, users can add new tasks, view and delete existing tasks.',
        skill: 'JavaScript',
        skill2: 'Bootstrap',
        link: 'https://github.com/mertcetiin/React-TodoList',
    },
]