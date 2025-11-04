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
import BestSellingPage from "./pages/bestSellingPage";
import Footer from "./components/footer";
import Profile from "./pages/myProfile";
import ProductData from "./pages/productData";
import CheckOut from "./pages/checkOut";
import SearchPage from "./pages/searchedPage";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { APIProductData } from "./API/getProductData";
import { useDispatch } from "react-redux";
import { StoreProducts } from "./slices/productData";
import CategoriesPage from "./pages/CategoryPage";
import { logedInUser } from "./slices/selectedUser";
const API = import.meta.env.VITE_API

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});



function App() {
  const dispatch = useDispatch();

  const [_, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productRef = await APIProductData();

      if (productRef) {
        setProducts(productRef);
        dispatch(StoreProducts(productRef));
      }
    };
    fetchProductData();
  }, [dispatch]);


  useEffect(() => {
  fetch(API + "/users/me", {
    method: "GET",
    credentials: "include",
  })
    .then(async (res) => {
      if (!res.ok) throw new Error("Not authenticated");
      const data = await res.json();
      dispatch(logedInUser(data));
    })
    .catch(() => dispatch(logedInUser(null))); 
}, []);


  return (
    <QueryClientProvider client={queryClient}>
      <main className=" overflow-hidden">
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
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/MyAccount" element={<Profile />} />
          <Route path="/bestSelling" element={<BestSellingPage />} />
          <Route path="/productData" element={<ProductData />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/searched" element={<SearchPage />} />
        </Routes>
        <Footer />
      </main>
    </QueryClientProvider>
  );
}

export default App;
