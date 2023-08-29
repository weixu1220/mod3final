import { Link } from 'react-router-dom';
import logo from '../images/logo2.jpg'

function Header2() {
    return (
        <div className='border-b-2 border-gray-300'>
            <Link to='/'><img className='w-20' src={logo} alt="Starbucks logo" /></Link>
        </div>
    );
}

export default Header2;