import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {

    return(
        <div className="main">
            <p><Link to={"register"}>Register</Link></p>
            <p><Link to={"login"}>Login</Link></p>
            <p><Link to={'products'}>Product List</Link></p>
        </div>
    )
}