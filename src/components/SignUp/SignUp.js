import axios from "axios"
import { useState } from "react"

const SignUp = () => {
    const [phone, setPhone] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    

    const handleSubmit = async (event) => {
        try {
            const response = await axios.post('http://localhost:3000/add', { phone, userName, password, isAdmin })
            if (response.data.success) {
                alert('data saved successfully')
            }
            else {
                alert('invalid username and password')
            }
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                alert('Username already exists')
            } else {
                console.error('error logging in', error)
                alert('Error logging in')
            }
        }
    }

    return (
        <div className=" flex flex-col gap-5 w-full bg-white h-[80vh] justify-center  items-center">
            <div className="flex flex-col gap-5">
                <h1 className="self-center text-3xl">Sign up pannel</h1>
                <div className="flex  w-[400px] justify-between">
                    <label className="" htmlFor="id">Phone Number</label>
                    <input className="w-25 border rounded" type="text" onChange={e => { setPhone(e.target.value) }} />
                </div>
                <div className="flex  w-[400px] justify-between">
                    <label className="mr-5 " htmlFor="id">user name</label>
                    <input className="w-25 border rounded" type="text" onChange={e => { setUserName(e.target.value) }} />
                </div>
                <div className="flex  w-[400px] justify-between">
                    <label className="mr-5 " htmlFor="id">Password</label>
                    <input className="w-25 border rounded" type="password" onChange={e => { setPassword(e.target.value) }} />
                </div>
                <div className="self-start">
                    <label className="mr-2 " htmlFor="id">Admin</label>
                    <input type="checkbox" onChange={e => { setIsAdmin(e.target.value) }} />
                </div>
                <button className="self-center border bg-green-700 text-white h-14 w-48 rounded-lg" onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    );
}

export default SignUp;