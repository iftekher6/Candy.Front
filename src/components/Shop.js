
import CardInner from "./Card-Inner"

import { useAllProducts } from "../hooks/useProducts"


const Shop = ()=>{
    
   const {data} = useAllProducts()
      
    return(
<div className=" flex flex-col gap-2  p-2 border-[#CCC] b-l-1">
    {/* {data.length} products found */}
  <CardInner product={data}/>
 
    
</div>
    )
}

export default Shop