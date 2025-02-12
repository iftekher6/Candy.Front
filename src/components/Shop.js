
import CardInner from "./Card-Inner"

import { useAllProducts } from "../hooks/useProducts"


const Shop = ()=>{
    
   const {data} = useAllProducts()
      
    return(
<div >
    {/* {data.length} products found */}
  <CardInner product={data}/>
 
    
</div>
    )
}

export default Shop