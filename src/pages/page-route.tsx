import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ProductDetail from './ProductDetails';
export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
           
        </Routes>
    );
};
