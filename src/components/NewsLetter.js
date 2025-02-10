import NewsletterShape from '../assets/newsletterShape.svg'
import NewsletterShape2 from '../assets/newsletterShape-2.svg'
const NewsLetter = ()=>{

    return(
        <section className="w-[95%] relative sm:max-w-6xl md:max-w-7xl  mx-auto bg-ccpurple flex flex-col justify-center 
        items-center p-[52px] gap-5 rounded-lg mt-5 mb-3 overflow-hidden    ">
            <img className="absolute left-0 top-0 " src={NewsletterShape}  alt='icons'/>
            <img src={NewsletterShape2}  className="absolute right-0 bottom-0"alt='icons'/>
            <div className="mb-4">
                <h1 className="text-[#FFFFFF] font-poppins text-center text-lg sm:text-xl md:text-[28px] font-[600]">Subscribe to our newsletter</h1>
            </div>
            <div className="flex flex-col sm:flex-row  gap-2 ">
                <div className='flex flex-col gap-2 sm:flex-row'>
                <input type="text" placeholder="First Name" className=" sm:w-[120px] md:w-[200px] border border-[#FFFFFF]  p-2 bg-transparent outline-none"/>
                <input type="text" placeholder="Email" className=" sm:w-[120px]  md:w-[200px] border-[#FFFFFF] p-2 bg-transparent border outline-none"/>

                <button className="bg-ccpink font-poppins font-[600] text-ccpurple text-[.8rem]  max-w-[120px] rounded-sm p-3 whitespace-nowrap  outline-none ">Subscribe Now</button>
                </div>
            </div>

           
        </section>
    )
}

export default NewsLetter;