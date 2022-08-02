import { Routes , Route} from "react-router-dom"
import { Login } from "../pages/login"
import { Product } from "../pages/product"
import { Register } from "../pages/register"
import { Navbar } from "./navbar"

export const Allroutes = () => {

    return(
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="products" element={<Product></Product>}></Route>
          </Routes>
        </div>
    )
}