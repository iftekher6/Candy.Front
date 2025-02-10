import './App.css';

import { Footer } from './components';
import AllCategories from './components/AllCategories';
import { Header } from './components/Header';
import NewArrivals from './components/NewArrivals';
// const {}
import NewsLetter from './components/NewsLetter';
import { AllRoutes } from './routes/AllRoutes';
import Filter from './components/Filter';
// import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='App min-h-screen w-full bg-[#fff] dark:text-white dark:bg-zinc-950'>
   
      <Header/> 
      <AllRoutes/>
      {/* <AllCategories/> */}
      {/* <NewArrivals/> */}
      {/* <Filter/>   */}
 
      {/* <CardInners/> */}
      {/* <NewsLetter/> */}
      <Footer/>
    </div>
    
  );
    
}

export default App;
