
import { useState } from 'react';
// import fa from 'react/ic'
import {FaCheck } from 'react-icons/fa'


const Filter = () =>{

    const contents = [{
      h1: 'Category',
      content: ['All','Category 2', 'Category 3'],
      input : <input type='checkbox' className="w-4 h-4 accent-blue-500"/>
    },{
      h1: 'Stock Status',
      content: ['In Stock', 'Out of Stock'],
      input : <input type='checkbox' className="w-4 h-4 accent-blue-500"/>
      
    },
    {
      h1: 'Size',
      content: [10,12,14,16,18],
      
    },
    {
      h1 : 'Color',
      content: ['#FFA800','#80FF00', 
        '#53D4AE','#203CD1','#FF00C7','#FF97DC','#084029',
        '#7C7C7C','#272727','#FFFFFF']
    }

  ]
  console.log(contents.map(content=> content.content))
    const [color, setColor] = useState(null)
    const [open, setOpen] = useState(false)

    // const colors = 
    // ['#FFA800','#80FF00', 
    //     '#53D4AE','#203CD1','#FF00C7','#FF97DC','#084029',
    //     '#7C7C7C','#272727','#FFFFFF']
    return(
        <div className="flex flex-col gap-2 mx-auto min-w-[200px] sm:max-w-sm overflow-hidden">
        <h1 className="font-[600] font-poppins text-[#292929] dark:text-white text-2xl border-[#CCC]  border-b-[1px]  pb-4">Filter</h1>
        {/* Category */}
        {contents.map(content=> (

        <div className="flex flex-col border-[#CCC]  border-b-[1px]  p-1 gap-1  rounded-md">
            <h1 className="text-[#292929] font-[400] dark:text-[#FFF] ">{content.h1}</h1>

<div className={`flex flex-wrap ${content.input  ? 'flex-col justify-center items-start': 'flex justify-start items-center'}  gap-2`}>
  {/* <input type="checkbox" id="allCheckbox" className="w-4 h-4 accent-blue-500`} /> */}
   {content.content.map((val, index)=> (
 
  <label htmlFor="allCheckbox" className={`text-md flex gap-1 justify-center items-center font-poppins font-[300] text-gray-700 dark:text-[#FFF]`}>
    {content.input}
    {content.h1 === 'Color' ? 
  ( <span onClick={()=> 
    {
      setColor(val)
      setOpen(prev=> !prev)
    }
 } className={`w-6 h-6 flex justify-center items-center border-[1px] border-[#7C7C7] rounded-full cursor-pointer` } style={{backgroundColor: val}}>{color === val && open &&  <FaCheck className='mx-auto h-3 text-ccpink'/>}</span>) : content.h1 === 'Size' ? <span className={`flex flex-col font-poppins font-[600] hover:bg-[#EBEBEB] border-[#E6E6E6] border-2 rounded-md px-5 py-[2px]` }>{val}</span>   :  <span className={`flex gap-1`}>{val}</span>  
  }
 
    </label>


   ))}
</div>


</div>
        ))}
{/* end of category */}


        </div>
    )
}

export default Filter