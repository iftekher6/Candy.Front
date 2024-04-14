import React from "react";
import Skeleton from "./Skeleton";


const LoadingSkeleton= () =>{
    return (
       <>
          {[...Array(12)].map((_, i) => (
        <Skeleton key={i}/>
    
      ))}
       </>
       
     
   
      );
}

export default LoadingSkeleton