
import { useState } from 'react';
// import fa from 'react/ic'
import {FaCheck , FaArrowDown,FaArrowUp} from 'react-icons/fa'


const Filter = () =>{
   
    const [color, setColor] = useState(null)
    const [arrowClicked, setArrowClicked] = useState(false)
    console.log('color:', color)
    const colors = 
    ['#FFA800','#80FF00', 
        '#53D4AE','#203CD1','#FF00C7','#FF97DC','#084029',
        '#7C7C7C','#272727','#FFFFFF']
    return(
        <div className="flex flex-col gap-2 mx-auto sm:max-w-[230px] ">
        <h1 className="font-[600] font-poppins text-[#292929] text-2xl border-[#CCC]  border-b-[1px] p-1">Filter</h1>
        {/* Category */}
        <div className="flex flex-col border-[#CCC]  border-b-[1px]  hover:bg-slate-300 p-1 rounded-md">
            <h1 className="text-[#292929] font-[400] ">Category</h1>

<div className="flex items-center gap-2">
  <input type="checkbox" id="allCheckbox" className="w-4 h-4 accent-blue-500" />
  <label htmlFor="allCheckbox" className="text-md font-medium text-gray-700">ALL</label>
</div>
<div className="flex items-center gap-2">
  <input type="checkbox" id="allCheckbox" className="w-4 h-4 accent-blue-500" />
  <label htmlFor="allCheckbox" className="text-md font-medium text-gray-700">Category 2</label>
</div>
<div className="flex items-center gap-2">
  <input type="checkbox" id="allCheckbox" className="w-4 h-4 accent-blue-500" />
  <label htmlFor="allCheckbox" className="text-md font-medium text-gray-700">Category 3</label>
</div>
<div className="flex items-center gap-2">
  <input type="checkbox" id="allCheckbox" className="w-4 h-4 accent-blue-500" />
  <label htmlFor="allCheckbox" className="text-md font-medium text-gray-700">Category 4</label>
</div>
</div>
{/* end of category */}
<div className="flex flex-col border-[#CCC]  border-b-[1px]  hover:bg-slate-300 p-1 rounded-md">
    <h1>Stock Status</h1>
    <div className="flex items-center gap-2">
  <input type="checkbox" id="allCheckbox" className="w-4 h-4 accent-blue-500" />
  <label htmlFor="allCheckbox" className="text-md font-medium text-gray-700">In Stock</label>
</div>
<div className="flex items-center gap-2 ">

  <label htmlFor="allCheckbox" className="text-md font-medium text-gray-700">Out of Stock       </label>
</div> 
    
</div> 
{/* end of Stock Status  */}
{/* Size */}
<div className="flex flex-col border-[#CCC]  border-b-[1px]  hover:bg-slate-300 p-1 rounded-md">
    <h1 className='flex justify-between items-center' 
    onClick={()=> setArrowClicked((prev)=> !prev)}>
        Size 
        {arrowClicked ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.1207 9.29L12.0007 13.17L15.8807 9.29C16.2707 8.9 16.9007 8.9 17.2907 9.29C17.6807 9.68 17.6807 10.31 17.2907 10.7L12.7007 15.29C12.3107 15.68 11.6807 15.68 11.2907 15.29L6.7007 10.7C6.3107 10.31 6.3107 9.68 6.7007 9.29C7.0907 8.91 7.7307 8.9 8.1207 9.29Z" fill="#7C7C7C"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.1207 14.71L12.0007 10.83L15.8807 14.71C16.2707 15.1 16.9007 15.1 17.2907 14.71C17.6807 14.32 17.6807 13.69 17.2907 13.3L12.7007 8.71C12.3107 8.32 11.6807 8.32 11.2907 8.71L6.7007 13.3C6.3107 13.69 6.3107 14.32 6.7007 14.71C7.0907 15.09 7.7307 15.1 8.1207 14.71Z" fill="#7C7C7C"/>
</svg>}
        </h1>

</div>
{/* end of size */}
<div className="flex flex-col border-[#CCC]  border-b-[1px] p-1">
    <h1>Color</h1>
    <div className='flex flex-wrap w-[220px] gap-2'>
    {colors.map((curColor, index)=>(

      <button onClick={()=> setColor(curColor)} 
      
      className={`w-6 h-6  border-[1px] border-[#7C7C7] rounded-full cursor-pointer` } 
      style={{backgroundColor: curColor}}>
        {curColor === color ? <FaCheck className='mx-auto w-3'/> : null}
      </button>
     

    ))}
  
    </div>

</div>
        

        </div>
    )
}

export default Filter