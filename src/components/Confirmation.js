import Breadcrumb from "./BreadCrumb"
import confirmationtick from '../assets/confirmtick.svg'
const Confirmation = ()=>{
    return(
        <div className="sm:max-w-6xl mt-10  mx-auto">
        <Breadcrumb/>
     {/* main part  */}
     <div className="max-w-4xl flex flex-col justify-center items-center mx-auto gap-5">
        <img src={confirmationtick} className="w-[150px] h-auto"/>
       <div className="flex flex-col justify-center items-center">


        <h1 className="font-[600] text-[#292929] font-poppins text-lg">
            Your order is Complete!
        </h1>
        <span className="font-[400] font-poppins text-[#757575] text-sm">You will be receiving a confirmation email with order details.</span>
       </div>

        <button className="bg-ccpurple font-[600] font-poppins rounded-[50px] text-white py-3 px-4 text-sm">
            Go to the Home Page
        </button>

     </div>
        </div>
    )
}

export default Confirmation;