import { useState } from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import DataMobile from './DataMobile';
import { Link } from 'react-router-dom';

const TemplateCard = ({ to, title, imgSrc, github, figma, website }) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / height) * -10;
    const rotateY = (x / width) * 10;

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <Link
      to={to}
      className="relative group flex items-center justify-center h-full rounded-lg bg-gray-200 overflow-hidden transition-transform duration-700 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
      }}
    >
      <div className="p-5 h-full w-full flex items-center justify-center">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg">
        <h2 className="text-white font-bold text-xl p-2">{title}</h2>
        <div className="inline-flex -space-x-px overflow-hidden rounded-md border bg-indigo-500 shadow-sm">
          {github !== "#" && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-white inline-block px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700 hover:rounded-sm focus:relative">
              GitHub
            </a>
          )}
          {figma !== "#" && (
            <a href={figma} target="_blank" rel="noopener noreferrer" className="text-white inline-block px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700 hover:rounded-sm focus:relative">
              Figma
            </a>
          )}
          {website !== "#" && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-white inline-block px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700 hover:rounded-sm focus:relative">
              Website
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

const Mobile = () => {
  return (
    <>
      <Navbar />
        <nav aria-label="Breadcrumb " className='flex items-center justify-center mt-5'>
        <ol className="flex items-center gap-1 text-sm text-gray-500 text-3xl font-bold">
          <li>
            <Link to="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
            </svg>
          </li>

          <li>
            <Link to="/mobile" href="#" className="block transition hover:text-gray-700"> Mobiles Template </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
            </svg>
          </li>

          <li>
            <Link to="/website" href="#" className="block transition hover:text-gray-700"> Website Template </Link>
          </li>
        </ol>
      </nav>
      <section className="bg-white text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2" id="template">
          {DataMobile.map((project) => (
            <TemplateCard 
              key={project.id} 
              to={project.figma}
              title={project.title} 
              imgSrc={project.image} 
              github={project.github}
              figma={project.figma}
              website={project.website}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mobile;
