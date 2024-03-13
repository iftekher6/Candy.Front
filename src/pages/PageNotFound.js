import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import PageNotFoundImage from '../assets/images/backup2.png'

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found | CottonCandy`
  });

  return (
    <main>
      <section className='fkex fkex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-myaltyel font-bold my-10 dark:text-myyel'>404, Oops!</p>
          <div className='max-w-lg'>
            <img className='rounded' src="" alt="404 PNF" />
          </div>
        </div>

        <div className='flex justify-center my-4'> 
          <Link>
            <button className='w-64 text-stone-100 text-2xl bg-gradient-to-tr from-myyel to-yellow-700 rounded-lg py-2.5 mr-2 font-medium dark:text-stone-200'>
              Back To Home
            </button>
          </Link>
          
        </div>
      </section>
    </main>
  )
}
