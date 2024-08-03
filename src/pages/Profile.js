import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export const Profile = ()=> {

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
              .then(value=> setData(value.data))
            },[])

   const [searchValue, setSearchValue] = useState('')
   const [showValue, setShowValue] = useState([])
   const [data, setData] = useState([])

   const findData = data.filter(value => value.id === Number(searchValue))
    console.log(findData)



const handleOnChange = (e) =>{
    const {value} = e.target
    setSearchValue(value)
 
     setShowValue(findData)
    //  setShowValue(findData)
       
    }
  
  
  return (
  <>
  
  <input className="ml-5" type="search" value={searchValue} onChange={handleOnChange} />  
 <label className="ml-2">Search</label>
{findData.map(value=> (
    <p key={value.id}>
        {value.title}
        <img src={value.thumbnailUrl} />
    </p>
    
))}
  
  
  </> 

)
}
