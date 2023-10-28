import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
    return (
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>

            <div className="group w-full sm:w-1/2 m-4 mt-10 mx-auto p-6 rounded-xl border-2 border-gray-300">
                <a href='https://github.com/mertcetiin/e-commerce' target="e_blank">
                    <h1 className="text-xl text-center font-bold">
                        e-commerce
                        <FaExternalLinkAlt className="ml-2 inline align-baseline" />
                    </h1>
                </a>
                <hr className="my-4" />
                <p className="">This project contains an e-commerce application created using React and TypeScript and developed with Zustand, a state management library.</p>
                <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                    <div className="px-4 py-1 border-2 rounded-full">React.tsx</div>
                </div>
            </div>
        </div>

    )
}

export default Projects