import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../api";
import Footer from "../../components/Footer";
let emptyForm = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    ads: false,
    agree: false,
}

function AdminCreate({setAdmin,setLoggedIn}) {
    
    const [form, setForm] = useState(emptyForm)
    const navigate = useNavigate()
    const handleChange = (e) => {
            const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            setForm({ ...form, [e.target.name]: newValue });
        }
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const authResponse = await axios.post('/api/account/admin/create', form)
            const token = authResponse.data.token

            if (!token) {
                setForm(emptyForm)
                return
            }
            localStorage.setItem('token', token); // Store token in local storage
            localStorage.setItem("admin", true);
            sessionStorage.setItem("admin", true)
            sessionStorage.setItem("token", token)

            const adminResponse = await axios.get('/api/admins', {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })

            setAdmin(adminResponse.data)
            setLoggedIn(adminResponse.data.firstname)
            navigate('/')
        } catch (err) {
            console.log('Submit failed: ' + err.message)
        }
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-10">Create an account</h1>
            <div>
                <h2 className="text-lg text-gray-500 font-bold text-center">STARBUCKS® REWARDS</h2>
                <h3 className="w-96 text-center mx-auto">Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <Link className="underline" to={'/rewards'}>more</Link> .</h3>
            </div>

            <div className="w-fit shadow-lg border-2 rounded-xl my-12 px-20 py-10 mx-auto">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <p className="font-medium my-8">* indicates required field</p>

                    <label htmlFor="firstname">
                        <h1 className="text-xl font-semibold my-4">Personal Information</h1>
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="firstname" placeholder="* First name" required onChange={handleChange} />
                        <br />
                        <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="lastname" placeholder="* Last name" required onChange={handleChange} />
                    </label>

                    <label htmlFor="email">
                        <h1 className="text-xl font-semibold mt-12 mb-4">Personal Information</h1>
                        <input className="text-lg w-96 border-2 border-black rounded-lg mt-4 p-2" type="text" name="email" placeholder="* Email address" required onChange={handleChange} />
                        <h6>This will be your username</h6>
                        <input className="text-lg w-96 border-2 border-black rounded-lg mt-4 p-2" type="password" name="password" placeholder="* Password" required onChange={handleChange} />
                        <h6 className="w-96">Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</h6>
                    </label>
                    
                    <button className="self-right w-fit bg-green-800 border-2 rounded-full text-white font-semibold text-xl px-6 py-4 my-6 mx-auto mr-1">Create account</button>
                </form>

            </div>
            <Footer />
        </div>
    );
}

export default AdminCreate;