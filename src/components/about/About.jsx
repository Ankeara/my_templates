import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Profile from "../../assets/mockup/profile.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <nav
        aria-label="Breadcrumb "
        className="flex items-center justify-center mt-5"
      >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 20.247 6-16.5"
              />
            </svg>
          </li>

          <li>
            <Link
              to="/mobile"
              href="#"
              className="block transition hover:text-gray-700"
            >
              {" "}
              Mobiles Template{" "}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 20.247 6-16.5"
              />
            </svg>
          </li>

          <li>
            <Link
              to="/website"
              href="#"
              className="block transition hover:text-gray-700"
            >
              {" "}
              Website Template{" "}
            </Link>
          </li>
        </ol>
      </nav>
      <section className="bg-white text-white flex items-center justify-center mt-10 mb-10">
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 ">
          <div className="flex items-center gap-4">
            <img
              alt=""
              src={Profile}
              className="size-16 rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-medium text-white">Hout Ankeara</h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a
                      href="https://www.figma.com/@houtankeara"
                      target="blank"
                      className="text-xs font-medium text-gray-300"
                    >
                      {" "}
                      Figma{" "}
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a
                      href="https://github.com/Ankeara/"
                      target="blank"
                      className="text-xs font-medium text-gray-300"
                    >
                      {" "}
                      GitHub{" "}
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a
                      href="https://porfoliome-host.vercel.app/"
                      target="blank"
                      className="text-xs font-medium text-gray-300"
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">About Me</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  Hi,I'm Hout Ankeara I design and develop services for
                  customers of all sizes, specializing in creating stylish,
                  modern websites, web services and online stores.
                </p>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">
                  My Side Projects
                </strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  I did passion side projects in the weekend, please take a look
                  you will love it (i hope).
                </p>
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default About;
