// src/index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext"; // Importando CartProvider
import { PageRoute } from "./pages/page-route";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider> 
          <PageRoute />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
