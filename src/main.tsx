import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { PageRoute } from "./pages/page-route";

import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Adicione sua chave pública do Clerk no arquivo .env.local");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <PageRoute />
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
