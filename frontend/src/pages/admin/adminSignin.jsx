import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

let emptyForm = {
    email: '',
    password: '',
}

function AdminSignIn({setAdmin}) {
    const navigate = useNavigate()

    const [form, setForm] = useState(emptyForm)
    const [logStat, setLogStat] = useState(false)

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setLogStat(e.target.checked);
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        try {
            const authResponse = await axios.post('/account/admin/signin', form)
            const token = authResponse.data.token

            if (!token) {
                setForm(emptyForm)
                return
            }
            localStorage.setItem("admin",true)
            localStorage.setItem("token", token)

            const adminResponse = await axios.get('/api/admins', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            setAdmin(adminResponse.data)
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-10">Admin Portal</h1>
            <div className="flex flex-col justify-center w-fit border-2 rounded-xl shadow-lg mx-auto my-20 p-8">
                <p className="py-4">* indicates required field</p>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="email" placeholder="* Username or email address" required onChange={handleChange} />
                <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="password" name="password" placeholder="* Password" required onChange={handleChange} />
                <div className="px-1 py-4"><input className="w-6 h-6 text-green-800 rounded-lg my-2 mr-2 " type="checkbox" name="logstat" checked={logStat} onChange={handleChange} /><label className="text-lg">Keep me signed in. <span className="underline underline-offset-2 text-lg text-green-800 font-bold">Details</span> </label></div>
                <h4 className="underline underline-offset-2 text-lg text-green-800 font-bold ">Forgot your username?</h4>
                <h4 className="underline underline-offset-2 text-lg text-green-800 font-bold">Forgot your password?</h4>
                <Link className="underline underline-offset-2 text-lg text-green-800 font-bold" to="/account/user/signin">I am a user</Link>
                <button className="w-fit shadow-lg bg-green-800 rounded-full text-white text-xl font-bold my-8 ml-auto mr-1 py-4 px-6">Sign in</button>
                </form>
            </div>
            
            <button className="self-center border-green-800 border-2 rounded-full text-green-800 font-semibold text-lg px-4 py-2 m-4" onClick={()=>navigate('/account/admin/create')}>Join now</button>
        </div>
    );
}

export default AdminSignIn;