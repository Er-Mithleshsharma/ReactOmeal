import { LOGO_URL } from '../utils/constants';
import {Link} from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";
const Header = () => {
    return (
        <div className="flex justify-between bg-[#5d0c1d] items-center ">
            <div className="flex items-center p-2">
            <IoFastFoodOutline size={"4em"} color='#CCB38D'/>
            <h1 className='text-5xl text-[#CCB38D] font-bold'>ReactOmeal</h1>
                {/* <img src={LOGO_URL} alt="App Logo" className=" w-32 h-24" /> */}
            </div>
            <div className="text-[#CCB38D]">
                <ul className='flex'>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/">Home</Link></li>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/about">About</Link></li>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/contact">Contact Us</Link></li>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
