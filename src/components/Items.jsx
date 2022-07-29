import React,{useContext} from "react"
import Card from "./Card"
import { AppContext } from "./context"
const Items = () => {
    const {foundItems} = useContext(AppContext)
    foundItems.forEach(item => {
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