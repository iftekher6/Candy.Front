import './App.css';
import { Footer } from './components';
import AllCategories from './components/AllCategories';
import { Header } from './components/Header';
import NewArrivals from './components/NewArrivals';
// const {}
import NewsLetter from './components/NewsLetter';
import { AllRoutes } from './routes/AllRoutes';
// import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='App min-h-screen  bg-[#fff] dark:text-white dark:bg-zinc-950'>
   
      <Header/>
      <AllRoutes/>
      <AllCategories/>
      <NewArrivals/>
      {/* <CardInners/> */}
      {/* <NewsLetter/> */}
      <Footer/>
    </div>
    
  );
    
}

export default App;
