import React from 'react'
import { useTitle } from '../hooks/useTitle';
import Rifad from '../assets/Rifad.png'
import Sharika from '../assets/Sharika.png'

import { Link } from 'react-router-dom';


export const About = () => {
  useTitle("About");
  return (
    <div  className='max-w-full min-h-screen pb-24'>
      <div className="flex justify-center flex-wrap">

            <div className="max-w-full border rounded p-3 m-2">
              <div className='flex mx-auto'>
                <div className='basis-[30%]'>
                  
                  <img className=" rounded-md min-w-80 min-h-80 object-cover object-center" src={Sharika} alt=""/>
                  <h1 className="text-2xl mt-5 abso top-0">Sumaiya Fahmida Sharika</h1>
                  <p className="sm">Owner</p>
                </div>
                <div className='pl-4 basis-[70%]'>  
                  <div>
                    <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                  </div>            
                  <div>
                    <div className='action pt-4 flex justify-between place-items-center'>
                      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <p className='pr-6'>My Social: </p>
                        <li>
                            <Link to="https://www.facebook.com/immaculate.sharika" className="mr-4 hover:underline md:mr-6">Facebook</Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/shundorika" className="mr-4 hover:underline md:mr-6">Instagram</Link>
                        </li>
                        <li>
                            <Link to="https://www.tiktok.com/@cottoncandydhk" className="hover:underline">TikTok</Link>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>  
          </div>

          <div className="max-w-full border rounded p-3 m-2">
              <div className='flex mx-auto'>
                <div className='basis-[30%]'>
                  <img className=" rounded-md min-w-80 min-h-80 object-cover object-center" src={Rifad} alt=""/>
                  <h1 className="text-2xl mt-5 abso top-0">Rifad Ul Islam</h1>
                  <p className="sm">Owner</p>
                </div>
                <div className='pl-4 basis-[70%]'>  
                  <div>
                    <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                  </div>            
                  <div>
                    <div className='action pt-4 flex justify-between place-items-center'>
                      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <p className='pr-6'>My Social: </p>
                        <li>
                            <Link to="https://www.facebook.com/riifaad" className="mr-4 hover:underline md:mr-6">Facebook</Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/riifaad/" className="mr-4 hover:underline md:mr-6">Instagram</Link>
                        </li>
                        <li>
                            <Link to="https://www.tiktok.com/@cottoncandydhk" className="hover:underline">TikTok</Link>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>  
          </div>
            
        </div>
    </div>
  )
}


