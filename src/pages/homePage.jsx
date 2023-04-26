import React from "react";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import Typed from "react-typed"

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
                    </div>
                </section>
                <div className="w-full h-full">
                    <div>
                        <motion.img
                            whileHover={{ y: -10, x: -10, rotate: 10, transition: { duration: 0.4 } }}
                            drag
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            className="md:block h-auto absolute top-50 right-20 z-1"
                            src="https://img.icons8.com/color/144/null/spyro.png" alt="dragon" />
                            <p className="text-end absolute top-80 right-10 ">
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