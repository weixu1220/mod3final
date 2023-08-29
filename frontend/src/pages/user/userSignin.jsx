import { Link, useNavigate } from "react-router-dom";
import Header2 from '../../components/Header2';

function UserSignIn() {
    const navigate = useNavigate()
    return (
        <div>
            <Header2 />
            <h1 className="text-center text-3xl font-bold my-10">Sign in or create an account</h1>
            <div className="flex flex-col justify-center w-fit border-2 rounded-xl shadow-lg mx-auto my-20 p-8">
                <p className="py-4">* indicates required field</p>
                <form className="flex flex-col" action="">
                <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="email" placeholder="* Username or email address" required/>
                <input className="text-lg w-96 border-2 border-black rounded-lg my-4 p-2" type="text" name="password" placeholder="* Password" required/>
                <div className="px-1 py-4"><input className="w-6 h-6 text-green-800 rounded-lg my-2 mr-2 " type="checkbox" /><label className="text-lg">Keep me signed in. <span className="underline underline-offset-2 text-lg text-green-800 font-bold">Details</span> </label></div>
                </form>
                
                <h4 className="underline underline-offset-2 text-lg text-green-800 font-bold ">Forgot your username?</h4>
                <h4 className="underline underline-offset-2 text-lg text-green-800 font-bold">Forgot your password?</h4>
                <Link className="underline underline-offset-2 text-lg text-green-800 font-bold" to="/account/admin/signin">I am an admin</Link>
                <button className="w-fit shadow-lg bg-green-800 rounded-full text-white text-xl font-bold my-8 ml-auto mr-1 py-4 px-6">Sign in</button>
            </div>
            <div className="flex flex-col w-96 mx-auto mb-20">
            <h5 className="text-green-800 font-semibold text-lg text-center my-4">JOIN STARBUCKS® REWARDS</h5>
            <p className="font-medium">Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
            <button className="self-center border-green-800 border-2 rounded-full text-green-800 font-semibold text-lg px-4 py-2 m-4" onClick={()=>navigate('/account/user/create')}>Join now</button>
            </div>
            
        </div>
    );
}

export default UserSignIn;