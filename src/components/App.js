import React,{ useState } from "react";
import { AppContext } from "./context";
import NavBar from "./NavBar"
import Container from "./Container";
const App = () => {
    const [cart,setCart] = useState([])
    const [search,setSearch] = useState('')
    const [foundItems,setFoundItems] = useState([])
    const [cost,setCost] = useState(0)
    const [totalItems,setTotalItems] = useState(0)

    const manageCart = (action,item,quantity) => {
        switch(action){
            case 'ADDTOCART':{
                item = {...item,quantity}
                setCart([...cart,item])
                setCost(prev => prev + quantity * parseInt(item.price.replace(/,/g,'')))
                setTotalItems(prev => prev + quantity)
                return
            }
            case 'REMOVE':{
                setCart(cart.filter(cartitem => {
                    return cartitem.id !== item.id
                }))
                setCost(prev => prev - quantity * parseInt(item.price.replace(/,/g,'')))
                setTotalItems(prev => prev - quantity)
            }
            default:
                return
        }
    }
    return (
        <>  
            
            <AppContext.Provider value={{search,setSearch,foundItems,setFoundItems,manageCart,cart,cost,totalItems}}>
                <NavBar/>
                <Container/>
            </AppContext.Provider> 
        </>
    )
}
export default App
