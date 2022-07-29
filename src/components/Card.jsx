import React,{useContext, useState} from "react";
import { useLinkClickHandler } from "react-router-dom";
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

    const strikeStyle = {
        textDecoration: "line-through",
        color: "#7e818c",
        fontSize: "medium"
    }

    const sizeOptions = ["xs","s","m","l","xl"]

    const iconStyle = {
        backgroundColor: "#ffcb00",
        color: "white"
    }

    function clickHandler(e){
        console.log(e.target)
    }

    return (
        <div className="product-card">
            <div className="ribbon-wrapper">
                <div className="ribbon">NEW</div>
            </div>
            <div>
                <img  src ={item.url} alt="Card image cap" width={'300'} height={'100%'}/>
            </div>
            <div className="summary">
                <h5>{item.title}</h5>
                <h4><span style={strikeStyle}>&#8377;{+item.price+300}  </span>&#8377;{item.price}</h4>
            </div>
            <p>Size:</p>
            <div className="size-box">
                {
                    sizeOptions.map((ele,i) => <div key={i}><input type="checkbox" id="btnControl"/><label className = "size-icon" htmlFor="btnControl">{ele}</label></div>)
                }
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