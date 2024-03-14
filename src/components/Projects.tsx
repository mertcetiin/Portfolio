import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "./Data";


function Projects() {
    return (
        <div>
            <h1 id="projects" className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
            {projectsData.map((item, index) =>
                <div key={index} className="group w-full sm:w-1/2 m-4 mt-10 mx-auto p-6 rounded-xl border-2 border-gray-300">
                    <a href={item.link} target="e_blank">
                        <h1 className="text-xl text-center font-bold">
                            {item.name}
                            <FaExternalLinkAlt className="ml-2 inline align-baseline" />
                        </h1>
                    </a>
                    <hr className="my-4" />
                    <p className="">{item.info}</p>
                    <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                        <div className="px-4 py-1 border-2 rounded-full">{item.skill}</div>
                        <div className="px-4 py-1 border-2 rounded-full">{item.skill2}</div>
                        {item.skill3 && (
                            <div className="px-4 py-1 border-2 rounded-full">{item.skill3}</div>
                        )}
                        {item.skill4 && (
                            <div className="px-4 py-1 border-2 rounded-full">{item.skill4}</div>
                        )}
                    </div>
                </div>
            )}


        </div>

    )
}

export default Projects