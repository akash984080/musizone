import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../Reducer/cartreducer'
const initialstate = {
    total: 0,
    cartlist: []
}

const cartcontext = createContext(initialstate)




export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialstate)

    const addtocart = (product) => {
        const updatedCart = state.cartlist.concat(product)
        updatecart(updatedCart)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const removecart = (products) => {
        const updatedcart = state.cartlist.filter(current => current.id !== products.id)
        updatecart(updatedcart)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedcart
            }
        })
    }

    const updatecart = (products) => {
        let total = 0
        products.forEach((product) => total = total + product.price)
        dispatch({
            type: "UPDATE_TO_CART",
            payload: {
                total
            }
        })
    }

    const value = {
        total: state.total,
        cartlist: state.cartlist,
        addtocart: addtocart,
        removecart: removecart,
        updatecart
    }


    return (
        <cartcontext.Provider value={value}>
            {children}
        </cartcontext.Provider>
    )
}


export const usecart = () => {
    const context = useContext(cartcontext)
    return context
}