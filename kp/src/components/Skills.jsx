import React, { useState } from 'react'

const Skills = () => {
  const [skills] = useState([
    {
      id: 1,
      name: "HTML",
      description:
        "HTML (HyperText Markup Language) is the backbone of all web pages. It structures content using elements and tags. Every website starts with HTML to define headers, paragraphs, links, and more."
    },
    {
      id: 2,
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) is used to style and visually arrange HTML content. It allows for responsive design, animations, and layout control. With CSS, websites become attractive and user-friendly."
    },
    {
      id: 3,
      name: "JavaScript",
      description:
        "JavaScript adds interactivity and dynamic behavior to websites. It powers form validations, animations, and user interactions. It runs in the browser and is essential for modern web development."
    },
    {
      id: 4,
      name: "React.js",
      description:
        "React is a JavaScript library for building fast, interactive UIs. It uses components for modular code and supports one-way data flow. React is ideal for building modern, scalable web apps."
    }
  ]);

  return (
    <div className='w-[98%] min-h-[75vh] rounded-[30px] bg-gradient-to-br from-purple-400 via-purple-400 to-pink-300 flex flex-col gap-[60px] p-4'>
      <div className='text-5xl font-bold text-purple-800 text-center animate-pulse'>
        Skills
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center '>
        {skills.map((ele) => (
          <div
            key={ele.id}
            className='  w-[90%] max-w-[300px] min-h-[320px] bg-purple-300 bg-opacity-90 rounded-[20px] border-[5px] border-pink-200 shadow-lg p-4 flex flex-col justify-start hover:scale-105 transition-transform duration-300 ease-in-out'
          >
            <h2 className='text-xl font-bold text-purple-700 mb-2 text-center'>{ele.name}</h2>
            <p className='text-[15px] text-gray-800 leading-relaxed'>
              {ele.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
