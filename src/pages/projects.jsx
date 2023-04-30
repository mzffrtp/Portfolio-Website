import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { database } from "../firebase/firebase";

export default function Projects() {
    const isDarkMode = useSelector(state => state.themeState.darkMode)
    const [projects, setProjects] = useState ([])
    const databaseRef = collection(database, "database")

    useEffect(()=>{
        const queryDatabase = query(
            databaseRef,
            orderBy("id")
        );
        onSnapshot(queryDatabase, (snapshot) => {
            let projectsfromFirestore = [];
            snapshot.forEach((doc)=>{
                projectsfromFirestore.push({...doc.data()})
            })
            setProjects(projectsfromFirestore)
        })
    }, [])
    console.log(projects);
    return (
        <div className={`${isDarkMode ? "bg-primary-light" : "bg-primary-dark text-white"} min-h-screen relative z-10 px-3 overflow-hidden`}>
            <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
                <Link to={"/"}>
                    <div className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 hover:text-red-900">
                        ⬅️ <span className="ms-3">Back to Home</span>
                    </div>
                </Link>
                <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 border-2 border-white">
                <div>
                </div>
                </div>
            </section>
        </div>
    )
}