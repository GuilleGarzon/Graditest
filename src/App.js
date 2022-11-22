import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store/index';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/styles.scss';

function App() {
  return (
    <div className="app">
      <Store>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
