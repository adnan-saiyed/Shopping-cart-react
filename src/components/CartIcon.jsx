import React,{useContext} from "react"
import { AppContext } from "./context"
const CartIcon = ({props}) => {
    const {click,setClick} = props
    const {totalItems} = useContext(AppContext)
    return (
        <div className="cart-icon" onClick={() => {setClick(!click)}}>
            <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-212/512/7_online_shopping-512.png" alt="Cart image" width={60}className="cart-img"></img>
            <div className="total-indicator">{totalItems}</div>
        </div>
        
    )
}

export default CartIcon