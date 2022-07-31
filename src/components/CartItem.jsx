import React,{useContext} from "react";
import { AppContext } from "./context";
const CartItem = ({item}) => {

    const {manageCart} = useContext(AppContext)
    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={item.url} alt="item-image" style={{marginRight:"16px"}}width={50}/>
            </div>
            <div className="summary">
                <h6>{item.title}</h6>
                <h6 style={{color:'#B12704'}}>&#8377;{item.price}</h6>
            </div>
            <div>
                {item.quantity}
            </div>
            <button className="remove-btn" onClick={() => {manageCart('REMOVE',item,item.quantity)}}>Remove</button>
        </div>
    )
}

export default CartItem