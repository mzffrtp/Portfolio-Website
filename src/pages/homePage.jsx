import React from "react";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import Typed from "react-typed";
import { Link, } from "react-router-dom";

export default function HomePage() {
    const isDarkMode = useSelector(state => state.themeState.darkMode)

    return (
        <div className={`${isDarkMode ? "bg-primary-light" : "bg-primary-dark text-white"} min-h-screen relative z-10 px-3 overflow-hidden`}>
            <div>
                <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
                    <div className="flex flex-col items-center justify-content-center md:items-start">
                        <h4 className="text-lg text-gray-400">
                            <span className="text-xl font-normal">Hello,</span>I´m</h4>
                        <h1 className="mt-5 text-xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3">Muzaffer Topgul</h1>
                        <div className="mt-5 text-2xl text-transparent  bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
                            <Typed
                                strings={[
                                    "Front-end Developer",
                                    "React Developer",
                                    "Dragon Lower",
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            />
                        </div>
                        <div className="flex items-center mt-4 space-x-6 md:mt-4">
                            <a
                                target={"_blank"}
                                href="https://www.linkedin.com/in/mzffrtp/">
                                <img
                                    className="fill-current transform scale-105 hover:scale-125"
                                    src="https://img.icons8.com/arcade/64/null/linkedin.png" /></a>
                            <a
                                href="https://github.com/mzffrtp?tab=repositories"
                                target={"_blank"}>
                                <img
                                    className="fill-current transform scale-105 hover:scale-125"
                                    src="https://img.icons8.com/arcade/64/null/github.png" /></a>
                        </div>
                    </div>
                    <article className="mt-3 md:mt-4">
                        <div>
                            <pre>
                                <code className="languge-js">
                                    <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                                        <span>
                                            // Portfolio.js
                                        </span>
                                    </div>
                                    <p>
                                        <span className="text-gray-500">//</span>{" "}
                                        <span className="text-purple-600">Todo:</span> You can fly my dragon.
                                        <br></br>
                                        <span className="text-gray-500">//</span>{" "}
                                        <span>You will realy get in love with it! 💚 🎠</span>
                                    </p>
                                    <div className="flex items-center space-x-4 my-3">
                                        <span className="text-4xl">🤹</span>

                                        <div className="">
                                            <p className="text-sm">
                                                <span className="text-pink-300"> {">"} </span> const
                                                tech = ["Reactjs", "Redux", "Redux Tool Kit", "Redux Thunk"];{" "}
                                            </p>
                                            <p className="text-sm">
                                                <span className="text-pink-300"> {">"} </span> const
                                                design = ["Bootstrap", "SASS", "Tailwind"];{" "}
                                            </p>
                                            <p className="text-sm">
                                                <span className="text-pink-300"> {">"} </span> const
                                                loading = ["Type Script"];{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-8">
                                        <Link
                                        to={""}
                                        >projects</Link>
                                    </div>
                                </code>
                            </pre>
                        </div>
                    </article>
                </section>
                <div className="w-full h-full">
                    <div>
                        <motion.img
                            whileHover={{ y: -10, x: -10, rotate: 10, transition: { duration: 0.4 } }}
                            drag
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            className="hidden md:block h-auto absolute top-40 right-20 z-1"
                            src="https://img.icons8.com/color/144/null/spyro.png" alt="dragon" />
                        <p className="hidden md:block text-end absolute top-80 right-10 text-pink-500 ">
                            <Typed
                                strings={[
                                    "Drag and drop me for a walk",
                                ]}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}