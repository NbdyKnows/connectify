import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
/*import Nosotros from './pages/nosotros';*/
import Menu from './pages/Menu';
import Pagar from './pages/Pagar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider clas>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pagar" element={<Pagar />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;