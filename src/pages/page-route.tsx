import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ProductDetail from './ProductDetails';
import  Contact  from './Contact/index'
export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
           
        </Routes>
    );
};
