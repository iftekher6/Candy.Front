
import shoes from '../assets/shoes.svg'
import bg from '../assets/bg.png'
import tshirts from '../assets/tshirts.svg'
import pants from '../assets/pants.svg'





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

    // const [activeID, setActiveID] = useState(null)

    return(
        <section className="flex flex-col justify-center w-[90%] sm:max-w-6xl  mx-auto gap-6 mb-[80px]">
          <div className='relative '>
           
           <h1 className='font-[600] text-2xl whitespace-nowrap md:text-3xl relative z-[100]'>All Categories</h1>
            <img src={bg} alt='bg' className='absolute bottom-1 w-[215px]'/>
   
           </div>
         <div className="flex flex-wrap gap-4 md:gap-[6px] sm:flex-row sm:justify-center md:flex-row md:justify-center  mx-auto">
         {

           categories.map(data=> (
            
            <div tabIndex='0' key={data.id} className={`w-[250px] mx-auto px-[40px]  py-3 flex justify-center items-center gap-3 text-[#7A7A7A] transition-all duration-300 ease shadow-category ${data.id ? 'focus:bg-ccpurple hover:bg-ccpurple focus:text-white': ''}`}>
                <img src={data.src} className='w-[80px]' alt={data.name} />
                <span className='dark:text-white'>{data.name}</span>
                
            </div>
       

))
         }
         </div>

        </section>
    )
}

export default AllCategories;