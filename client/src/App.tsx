import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MensCollections from "./pages/collections/MensCollections";
import WomensCollections from "./pages/collections/WomensCollections";
import ProductDetails from "./pages/products/ProductDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="collections" element={<Register />} />
          <Route path="collections/men" element={<MensCollections />} />
          <Route path="collections/women" element={<WomensCollections />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="admin-dashboard" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="collections" element={<Register />} />
          <Route path="collections/men" element={<MensCollections />} />
          <Route path="collections/women" element={<WomensCollections />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
