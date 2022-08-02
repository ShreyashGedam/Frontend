import {  useState } from "react"
import "./pages.css"
import {  useNavigate } from 'react-router-dom';

export const Register = () => {


    const [select , setSelect] = useState("")
    const [username , setUsername] = useState("")
    const [phone,setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")

    const navaigate = useNavigate()

    const handleChange = () => {
        const user = {
            username : username,
            phone : phone,
            email : email,
            password : password,
            role : select
        }

        const payload = JSON.stringify(user)
        fetch("http://localhost:5000/register",{
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST",
            body : payload
        })
        .then( (res) =>
        // console.log(res.json())
        res.json()
        )
        .catch( (err) => (
            console.log(err)
        ))

        // console.log(payload)
        navaigate("/login")

    }


    return (
        <div>
            <h1>Register page</h1>
            <div className="main-register">
                <div>
                    <label>Username : </label>
                    <input onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Phone : </label>
                    <input onChange={e => setPhone(e.target.value)}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Password : </label>
                    <input onChange={e => setPassword(e.target.value)}></input>
                </div>
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option value={""}>Choose the role</option>
                    <option value={"Admin"}>Admin</option>
                    <option value={"Manager"}>Manager</option>
                    <option value={"Staff"}>Staff</option>
                </select>
                <br></br>
                <br></br>
                <button onClick={ () => handleChange()}>Submit</button>
            </div>
        </div>
    )
}