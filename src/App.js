import './App.css';
import { Footer } from './components';
import { Header } from './components/Header';
import SideBar from './components/Sidebar';
import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
    <div className='App min-h-screen w-full bg-[#fff] dark:text-white dark:bg-[#262626]'>
   
      <Header/> 
      <SideBar/>
      <AllRoutes/>
      <Footer/>
    </div>
    
  );
    
}

export default App;
