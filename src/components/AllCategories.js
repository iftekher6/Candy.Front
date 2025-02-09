import shoes from '../assets/shoes.svg'
import dress from '../assets/dress.svg'
import tshirts from '../assets/tshirts.svg'
import pants from '../assets/pants.svg'
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'
import { useState } from 'react'



const categories = [

{
    id: 1,
src: shoes,
 name : 'Shoes'

},

{   id: 2,
    src: pants,
 name : 'Dress'
},
{   id:3,
    src: tshirts,
 name : 'T-shirts'
},
  
{   id:4,
    src: pants,
    name : 'Pants'}
]

const AllCategories = () =>{

    const [activeID, setActiveID] = useState(null)

    return(
        <section className="flex flex-col justify-center   md:items-center  md:max-w-6xl  mx-auto gap-2 ">
         <h1 className="text-[#292929]  text-center   text-2xl font-[700] font-poppins mb-4">ALL Categories</h1>
         <div  className="flex flex-wrap gap-2 sm:flex-row sm:justify-center  md:w-[99%] md:flex-row md:justify-center  mx-auto">
         {

           categories.map(data=> (
            
            <div tabIndex='0' key={data.id} className={`w-[250px] mx-auto px-[40px]  py-3 flex justify-center items-center gap-3 text-[#7A7A7A] transition-all duration-300 ease shadow-category ${data.id ? 'focus:bg-ccpurple hover:bg-ccpurple focus:text-white': ''}`}>
                <img src={data.src} className='w-[80px]' />
                <span >{data.name}</span>
                
            </div>
       

))
         }
         </div>

        </section>
    )
}

export default AllCategories;