import bkash from '../assets/bkash.svg'
import visa from '../assets/visa.svg'
import mastercard from '../assets/mastercard.svg'
import nagad from '../assets/nagad.svg'
import shirt from '../assets/checkshirt.png'
const Checkout = () => {
    return (
        <div className="sm:max-w-4xl flex flex-col sm:flex-row  gap-7 p-3 mx-auto mt-5">
            <div className="flex flex-col gap-3 md:w-1/2 ">
                <h1 className="text-3xl">Billing Details</h1>
                <form>
                <label for="name" class="block text-[#52525B] font-poppins font-[400] mb-2">Name:</label>
                <input type="text"  name="name"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " />

                <label for="cname" class="block text-[#52525B] font-poppins font-[400] mb-2">Company Name:</label>
                <input type="text"  name="cname"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " />
                <label for="name" class="block text-[#52525B] font-poppins font-[400] mb-2" >Street Address</label>
                <input type="text"  name="name"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " req/>
                <label for="name" class="block text-[#52525B] font-poppins font-[400] mb-2">Apartment, floor, etc. (optional)</label>
                <input type="text"  name="name"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " />
                <label for="name" class="block text-[#52525B] font-poppins font-[400] mb-2">Town/City</label>
                <input type="text"  name="name"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " />
                <label for="name" class="block text-[#52525B] font-poppins font-[400] mb-2">Phone Number</label>
                <input type="text"  name="name"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " />
                <label for="name" class="block text-[#52525B] font-poppins font-[400] mb-2">Email Address</label>
                <input type="text"  name="name"  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-[#52525B] " />
                </form>
            </div>
            {/* second portion */}
            <div className="flex flex-col p-5 border-[#B1B1B1] border-[1px] rounded-md md:w-1/2 h-[550px] md:h-[500px] md:mt-10">
                <div className="flex justify-around items-center bg-grey-500 mb-3 mt-5 ">
                    <div className='flex gap-3 justify-center items-center'>
                        <img src={shirt} className='w-[55px]' alt='product-image'/>
                    <span>T-shirt</span>
                    </div>
                    <span>350 BDT</span>
                </div>
                <div className="flex justify-around items-center bg-grey-500  ">
                    <div className='flex gap-3 justify-center items-center'>
                        <img src={shirt} className='w-[55px]' alt='product-image'/>
                    <span>T-shirt</span>
                    </div>
                    <span>350 BDT</span>
                </div>  
                

             <div className="flex flex-col gap-2">
            <div className="flex justify-between  mt-10">
                <span className='font-poppins text-lg'>Subtotal</span>
                <span className='font-poppins text-lg'>450 BDT</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className='font-poppins text-lg'>Shipping</span>
                <span className='font-poppins text-lg'>Free</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className='font-poppins text-lg'>Total</span>
                <span className='font-poppins text-lg'>500 BDT</span>
            </div>

            <div className="flex justify-between ">
                <div className='flex justify-center items-center gap-2'>

            <input type="checkbox" className="w-4 h-4 rounded-full border-[1px] border-grey-400 appearance-none"/>
            <label for="name" class=" text-[#52525B] font-poppins font-[400] ">Online</label>
                </div>
            <div className="flex gap-2">
                <img src={bkash} className='w-10' alt='mfs'/>
                <img src={visa} className='w-10' alt='mfs'/>
                <img src={mastercard} className='w-10' alt='mfs'/>
                <img src={nagad} className='w-10' alt='mfs'/>
            </div>
            </div>
            {/* cod */}
            <div className="flex justify-between">
                <div className='flex justify-center items-center gap-2'>

          
            <input type="checkbox" className="w-4 h-4 rounded-full border-[1px] border-grey-400 appearance-none"/>
            <label for="name" class=" text-[#52525B] font-poppins font-[400] ">Cash on delivery</label>
                </div>
          
            </div>
            <div className='flex flex-col md:flex-row gap-2 '>
         <input type='text' placeholder='Coupon Code' className='rounded-sm border-[#B8B8B8] p-2 border-[1px] sm:w-[17rem] h-12 md:w-full' />
         <button className='bg-ccpurple w-full md:w-[8rem]  px-4 md:px-6 whitespace-nowrap flex justify-center items-center text-white h-12 rounded-sm text-sm'>Apply Coupon</button>
        </div>
        {/*  */}
        <button className='bg-ccpurple px-3 py-3 text-white mt-2 rounded-sm'>Proceed to checkout</button>
             </div>
            </div>

        </div>

    )
}

export default Checkout;