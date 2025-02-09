import { Card } from "./Card"
import CardInner from "./Card-Inner"
import Filter from "./Filter"
import { useContext, useEffect } from "react"
import { AuthContext } from ".."
import { axiosPrivate } from "../api/axios"


const Shop = ()=>{
     const {isAuthenticated,setIsAuthenticated, auth,products, setProducts} = useContext(AuthContext)
     console.log(products, 'prods')
   const getCardData = async () =>{
   
        try {
            
            // setLoading(true)
            const response = await axiosPrivate.get(`/api/v1/products/get`)
            console.log(response, 'dataashop')
            // console.log(data.pagination)
           
              setProducts(response.data)
           
            
            // setLoading(false)
            // console.log(data.pagination)
           
          
            
            
        } catch (error) { 
          console.log(error)
        //   setError(true)
        //   setLoading(true)
        } 
        
        }
        useEffect(()=>{
            getCardData()
        },[])
      
    return(
<div className=" flex flex-col gap-2  p-2 border-[#CCC] b-l-1">
    {products.length} products found
  <CardInner product={products}/>
 
    
</div>
    )
}

export default Shop