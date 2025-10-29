import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Cantact from "./pages/cantact";
import Favorite from "./pages/favorite";
import LogIn from "./pages/logIn";
import Register from "./pages/register";
import AllProducts from "./pages/allProducts";
import Audio from "./pages/audio";
import Phones from "./pages/phones";
import TV from "./pages/tv";
import Gaming from "./pages/gaming";
import Appliances from "./pages/Appliances";
import Laptops from "./pages/laptops";
import BestSellingPage from "./pages/bestSellingPage";
import Footer from "./components/footer";
import Profile from "./pages/myProfile";
import ProductData from "./pages/productData";
import CheckOut from "./pages/checkOut";
import SearchPage from "./pages/searchedPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" overflow-hidden">
      <ToastContainer autoClose={1000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/concat" element={<Cantact />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/MyAccount" element={<Profile />} />
        <Route path="/bestSelling" element={<BestSellingPage />} />
        <Route path="/productData" element={<ProductData />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/searched" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
