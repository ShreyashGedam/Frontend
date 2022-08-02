import { useState } from "react"
import "./pages.css"
import {  useNavigate } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [token , setToken] = useState("")

    const [error,setError] = useState(false)
    const navaigate = useNavigate()

    const handleChange = () => {
        
        const user = {  
           email : email,
            password : password,   
        }

        const payload = JSON.stringify(user)
        fetch("http://localhost:5000/login",{
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST",
            body : payload
        })
        .then( (res) =>{
            return res.json()
        }
        // res.json()
        )
        .then ( (res) => {
            console.log(res.token)
            // setToken(res.token)   
        })
        .catch( (err) => (
            // console.log(err)
            setError(true)
        ))

        console.log(token)

        
    }


    return (
        <div>
            <h1>Login page</h1>
            {error && <h1 style={{color : "red"}}>Wrong Credentials</h1>}
            <div className="main-login">
                <div>
                    <label>Email : </label>
                    <input onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Passowrd : </label>
                    <input onChange={e => setPassword(e.target.value)}></input>
                </div>
                <br></br>
                <br></br>
                <button onClick={ () => handleChange()}>Login</button>

            </div>
        </div>
    )
}