import React, { useState } from 'react'
import { works } from '../assets/assets'




function ProjectCard({ project }) {
  const [activeImg, setActiveImg] = useState(0);

  return(
    <div className='bg-white border border-gray-100 rounded overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300'>

       {/* Image viewer */}
      <div className="relative overflow-hidden aspect-video bg-gray-100">
        <img src={project.images?.[activeImg]} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />

        {/* Dots — only show if more than one image */}
        {project.images?.length > 1 && (
          <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5'>
            {project.images.map((_, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${i === activeImg ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className='flex flex-col cursor-pointer p-6 gap-3 flex-1'>
        {/* Live site link */}
        <a href={project.link} target="_blank" rel='noopener noreferrer' className="inline-flex items-center gap-1 text-[11px] tracking-widest uppercase text-gray-400 font-mono hover:text-gray-900 transition-colors duration-200 w-fit">
          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 10L10 2M10 2H5M10 2V7" />
          </svg>
          {project.link.replace("https://", "")}
        </a>

        {/* Title */}
        <h2 className='font-merriweather text-xl cursor-pointer font-semibold text-gray-900 leading-snug'>
          {project.title}
        </h2>

        {/* Description */}
        <p className='font-edu text-sm text-gray-500 cursor-pointer leading-relaxed flex-1'>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 pt-1'>
          {project.tech.map((t) => (
            <span key={t} className='text-[11px] font-edu cursor-pointer tracking-wide text-gray-400 border border-gray-200 rounded-sm px-2.5 py-1'> {t} </span>
          ))}
        </div>

      </div>
    </div>
  );
}

const Works = () => {
  return (
    <div className='min-h-screen bg-stone-50 px-6 md:px-20 py-20 max-w-6xl mx-auto'>

      {/* Header */}
      <header className='mb-16'>
        <p className='text-[11px] tracking-[0.14em] uppercase text-gray-400 font-benchnine mb-3'>
          My projects
        </p>
        <h1 className='font-merriweather text-5xl font-normal max-w-sm leading-tight text-gray-900'>
          Projects I've <br />brought to life.
        </h1>
        <div className='w-10 h-px bg-gray-200 mt-7' />
      </header>

      {/* Two column grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
        {works.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* footer */}
      <p className='t-20 text-xs text-gray-900 font-benchnine tracking-wide'>

        <br />
        More Works Upon Request
      </p>


    </div>
  );
};

export default Works;
