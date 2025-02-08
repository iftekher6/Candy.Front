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
console.log(categories.map(data=> (
    console.log(twMerge("text-[#7A7A7A]", data.id && 'text-black'))

)))

const AllCategories = () =>{

    const [activeID, setActiveID] = useState(null)

    return(
        <section className="w-full flex flex-col justify-center items-center md:max-w-7xl  mx-auto gap-3">
         <h1 className="text-[#292929] justify-start text-2xl font-[700] font-poppins mb-4">ALL Categories</h1>
         <div  className="flex flex-wrap w-[99%] md:flex-row md:justify-center gap-3 mx-auto">
         {

           categories.map(data=> (
            
            <div tabIndex='0' key={data.id} className={`border-[#7A7A7A] border px-[90px] py-8 flex flex-col justify-center items-center gap-3 text-[#7A7A7A] transition-all duration-300 ease ${data.id ? 'focus:bg-ccpurple hover:bg-ccpurple focus:text-white': ''}`}>
                <img src={data.src} />
                <span >{data.name}</span>
                
            </div>
       

))
         }
         </div>

        </section>
    )
}

export default AllCategories;