import logoHeader from '../../assets/icons/logoHeader.svg'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from "lucide-react";
import { useAuth } from '@clerk/clerk-react';
import { useCart } from "../../hook/useCart"


const Header = () => {
    const { signOut, isSignedIn, userId } = useAuth()

    console.log('isSignedIn', isSignedIn)
    console.log('userId', userId)

    const { cart } = useCart()



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
                {!isSignedIn && (
                    <Link to="/login" className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
                        <User className="w-[23px] h-[19px] text-gray-700" />
                    </Link>
                )}
                {isSignedIn && (
                    <button onClick={() => { signOut() }} className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
                        <User className="w-[23px] h-[19px] text-gray-700" />
                    </button>
                )}

                <Link to="/cart" className="relative">
                    <ShoppingCart className="w-[23px] h-[19px] text-gray-700" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {cart.reduce((total, item) => total + item.quantidade, 0)}
                        </span>
                    )}
                </Link>


            </div>


        </header >
    );
};

export default Header;