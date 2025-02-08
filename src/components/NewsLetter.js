import NewsletterShape from '../assets/newsletterShape.svg'
import NewsletterShape2 from '../assets/newsletterShape-2.svg'
const NewsLetter = ()=>{

    return(
        <section className="w-[80%] relative md:max-w-7xl mx-auto bg-ccpurple flex flex-col justify-center 
        items-center p-[52px] gap-5 rounded-lg mt-5 mb-3">
            <img className="absolute left-0 top-0 " src={NewsletterShape} />
            <img src={NewsletterShape2}  className="absolute right-0 bottom-0 "/>
            <div className="mb-4">
                <h1 className="text-[#FFFFFF] font-poppins text-xl md:text-[28px] font-[600]">Subscribe to our newsletter</h1>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="First Name" className="w-[120px] md:w-[200px] border border-[#FFFFFF]  p-2 bg-transparent outline-none"/>
                <input type="text" placeholder="Email" className="w-[120px] md:w-[200px] border-[#FFFFFF] p-2 bg-transparent border outline-none"/>
                <button className="bg-ccpink rounded-[5px] w-[100px]  text-[12px]  font-[500]  text-ccpurple z-10">Subscribe Now</button>
            </div>

           
        </section>
    )
}

export default NewsLetter;