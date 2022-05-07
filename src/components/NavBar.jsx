import React ,{useContext,useEffect} from "react";
import App from "./App";
import { AppContext } from "./context";
import products from './products.json'
const NavBar = () => {
    const {foundItems,setFoundItems} = useContext(AppContext)
    const {search,setSearch} = useContext(AppContext)
    useEffect(
        () => {
            setFoundItems(products.filter(element => {
                return element.keywords.includes(search)
            }))
            
    }
    ,[search])
    
    

        
    return (
        <nav className="navbar">
            <div className="search-area">
                <input type="search" placeholder="Serach anything.."className="search" onChange={e => {setSearch(e.target.value)}}/>     
                    
            </div>
            <h2 className="logo">KitKart</h2> 
        </nav>
    )
}  
export default NavBar  