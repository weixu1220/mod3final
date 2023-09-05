import logo from '../images/logo2.jpg'
import { Link, useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot, faCircleUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Header1( {loggedIn, handleLogout}) {

    const navigate = useNavigate()
    const [profView, setProfView] = useState(false)
  
    return (
        <div className="flex justify-between items-center border-b-2 border-gray-300">
            <div className='flex items-center'>
                <Link to='/'><img className='w-20' src={logo} alt="Starbucks logo" /></Link>
                <Link to='/menu'><h1 className='font-bold m-2 hover:text-green-800'>MENU</h1></Link>
                <h1 className='font-bold m-2 hover:text-green-800'>REWARDS</h1>
                <h1 className='font-bold m-2 hover:text-green-800'>GIFT CARDS</h1>
            </div>
            <div className='flex items-center'>
              <Link to="/store-locator" className='flex items-center hover:text-green-800'>
                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                <h1 className='font-semibold m-2 px-1 py-2'>Find a store</h1>
                </ Link>
                {loggedIn &&
                    <div className='relative inline-block text-left'>
                    <div>
                      <button type='button' className='flex items-center 'onClick={()=>setProfView(!profView)} >
                        {/* <FontAwesomeIcon icon={faCircleUser} className='m-2' /> */}
                        <h1 className='font-bold mr-4'>Account</h1>
                        {/* <FontAwesomeIcon className="mr-4"icon={faChevronDown} /> */}
                      </button>
                    </div>
                    {profView && <div className='origin-top-right absolute right-0 mt-2 mr-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                        <p className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Welcome, {loggedIn}!</p>
                        <p className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Profile</p>
                        <p className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Settings</p>
                        <div>
                            <hr/>
                        <p className='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100' role='menuitem' onClick={handleLogout}>Logout</p>
                        </div>
                      </div>
                    </div>}
                  </div>
                }
                {!loggedIn && <button onClick={() => navigate('/account/user/signin')} className='font-semibold border-2 border-black rounded-full m-2 px-4 py-2 hover:bg-gray-200'>Sign in</button>}
                {!loggedIn && <button onClick={() => navigate('/account/user/create')} className='font-semibold bg-black text-white rounded-full m-2 px-4 py-2 hover:bg-gray-600'>Join now</button>}
            </div>
        </div>
    );
}

export default Header1;