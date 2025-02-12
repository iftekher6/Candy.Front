import { Link } from "react-router-dom";
import { useAllProducts } from "../hooks/useProducts";
import CardInner from "./Card-Inner"
import bg from '../assets/bg.png'

const BestSelling = ()=>{
   const {data} = useAllProducts()
    return(
        <div className="w-[90%] gap-2 gap-y-4 sm:max-w-7xl flex h-[400px] flex-col  overflow-hidden">
            <div className="flex justify-between items-end">

            <div className='relative '>
           
           <h1 className='font-[600] text-2xl whitespace-nowrap md:text-3xl relative z-[100]'>Best Selling</h1>
            <img src={bg} alt='bg' className='absolute bottom-1 w-[420px]'/>
   
           </div>

           <Link to={'/shop'}>
           
           <div  className='flex gap-1'>
        
        <span className='underline text-[#525252] font-poppins font-[500]'>View All</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 12H16.25L11 6.75L11.66 6L18.16 12.5L11.66 19L11 18.25L16.25 13H4V12Z" fill="#525252"/>
</svg>
       </div>
           </Link>
            </div>
         <CardInner product={data}/>

        </div>
    )
}
export default BestSelling;