import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import FAQ from './pages/FAQ';
import CadastrarAnimal from './pages/CadastrarAnimal';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastrarFormulario from './pages/CadastrarFormulario';
import Login from './pages/Login';
import TelaAdocao from './pages/TelaAdocao';
import NotFound from './pages/NotFound';
import RecuperarSenha from './pages/RecuperarSenha';
import RedefinirSenha from './pages/RedefinirSenha';
import FormularioAdocao from './pages/FormularioAdocao';
import CadastrarVoluntario from './pages/CadastrarVoluntario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrarUsuario" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cadastrarPet" element={<CadastrarAnimal />} />
        <Route path="/adocao" element={<TelaAdocao />} />
        <Route path="/recuperarSenha" element={<RecuperarSenha />} />
        <Route path="/redefinirSenha" element={<RedefinirSenha />} />
        <Route path="/formularioAdocao" element={<FormularioAdocao/>} />
        <Route path="/cadastrarFormulario" element={<CadastrarFormulario/>} />
        <Route path="/cadastrarVoluntario" element={<CadastrarVoluntario/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
