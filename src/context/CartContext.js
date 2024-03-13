import { createContext, useContext, useEffect, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";
// import { Navigate } from "react-router-dom";

const initialState = {
    cartList:[],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

  

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList);

        localStorage.setItem('cartData', JSON.stringify(updatedCartList))

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }
   
    useEffect(() => {
        // Load cart data from localStorage on component mount
        const storedCartData = localStorage.getItem('cartData');
        if (storedCartData) {
          const parsedCartData = JSON.parse(storedCartData);
          
          dispatch({
            type: "ADD_TO_CART",
            payload: {
              products: parsedCartData,
            },
          });
          updateTotal(parsedCartData);
        }
      }, [])

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current._id !== product._id);
        updateTotal(updatedCartList);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total+ product.price)

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }
    

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
     
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}