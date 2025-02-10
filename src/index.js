import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { ScrollToTop } from './components';
import {CartProvider} from './context/CartContext';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const server = 'https://cottoncandy-backend.onrender.com/api/v1'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, // 1 min cache
      cacheTime: 300000, // 5 min cache
      refetchOnWindowFocus: false,
    },
  },
});

export const AuthContext = createContext(null);

const AppWrapper = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [IsAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [user, setUser] = useState({});
  const [token,setToken] = useState('')
  const [auth, setAuth]= useState({})
  const [searchInput, setSearchInput] = useState('')
  const [productDetails, setProductDetails] = useState(null)
  const [products, setProducts] = useState([])
  const [sideBarOpen, setSideBarOpen] = useState(false)


  return (
   
       <Router>
       <ScrollToTop/>
       <QueryClientProvider client={queryClient}>
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
        setToken,
        auth,
        setAuth,
        searchInput, 
        setSearchInput,
        productDetails, setProductDetails,
        products, setProducts,
        sideBarOpen, setSideBarOpen
      }}
    >
      <App />
    </AuthContext.Provider>
    </CartProvider>
    </QueryClientProvider>
    </Router>
  
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
 </React.StrictMode>
);



