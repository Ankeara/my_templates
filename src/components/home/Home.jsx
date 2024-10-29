import { useState } from 'react'
import Navbar from "../navbar/Navbar"
import "./home.css"
import Mobile from '../../assets/mockup/mobile.jpg'
import Website from '../../assets/mockup/website.png'
import Database from '../../assets/mockup/database.png'
import { Link } from 'react-router-dom'

const TemplateCard = ({ to, title, imgSrc }) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / height) * -10; // reduced multiplier for a softer tilt
    const rotateY = (x / width) * 10; // reduced multiplier for a softer tilt

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <Link
      to={to}
      className="relative group flex items-center justify-center h-full rounded-lg bg-gray-200 overflow-hidden transition-transform duration-700 ease-out" // Increase duration and add ease-out
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
      }}
    >
      <div className="p-5 h-full w-full flex items-center justify-center">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg">
        <h2 className="text-white font-bold text-xl">{title}</h2>
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-90 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              MY TEMPLATES
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black">
              Some of the digital products that I worked on as side projects, explore and try it now
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#template"
              >
                Get Started
              </a>

              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2" id="template">
          <TemplateCard to="/mobile" title="Mobile Template" imgSrc={Mobile} />
          <TemplateCard to="/website" title="Website Template" imgSrc={Website} />
          <TemplateCard to="/database" title="Database Template" imgSrc={Database} />
        </div>
      </section>
    </>
  );
};

export default Home;
