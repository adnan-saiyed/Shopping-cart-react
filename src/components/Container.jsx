import React from "react"
import Items from "./Items"
import Cart from "./Cart"

const Container = () => {
    return (
        <div className="items-container">
            <Cart/>
            <Items/>
        </div>
    )
}
export default Container