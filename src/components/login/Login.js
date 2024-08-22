import miner from '../../Pic/farm-gray.jpeg'
import background from '../../Pic/background.jpg'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AutContext/AutContex';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setAuth, setUsername: setAuthUsername, setUserId, setAdmin} = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password })
            if (response.data.success) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', username);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('admin', response.data.admin)
                setAuth(response.data.token)
                setAuthUsername(username)
                setUserId(response.data.userId)
                setAdmin(response.data.admin) 
                navigate('/dashboard')
            }
            else {
                alert('invalid username and password')
            }
        }
        catch (error) {
            console.error('error logging in', error)
            alert('Error logging in')
        }
    }


    return (
        <div className="flex justify-center items-center content-center h-screen im">
            <img className='relative w-full h-full blur-md' src={background} alt="" srcset="" />
            <div className="flex w-1/2 justify-center rounded-2xl shadow-lg p-6 h-4/6 gap-5 bg-white absolute bg-opacity-60">
                <div className="h-full w-7/12">
                    <img src={miner} className='rounded h-full w-full blur-[1.4px]' alt="" srcset="" />
                </div>
                <div className="grid grid-cols-1 h-full w-5/12 content-center">
                    <div>
                        <div className='flex flex-col  mb-16'>
                            <h1 className="text-3xl text-center">Silicon Energy</h1>
                            <h1 className="text-center">Welcome back!</h1>
                        </div>
                        <div className="flex flex-col mb-10">
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full border h-10 pl-5 rounded-2xl outline-none mb-6" placeholder="Username" />
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border h-10 pl-5 rounded-2xl outline-none mb-3" placeholder="Password" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <button type='submit' onClick={handleSubmit} className="h-10 bg-[#0e0e0e] hover:bg-[#232323] rounded-2xl text-white cursor-pointer justify-self-center w-3/4">Sign in</button>
                            <a href="http://" className="text-[#0e0e0e] text-sm hover:underline justify-self-center mt-3">Rest password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;