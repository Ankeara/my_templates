import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <>
     <footer className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
         <Link to="/" className="flex flex-shrink-0 items-center">
              <h1 className='text-sky-500 font-bold text-lg cursor-pointer hover:text-white'>Templates</h1>
            </Link>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer> 
    </>
  )
}

export default footer
