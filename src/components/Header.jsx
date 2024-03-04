import { LOGO_URL } from '../utils/constants';
import {Link} from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import {useState} from 'react'
const Header = () => {
    const [nav,setnav] = useState(true)
    function navhandler(){
        setnav(!nav)
    }
    return (
        <>
        <div className="flex justify-between bg-[#5d0c1d] items-center   ">
            <div className="flex items-center p-2">
            <IoFastFoodOutline size={"4em"} color='#CCB38D'/>
            <h1 className='text-2xl sm:text-5xl text-[#CCB38D] font-bold'>ReactOmeal</h1>
                {/* <img src={LOGO_URL} alt="App Logo" className=" w-32 h-24" /> */}
            </div>
            <div className="text-[#CCB38D] hidden md:block">
                <ul className='flex'>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/">Home</Link></li>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/about">About</Link></li>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/contact">Contact Us</Link></li>
                    <li className=' pr-4 text-lg font-semibold '><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            <div className='p-4 sm:hidden' onClick={navhandler}>
        {nav?<FaBars size={30}/>:<ImCross size={30} />}
        </div>
        </div>
         
         {!nav &&
            <div className=' h-screen pt-4  bg-gradient-to-b from-gray-300 to-gray-200' >
               <ul className='flex flex-col items-center '>
               <li className='p-10 font-bold cursor-pointer text-3xl'><Link to="/" onClick={navhandler}>Home</Link></li>
               <li className='p-10 font-bold cursor-pointer text-3xl'><Link to="/about" onClick={navhandler}>About</Link></li>
               <li className='p-10 font-bold cursor-pointer text-3xl'><Link to="/contact" onClick={navhandler}>Contact Us</Link></li>
               <li className='p-10 font-bold cursor-pointer text-3xl'><Link to="/cart" onClick={navhandler}>Cart</Link></li>
             </ul>
               </div>}
       </>

    );
};

export default Header;
