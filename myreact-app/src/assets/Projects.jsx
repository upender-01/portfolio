import React from 'react'
import Netfliximage from "../assets/netflix.png" ;
import Hospital from "../assets/hospital.png";
import Todo from "../assets/todo.png";
export const Projects = () => {
  return (
    <>
    <div className='flex  flex-col items-center'>
        <h1 className='text-3xl  font-extrabold '>Projects</h1>
        <div className=' flex flex-wrap gap-x-5 px-[1rem] py-[1rem] border-gray-200 shadow-lg shadow-gray-200 rounded-sm '>
            <div className='transform transition-all  duration-300 ease-in-out hover:-translate-y-2 shadow-lg h-max-fit w-[15rem] shadow-gray-100 p-1'>
                <img src={Netfliximage} alt="image-not found" className='object-contain '  />
                <h1 className='font-bold'>Netflix-clone</h1>
                 <a href="https://github.com/upender-01/Netflixclone-02" className='font-bold no-underline hover:text-red-700' >Github link</a>
                 <p className='text-sm font-serif font-semibold'>Tech Stack : Html, TailwindCss, js, Reactjs</p>
                 <p className='font-semibold'>Netflix-clone is user-friendly web pages with clean and Efficient code . </p>
            </div>
            <div className='transform transition-all  duration-150 ease-in-out hover:-translate-y-2 shadow-lg h-max-fit w-[15rem] shadow-gray-100 p-1'>
                <img src={Hospital} alt="image-not found" className='object-contain '  />
                <h1 className='font-bold'>Hospital-Management</h1>
                 <a href="https://github.com/upender-01/Hospital-management" className='font-bold no-underline hover:text-red-700 ' >Github link</a>
                 <a href="https://bherasociety.vercel.app/" className='font-bold no-underline hover:text-red-700 px-2'>Live demolink</a>
                 <p className='text-sm font-serif font-semibold'>Tech Stack : Reactjs, Nodejs, Mongodb, Expressjs, TailwindCss</p>
                 <p className='font-semibold'>Hospital-Management is a fully Responsive Web-pages with clean and Efficient Code . It is User-friendly Webpage . </p>
            </div>
            <div className='transform transition-all  duration-150 ease-in-out hover:-translate-y-2 shadow-lg h-max-fit w-[15rem] shadow-gray-100 p-1'>
                <img src={Todo} alt="image-not found" className='object-contain '  />
                <h1 className='font-bold'>Todo List</h1>
                 <a href="https://github.com/upender-01/Todo-List" className='font-bold no-underline hover:text-red-700' >Github link</a>
                 <p className='text-sm font-serif font-semibold'>Tech Stack : Html, TailwindCss, js</p>
                 <p className='font-semibold'>Todo-List is developed which is User-Friendly  and Responsive. . </p>
            </div>
        </div>
    </div>
    </>
  )
}
