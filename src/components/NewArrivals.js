import blackDress from '../assets/black-dress.png'
import bg from '../assets/bg.png'
const NewArrivals = ()=>{
    
    return(
    <section className='w-[90%] mt-10 mx-auto  sm:max-w-7xl h-[800px] sm:h-[900px] md:h-[550px] lg:h-[585px] '>
        <div className='relative '>
           
        <h1 className='font-[600] text-2xl whitespace-nowrap md:text-3xl mb-3 relative z-[100]'>New Arrivals</h1>
         <img src={bg} alt='bg' className='absolute bottom-1 w-[13rem] left-[-4px] '/>

        </div>
        {/* parent of the inner main sections */}
        <div className='flex flex-col md:flex-row gap-2  h-full md:h-[540px] overflow-hidden'>
         {/* left section desktop */}
         <div className='flex flex-col w-full md:w-1/2 h-[500px] md:h-full p-3 relative bg-ccpurple rounded-md  overflow-hidden'>
         <img src={blackDress} className='w-full h-auto hover:scale-110 transition-all duration-300 ease' alt='dress'/>
        <div className='absolute bottom-0 p-2 flex flex-col justify-start items-start'>

             <h1 className='font-inter font-[600] text-2xl text-white'>T-shirt</h1>
         <span className='font-poppins font-[400] text-md text-white'>Black and White T-shirt coming out on sale</span>
         <button className='font-poppins font-[500] text-white text-lg border-underline border-b-2'>Shop Now</button>
        </div>
         </div>
         {/* right section */}
         <div className='w-full md:w-1/2 h-full flex flex-col gap-2'>
         {/* top div */}
         <div className='bg-ccpink h-[250px] md:h-[350px] relative p-2 rounded-md overflow-hidden'>
         <img src={blackDress} className='w-[450px] relative top-[-60px] left-20 hover:scale-110 transition-all duration-300 ease' alt='dress'/>
         <div className='absolute bottom-0 p-2 flex flex-col justify-start items-start'>

             <h1 className='font-inter font-[600] text-2xl text-ccpurple'>T-shirt</h1>
         <span className='font-poppins font-[400] text-md text-ccpurple'>Black and White T-shirt coming out on sale</span>
         <button className='font-poppins font-[500] text-ccpurple text-lg border-ccpurple border-b-2'>Shop Now</button>
        </div>
         </div>
         {/* bottom two divs */}
         <div className='flex gap-2'>
         {/* first one */}
         <div className='bg-ccpurple rounded-md md:h-[280px] relative'>
         <img src={blackDress} className='w-full hover:scale-110 transition-all duration-300 ease' alt='dress'/>
         <div className='absolute bottom-0  p-2 flex flex-col gap-1 justify-start items-start'>
         <h1 className='font-inter font-[600] text-sm sm:text-2xl text-[#fff] '>T-shirt</h1>
         <span className='font-poppins font-[400] text-sm text-[#fff]'>Black and White T-shirt coming out on sale</span>
         <button className='font-poppins font-[500] text-[#fff] text-sm sm:text-md border-white border-b-[1px]'>Shop Now</button>
        </div>
         </div>
         {/* second one */}
         <div className='bg-ccpurple rounded-md md:h-[280px] relative'>
         <img src={blackDress} className='w-full hover:scale-110 transition-all duration-300 ease' alt='dress'/>
         <div className='absolute bottom-0 p-2 flex flex-col gap-1 justify-start items-start'>
         <h1 className='font-inter font-[600] text-sm sm:text-2xl text-[#fff]'>T-shirt</h1>
         <span className='font-poppins font-[400] text-sm text-[#fff]'>Black and White T-shirt coming out on sale</span>
         <button className='font-poppins font-[500] text-[#fff] text-sm sm:text-md border-white border-b-[1px]'>Shop Now</button>
        </div>
         </div>


         </div>
         </div>
        </div>
            
    </section>

)
}
export default NewArrivals;
            
         



