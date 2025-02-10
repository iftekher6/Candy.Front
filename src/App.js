import './App.css';

import { Footer } from './components';

import { Header } from './components/Header';
import NewArrivals from './components/NewArrivals';

import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
    <div className='App min-h-screen w-full bg-[#fff] dark:text-white dark:bg-zinc-950'>
   
      <Header/> 
      <AllRoutes/>
      
      <NewArrivals/>
   
      <Footer/>
    </div>
    
  );
    
}

export default App;
