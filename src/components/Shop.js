import { Card } from "./Card"
import CardInner from "./Card-Inner"
import Filter from "./Filter"
import { useContext, useEffect } from "react"
import { AuthContext } from ".."
import { axiosPrivate } from "../api/axios"
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