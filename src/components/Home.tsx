import Header from "./Header";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import PortfolioImg from '../assets/Portfolio.jpg';
import Projects from "./Projects";


function Home() {
    return (
        <div>
            <Header />
            <div className="w-full">
                <div className="flex flex-col mt-10 justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5">
                    <div className="">
                        <img className="w-32 mx-auto shadow-2xl rounded-full"
                            src={PortfolioImg}
                            alt="Profile face" />
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Mert Çetin
                        </p>
                        <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                            Since 2022, I am a self-motivated and enthusiastic software developer. I want to be a good player who pursues a common goal, makes the team great. I always strive to reach the highest possible standard.
                        </p>
                        <div className="flex align-center justify-center mt-4">
                            <a
                                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                                href='https://github.com/mertcetiin' target="e_blank">
                                <FaGithub />
                                <span className="sr-only">Github</span>
                            </a>
                            <a
                                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300"
                                href='https://www.linkedin.com/in/mert-çetin-219b671b0/' target="e_blank">
                                <FaLinkedin />
                                <span className="sr-only">Linkedın</span>
                            </a>
                            <a
                                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                                href='https://twitter.com/merttcettin' target="e_blank">
                                <FaTwitter />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=" target="e_blank">
                                <FaRegEnvelope />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Projects />
        </div>
    )
}

export default Home;