import React from 'react'

export const Footer = () => {
  return (
    <div>
        
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-ccbblue border-t border-ccdblue shadow md:flex md:items-center md:justify-between dark:bg-zinc-900 dark:border-zinc-600">
            <span className="text-sm text-gray-700 sm:text-center dark:text-zinc-100"> <a href="https://www.instagram.com/p/CGKwQ98H7E-/" className="hover:underline">Cotton Candy</a> Estd. 2020 
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 dark:text-zinc-200 sm:mt-0">
                <li>
                    <a href="https://www.facebook.com/CottonCandy.RISH" className="mr-4 hover:underline md:mr-6">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cottoncandyrish/" className="mr-4 hover:underline md:mr-6">Instagram</a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@cottoncandydhk" className="hover:underline">TikTok</a>
                </li>
            </ul>
        </footer>

    </div>
  )
}
