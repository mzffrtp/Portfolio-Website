import React from "react";
import {motion} from "framer-motion"
import { useSelector } from "react-redux";

export default function HomePage() {
    const isDarkMode = useSelector(state => state.themeState.darkMode)
    return (
        < div className={`${isDarkMode ? "bg-primary-light" : "bg-primary-dark"} min-h-screen relative z-10 px-3 overflow-hidden`}>
            <div
            >home Page
                <div className="w-full h-full">
                    <div>
                    <motion.img 
                    whileHover={{y: -10, x: -10, rotate:10, transition:{ duration: 0.4}}}
                    drag
                    dragConstraints= {{ top:0, left:0, right:0, bottom:0}}
                    className="md:block h-auto absolute top-48 right-10 z-1"
                    src="https://img.icons8.com/color/144/null/spyro.png" alt="dragon"/> 
                    </div>
                </div>
            </div>
        </div>
    )
}