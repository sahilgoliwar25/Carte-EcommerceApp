import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
// import Navbar from "./components/Pages/Navbar/Navbar";
import Login from "./components/Pages/Signup/Login";
import Register from "./components/Pages/Signup/Register";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Products from "./components/Pages/Products/Products";
import DynamicProd from "./components/Pages/DynamicProduct/DynamicProd";
import CartPage from "./components/Pages/Cart/CartPage";
import ScrollToTop from "./components/App/scrollToTop";
import Error from "./components/Pages/Error/Error";
import HelpCenter from "./components/Pages/Other/HelpCenter";
import AboutUs from "./components/Pages/Other/AboutUs";
import ContactUs from "./components/Pages/Other/ContactUs";
import SubProducts from "./components/Pages/Products/SubProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/HelpCenter" element={<HelpCenter />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:product" element={<Products />} />
          <Route path="/:product/:subcat" element={<SubProducts />} />
          <Route path="/:product/:subcat/:Id" element={<DynamicProd />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <CartPage /> */}
    </div>
  );
}

export default App;
