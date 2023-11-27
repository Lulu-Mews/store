import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shoppingcart from "./pages/Shoppingcart";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import { ProductProvider } from "./context/productContext";
import products from "./data/products.json";
import { CartProvider } from "./context/cartContext";
import { ThemeProvider } from "@emotion/react";
import theme from "./data/theme.json";
import Fade from "./component/shared/Fade/Fade";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import StlViewer from "./pages/StlViewer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider initialState={products}>
        <CartProvider initialState={[]}>
          <Fade
            width="100%"
            height="50%"
            backgroundColor="linear-gradient(
              180deg,
              rgb(182, 182, 182) 0%,
              rgb(182, 182, 182) 55%,
              rgba(9, 9, 121, 0) 100%
            )"
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Shoppingcart />} />
              <Route path="*" element={<Notfound />} />
              <Route path="products" element={<Home />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="products/:category" element={<Home />} />
              <Route path="order" element={<Shoppingcart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="stlviewer" element={<StlViewer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
