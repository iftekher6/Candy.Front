import { Routes,Route } from "react-router-dom";
import { Home, Shop, Cart, ItemDetail, Premium, Review, Thrift, NFA, Search, PageNotFound, About } from "../pages";
import Admin from "../pages/Admin";
import {AdminLogin} from "../pages/AdminLogin"
import { Login } from "../pages/Login";
import {Register} from '../pages/Register'
// import { Random } from "../pages/Random";
import Users from "../components/Users";
import RequireAuth from "../components/RequireAuth";
// import { Profile } from "../pages/Profile";
import {Profile}  from "../pages/Profile.js";
import ProductPage from "../pages/ProductPage.js";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>

            {/* <Route element={<RequireAuth allowedRoles={['user']}/>} > */}
            <Route path="/" element={<Home title="Home" />} />
            <Route path="/profile" element={<Profile title="Profile"/>} />
            <Route path="/productPage/:name" element={<ProductPage title="ProductPage"/>} />
            
            <Route path="/user" element={<Users title ="User"/>} />
            <Route path="/register" element={<Register title="Register" />} />
          
         
            <Route path="/adminLogin"  element={<AdminLogin title="AdminLogin" />}/>
            <Route path="/shop" element={<Shop title="Shop" />} />
            <Route path="/cart" element={<Cart title="Cart" />} />
            {/* </Route> */}
            <Route path="/login" element={<Login title="Login" />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/item/premium" element={<Premium title="Popular"/>} />
            <Route path="/item/thrift" element={<Thrift title="Top Rated"/>} />
            <Route path="/item/nfa" element={<NFA title="Upcoming"/>} />
            <Route path="/about" element={<About title="About" />} />
            <Route path="/review" element={<Review title="Review" />} />
            <Route path="search" element={<Search apiPath="search/item" />} />
            <Route path="*" element={<PageNotFound />} />
            <Route element={<RequireAuth allowedRoles={['admin']}/>} >
            <Route path="/admin"  element={<Admin title="Admin" />}/>
           
          
            </Route>
        </Routes>
    </div>
  )
}
