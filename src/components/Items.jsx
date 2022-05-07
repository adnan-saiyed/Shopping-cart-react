import React,{useContext} from "react"
import Card from "./Card"
import products from './products.json'
import { AppContext } from "./context"
const Items = () => {
    const {foundItems} = useContext(AppContext)
    products.forEach(item => {
        item.isBought = false
    })
    return (
        <div className="box">
            
            {
                foundItems && foundItems.map(item => <Card item={item} key={item.id}/>) 
            }
        </div>
           
    )
}
export default Items