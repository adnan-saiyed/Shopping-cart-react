import React from "react"
import Items from "./Items"
import Cart from "./Cart"

const Container = () => {
    return (
        <div className="items-container">
            <Items/>
            <Cart/>
        </div>
    )
}
export default Container