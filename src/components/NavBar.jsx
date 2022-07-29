import React ,{useContext,useEffect} from "react";
import axios from 'axios'
import App from "./App";
import { AppContext } from "./context";

const NavBar = () => {
    const {setFoundItems} = useContext(AppContext)
    const {search,setSearch} = useContext(AppContext)

    useEffect(async () => {
        const response = await axios.get('http://localhost:8080/getData')
        setFoundItems(response.data.filter(element => {
            return element.keywords.includes(search)
        }))
        
    },[search])
    
    return (
        <nav className="navbar">
            <div className="search-area">
                <input type="search" placeholder="Serach anything.."className="search" onChange={e => {setSearch(e.target.value)}}/>     
                    
            </div>
            <h2 className="logo">Shopikart</h2> 
        </nav>
    )
}  
export default NavBar  