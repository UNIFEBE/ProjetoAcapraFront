import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import FAQ from './pages/FAQ';
import CadastrarAnimal from './pages/CadastrarAnimal';
import CadastroUsuario from './pages/CadastroUsuario';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import RecuperarSenha from './pages/recuperarSenha';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cadastrarPet" element={<CadastrarAnimal />} />
        <Route path="/recuperarSenha" element={<RecuperarSenha />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
