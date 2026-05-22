import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import About from './pages/AboutUs';
import BlogDetail from './pages/BlogDetail';

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </CartProvider>
  );
}
