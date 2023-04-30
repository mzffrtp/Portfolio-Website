import React from "react";
import { motion } from "framer-motion";


export default function ProjectCard({
  project: { description, id, img, source, tags, title }
}) {
  return (
    <>
      <motion.a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1 hover:cursor-pointer shadow-lg"
        whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
      >
        <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-900 p-3">
          <div className="flex flex-col items-center space-y-4 ">
            <img
              src={img}
              alt={"project_image"}
              className="object-cover w-full rounded-lg h-64"
            />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-orange-300">
              {title}
            </h2>
            <p className="text-md text-lime-400 h-20 text-justify">{description}</p>
            <div className="flex flex-wrap justify-center space-x-4 max-h-24">
              {tags.map((tag, key) => (
                <span
                  key={key}
                  className="inline-flex items-center justify-center p-2 text-xs font-bold leading-none text-pink-100 bg-pink-700 rounded h-8 my-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </>

  )
}