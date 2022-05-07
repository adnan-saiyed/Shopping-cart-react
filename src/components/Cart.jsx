import React,{ useContext } from "react";
import { AppContext } from "./context";
import CartItem from "./CartItem";
const Cart = () => {
    const {cart,cost,totalItems} = useContext(AppContext)
    console.log(cart)
    return (
        <div className="cart">
            <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt="Cart image" width={80}className="cart-img"></img>
            <span className="total-indicator">{totalItems}</span>
            <h3>Total cost: &#8377;{cost}</h3>
            
            {
                cart.map(item => <CartItem item={item} key={item.id}/>)
            }
        </div>
        
    )
}

export default Cart