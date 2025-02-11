import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ProductDetail from './ProductDetails';
import Contact from './Contact/index'
import Cart from './Cart/index'
import Checkout from './Checkout/';
import { SignUp, SignIn } from '@clerk/clerk-react';



export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            
           
        </Routes>
    );
};
