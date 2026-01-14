import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayout from "./Components/Layout/UserLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Popular from "./pages/Popular"
import Shop from "./pages/Shop"
import SmartGadgets from "./pages/SmartGadgets"
import ProductDetails from "./Components/Products/ProductDetails"
import SearchResults from "./pages/SearchResults"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/smart-gadgets" element={<SmartGadgets />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

        </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App