import React,{useContext, useState} from "react";
import { AppContext } from "./context";
const Card = ({item}) => {
    const {manageCart} = useContext(AppContext)
    const [quantity,setQuantity] = useState(1)
    const [isBought,setIsBought] = useState(false)
    const increamentQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreamentQuantity = () => {
        if(quantity > 1)
            setQuantity(quantity - 1)
    }
    return (
        <div className="product-card">
            <div>
                <img  src ={item.url} alt="Card image cap" width={'120'} height={'100%'}/>
            </div>
            <div className="summary">
                <h5>{item.title}</h5>
                <h4 style={{color:'#B12704'}}>&#8377;{item.price}</h4>
                <p>{item.offer}</p>
            </div>
            <div className="quantity">
                <button className="quantity-btn" onClick={increamentQuantity}>+</button>
                <span>{quantity}</span>
                <button className="quantity-btn" onClick={decreamentQuantity}>-</button>
            </div>
            {
                !isBought ? 
                <button className="add-btn" onClick={() => {manageCart('ADDTOCART',item,quantity);setIsBought(true)}}>Add to cart</button> :
                <button className="add-btn" >Added</button>
            }
            
            
        </div>
    )
}
export default Card