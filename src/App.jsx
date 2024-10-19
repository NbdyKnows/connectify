import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Menu from './pages/Menu';
import Pagar from './pages/Pagar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pagar" element={<Pagar />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;