
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';
// import {  AuthContext} from '..';

// import useAxiosPrivate from '../hooks/useAxiosPrivate';


import Banner from '../components/Banner';
import BestSelling from '../components/BestSelling';
import NewArrivals from '../components/NewArrivals';



export const Home = () => {
  
  useTitle("Home");
  
  // const [products, setProducts] = useState([])

  // const [page, setPage] = useState(1)
  // const {IsAuthenticated ,auth} = useContext(AuthContext)



//  const handleInfiniteScrolling = ()=>{
//     if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
//       setPage(prev=> prev + 1)
//     }
//   }
  // useEffect((()=>{
  //   window.addEventListener('scroll',handleInfiniteScrolling)

  //   return ()=> window.removeEventListener('scroll', handleInfiniteScrolling)
     
    
  // }),[])
//  const axiosPrivate = useAxiosPrivate()
 
 
//  const refresh =  useRefreshToken()


//  error? <Skeleton/> :
 return (

     <main className='max-w-7xl m-auto py-24 '>
      <section className='flex justify-center gap-2   flex-wrap '>
        <Banner/>
        <Card />
        <BestSelling/>
        <NewArrivals/>
     

      </section>
      
    </main>
    
  
  )
}
