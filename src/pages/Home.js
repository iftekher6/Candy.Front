import React, {  useContext, useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';
// import axios from 'axios'
import axios from '../api/axios';
import {  AuthContext, server } from '..';
// import { Suspense } from 'react';
// import {ErrorBoundary} from 'react-error-boundary'
// import { ErrorFallback } from '../components/Error';
// import Skeleton from '../components/Skeleton';
import LoadingSkeleton from '../components/LoadingSkeleten';
// import Pagination from '../components/Pagination';
import  InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from '../components/Skeleton';
// import { set } from 'mongoose';
import {Hearts } from 'react-loading-icons'
import useRefreshToken from '../hooks/useRefreshToken';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
// import { isAuthenticated } from '../../../backend/middleware/authentication';
// import useRefreshToken from '../hooks/useRefreshToken';
import spinner from '../assets/spinning-dots.svg'
import NewsLetter from '../components/NewsLetter';
import Breadcrumb from '../components/BreadCrumb';
import Filter from '../components/Filter';
import Banner from '../components/Banner';



export const Home = () => {
  
  useTitle("Home");
  
  // const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hasMore,setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  // const {IsAuthenticated ,auth} = useContext(AuthContext)
  const {isAuthenticated,setIsAuthenticated, auth, setProducts} = useContext(AuthContext)
  const {searchInput, setSearchInput} = useContext(AuthContext)

//  const handleInfiniteScrolling = ()=>{
//     if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
//       setPage(prev=> prev + 1)
//     }
//   }
  // useEffect((()=>{
  //   window.addEventListener('scroll',handleInfiniteScrolling)

  //   return ()=> window.removeEventListener('scroll', handleInfiniteScrolling)
     
    
  // }),[])
 const axiosPrivate = useAxiosPrivate()
 
 
//  const refresh =  useRefreshToken()


//  error? <Skeleton/> :
 return (

     <main className='max-w-7xl m-auto py-24 '>
      <section className='flex justify-center gap-2   flex-wrap '>
        <Banner/>
        <Card />
     

      </section>
      
    </main>
    
  
  )
}
