import logoHeader from '../../assets/icons/logoHeader.svg'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
    return (
        <header className='flex justify-between py-[30px] pl-[54px] pr-[100px] '>
            <div className="flex flex-row items-center justify-center  gap-[5px] ">
                <img src={logoHeader} alt="logo" className='w-[50px] h-[32px] ' />
                <h1 className="font-montserrat text-[34px] font-bold leading-[41.45px] ">Funrio</h1>
            </div>

            <nav>
                <ul className=" flex flex-row items-center font-poppins text-[16px] font-medium leading-24 text-left no-underline gap-[75px]">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/error">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-row items-center gap-4">
                <Link to="/login" className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
                    <User className="w-[23px] h-[19px] text-gray-700" />
                </Link>
                <Link to="/cart" className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
                    <ShoppingCart className="w-[23px] h-[19px] text-gray-700" />
                </Link>
            </div>

        </header>
    );
};

export default Header;