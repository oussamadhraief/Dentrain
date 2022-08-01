import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import MensCollections from "./pages/collections/MensCollections";
import WomensCollections from "./pages/collections/WomensCollections";
import ProductDetails from "./pages/products/ProductDetails";
import AddProduct from "./pages/admin-dashboard/products/AddProduct";
import AccountSettings from "./pages/account/AccountSettings";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequiredAuth from "./components/RequiredAuth";
import useAuth from "./hooks/useAuth";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import UserDashboardLayout from "./components/UserDashboardLayout";
import Account from "./pages/account/Account";

function App() {

  const { Auth } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {Auth?.user ? null
            :
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </>}
            <Route path="collections" element={<Register />} />
            <Route path="collections/men" element={<MensCollections />} />
            <Route path="collections/women" element={<WomensCollections />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="contact" element={<Contact />} />
          <Route element={<RequiredAuth allowedRoles={['user','admin']} />}>
            <Route path="cart" element={<p>cart</p>} />
            <Route path='account' element={<UserDashboardLayout />}>
              <Route index element={<Account />} />
              <Route path="orders" element={<AccountSettings />} />
              <Route path="wishlist" element={<AccountSettings />} />
              <Route path="settings" element={<AccountSettings />} />
            </Route>
          </Route>
        </Route>
        <Route element={<RequiredAuth allowedRoles={['user','admin']} />}>
          <Route path="admin-dashboard" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="collections" element={<Register />} />
            <Route path="collections/men" element={<MensCollections />} />
            <Route path="collections/women" element={<WomensCollections />} />
            <Route path="products/:productId" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<p>error</p>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
