import Breadcrumb from "../components/BreadCrumb";
import Filter from "../components/Filter";
import Shop from "../components/Shop";

const ShopPage = ()=>{

    return (
     <div className="flex gap-[60px] w-full sm:gap-[60px] sm:max-w-6xl mx-auto p-4  sm:p-10">
        <div className="w-[30%]">
        <Filter/>

        </div>
        <div className="flex flex-col w-[70%]">
        <Breadcrumb/>
        <Shop/>
    
        </div>
     </div>
    )
}

export default ShopPage;