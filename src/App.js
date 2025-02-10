import './App.css';

import { Footer } from './components';

import { Header } from './components/Header';
import NewArrivals from './components/NewArrivals';
import SideBar from './components/Sidebar';

import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
    <div className='App min-h-screen w-full bg-[#fff] dark:text-white dark:bg-[#262626]'>
   
      <Header/> 
      <SideBar/>
      <AllRoutes/>
      
      <NewArrivals/>
   
      <Footer/>
    </div>
    
  );
    
}

export default App;
