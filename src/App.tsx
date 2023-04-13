import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/*    <Breadcrumbs /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
