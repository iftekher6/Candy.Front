import './App.css';
import { Footer } from './components';
// import { Header3 } from './components';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';
// import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='App h-auto bg-ccbg dark:text-white dark:bg-zinc-950'>
    {/* <Header3/> */}
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
    
  );
    
}

export default App;
