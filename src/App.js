import { useContext, useEffect } from 'react';
import './App.css';
import { Footer } from './components';
// import { Header3 } from './components';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';
import { AuthContext } from '.';
import axios from 'axios';

function App() {
   const {isAuthenticated,setIsAuthenticated,setUser,user,isAdminAuthenticated,setToken} = useContext(AuthContext)


  //  useEffect(() => {
  
  //  if(!isAdminAuthenticated) {
  //   axios
  //     .get(`http://localhost:8000/api/v1/users/get`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res.data.user)
  //       // setIsAuthenticated(true);
  //       setUser(res.data.user)
       
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       // setIsAuthenticated(false);
  //       setUser({})
     
  //     });
    
  //  }
      
   
  // }, [isAdminAuthenticated]);

  return (
    <div className='App bg-ccbg dark:text-white dark:bg-zinc-950'>
      {/* <Header3/> */}
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
