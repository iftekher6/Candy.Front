import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { ScrollToTop } from './components';
import {CartProvider} from './context/CartContext';

export const server = 'https://cottoncandy-backend.onrender.com/api/v1'

export const AuthContext = createContext(null);

const AppWrapper = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [IsAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [user, setUser] = useState({});
  const [token,setToken] = useState('')


  return (
   
       <Router>
       <ScrollToTop/>
       <CartProvider>
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        IsAdminAuthenticated,
        setIsAdminAuthenticated,
        token,
        setToken
      }}
    >
      <App />
    </AuthContext.Provider>
    </CartProvider>
    </Router>
  
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
 </React.StrictMode>
);



