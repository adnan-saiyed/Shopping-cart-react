import React,{ useContext,useState } from "react";
import { AppContext } from "./context";
import CartItem from "./CartItem";
import CartIcon from "./CartIcon";
const Cart = () => {
    const {cart,cost} = useContext(AppContext)
    const [click,setClick] = useState(false)
    
    return (
        <div className="cart-container" style={{height: "500px"}}>
            <CartIcon props = {{click,setClick}}/>
            <h3>Total cost : &#8377;{cost}</h3>
            {
                cart.map(item => <CartItem item={item} key={item.id}/>)
            }
        </div>
        
    )
}

export default Cart