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
import CategoriesPage from "./pages/CategoryPage";
import { useProducts } from "./API/getProductData";
import { useFavorites } from "./API/getFavoriteData";
import { useCart } from "./API/getCartData";
import { useUserData } from "./API/getUserData";
import LoadingSpinner from "./components/LoadingSpinner";

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
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
}

function MainApp() {
  const { isLoading: productsLoading } = useProducts();
  const { isLoading: favoritesLoading } = useFavorites();
  const { isLoading: cartLoading } = useCart();
  const { isLoading: userLoading } = useUserData();

  const isAppLoading =
    productsLoading || favoritesLoading || cartLoading || userLoading;
  if (isAppLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
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
    </>
  );
}

export default App;
