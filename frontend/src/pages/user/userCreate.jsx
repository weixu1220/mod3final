import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

let emptyForm = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    ads: false,
    agree: false,
}

function UserCreate({setUser}) {
    
    const [form, setForm] = useState(emptyForm)
    const navigate = useNavigate()

    const handleChange = (e) => {
            const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            setForm({ ...form, [e.target.name]: newValue });
        }
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log(form)
            const authResponse = await axios.post('/api/account/user/create', form)
            const token = authResponse.data.token
            console.log(token)

            if (!token) {
                setForm(emptyForm)
                return
            }
            localStorage.setItem('token', token); // Store token in local storage
            localStorage.setItem("admin", false);
            sessionStorage.setItem('token', token); // Store token in session storage
            sessionStorage.setItem("admin", false);

            const userResponse = await axios.get('/api/users', {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            console.log("userResponse",userResponse)
            setUser(userResponse.data)
 
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

                    <h5 className="text-green-800 text-lg font-bold mt-12">Already have a Starbucks gift card?</h5>

                    <label className="text-gray-500 font-bold my-8" htmlFor="ads">COLLECT MORE STARS & EARN REWARDS
                        <h6 className="w-96 font-semibold my-2">Email is a great way to know about offers and what's new from Starbucks.</h6>
                        <div className="flex">
                            <input className="w-6 h-6 border-green-800 bg-green-800 mt-4 mb-auto mr-2" type="checkbox" name="ads" onChange={handleChange} />
                            <div className="flex flex-col">
                                <h6 className="font-semibold my-2">Yes, I'd like email from Starbucks</h6>
                                <p className="w-96">Know about initiatives, announcements and product offers.</p>
                            </div>
                        </div>
                    </label>



                    <label className="text-gray-500 font-bold my-8" htmlFor="agree">TERMS OF USE
                        <div className="flex">
                            <input className="w-6 h-6 border-green-800 bg-green-800 mt-4 mb-auto mr-2" type="checkbox" name="agree" onChange={handleChange} />
                            <h6 className="w-96 font-semibold my-2">I agree to the
                                <Link to='/rewards'>Starbucks® Rewards Terms</Link>
                                opens in new window and the
                                <Link to='/terms/manage-gift-cards'>Starbucks Card Terms</Link>
                                opens in new window and have read the
                                <Link to='/terms/privacy-policy'>Starbucks Privacy Statement</Link>
                                opens in new window.</h6>
                        </div>
                    </label>
                    <button className="self-right w-fit bg-green-800 border-2 rounded-full text-white font-semibold text-xl px-6 py-4 my-6 mx-auto mr-1">Create account</button>
                </form>

            </div>
        </div>
    );
}

export default UserCreate;