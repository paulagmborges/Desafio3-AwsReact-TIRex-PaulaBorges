import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ProductDetail from './ProductDetails';
import Contact from './Contact';
import CartComponent from './Cart';
import Checkout from './Checkout';
import { SignUp } from '@clerk/clerk-react';
import LoginComponent from './Login/component/loginTela';
import ProtectedRoute from "../protect-route";

export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Rota protegida para Checkout */}
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } 
            />
        </Routes>
    );
};

