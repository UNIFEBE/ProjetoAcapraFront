// src/componentes/Navbar/Navbar.tsx
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Close } from 'mdi-material-ui';
import UserPhoto from '../../assets/acapraIcone.png';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <header className={styles.navbar}>
      {/* ícone mobile */}
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        {menuAberto ? <Close fontSize="large" /> : <Menu fontSize="large" />}
      </div>

      {/* menu principal à esquerda */}
      <nav className={`${styles.navLeft} ${menuAberto ? styles.mobileMenuAberto : ''}`}>
        <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Cadastros</button>
                <div className={styles.dropdownContent}>
                    <Link to="/cadastrarUsuario" onClick={() => setMenuAberto(false)}>Cadastrar Usuário</Link>
                    <Link to="/cadastrarPet" onClick={() => setMenuAberto(false)}>Cadastrar Pet</Link>
                    <Link to="/servico3" onClick={() => setMenuAberto(false)}>Cadastrar Formulário</Link>
                </div>
        </div>
        <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre nós</Link>
        <Link to="/faq" onClick={() => setMenuAberto(false)}>FAQ</Link>
      </nav>

      {/* container do usuário, dispara o hover */}
      <div className={styles.userInfo}>
        {/* sua foto */}
        <img src={UserPhoto} alt="Usuário" className={styles.userIcon} />

        {/* dropdown que abre ao hover em .userInfo ou nele próprio */}
        <div className={styles.userDropdown}>
          <Link to="/perfil">Perfil</Link>
          <Link to="/configuracoes">Configurações</Link>
          <Link to="/login">Desconectar</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
