export type ProjectsInfo = {
    id: number;
    name: string;
    info: string;
    skill: string;
    skill2: string;
    link: string;
}



export const projectsData: ProjectsInfo[] = [
    {
        id: 1,
        name: 'e-commerce',
        info: 'This project contains an e-commerce application created using React and TypeScript and developed with Zustand, a state management library.',
        skill: 'React.tsx',
        skill2: 'Tailwind Css',
        link: 'https://github.com/mertcetiin/e-commerce',

    },
    {
        id: 2,
        name: 'Portfolio',
        info: 'This project contains a React TSX application used to create my personal portfolio website.',
        skill: 'React.tsx',
        skill2: 'Tailwind Css',
        link: 'https://github.com/mertcetiin/Portfolio',
    },
    {
        id: 3,
        name: 'TodoList',
        info: 'With this application, users can add new tasks, view and delete existing tasks.',
        skill: 'JavaScript',
        skill2: 'Bootstrap',
        link: 'https://github.com/mertcetiin/React-TodoList',
    },
]