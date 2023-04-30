import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectCard from "../component/projectCard/projectCard";
import { fetchProjects } from "../redux/actions/projectsActions";


export default function Projects() {
    const isDarkMode = useSelector(state => state.themeState.darkMode)

    const projects = useSelector(state => state.projectsState.projects)
    console.log(projects);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    return (
        <div className={`${isDarkMode ? "bg-primary-light" : "bg-primary-dark text-white"} min-h-screen relative z-10 px-3 overflow-hidden`}>
            <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
                <Link to={"/"}>
                    <div className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 hover:text-red-900">
                        ⬅️ <span className="ms-3">Back to Home</span>
                    </div>
                </Link>
                <p className="text-center m-5 mt-1">Enjoy some of my projects here. To see more please visit my <Link className="text-red-500 text-xl font-black hover:text-lime-500"> GITHUB 👁</Link></p>
                <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 m-6">
                    {
                        projects.map((project, id)=>(
                            <ProjectCard key={id} project = {project}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}