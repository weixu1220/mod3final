import logo from '../images/logo2.jpg'
import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
function Header1() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center border-b-2 border-gray-300">
            <div className='flex items-center'>
                <Link to='/'><img className='w-20' src={logo} alt="Starbucks logo" /></Link>
                <h1 className='font-bold m-2'>MENU</h1>
                <h1 className='font-bold m-2'>REWARDS</h1>
                <h1 className='font-bold m-2'>GIFT CARDS</h1>
            </div>
            <div className='flex items-center'>
            <FontAwesomeIcon icon={faLocationDot} /><h1 className='font-semibold m-2 px-1 py-2'>Find a store</h1>
                <button onClick={()=>navigate('/account/user/signin')} className='font-semibold border-2 border-black rounded-full m-2 px-4 py-2'>Sign in</button>
                <button onClick={()=>navigate('/account/user/create')} className='font-semibold bg-black text-white rounded-full m-2 px-4 py-2'>Join now</button>
            </div>
        </div>
    );
}

export default Header1;