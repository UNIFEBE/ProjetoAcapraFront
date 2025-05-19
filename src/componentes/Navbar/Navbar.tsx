import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Close } from 'mdi-material-ui';
import UserPhoto from '../../assets/acapraIcone.png';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [cadastrosOpen, setCadastrosOpen] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
    setCadastrosOpen(false);
  };
  const handleLogout = () => {
    // lógica de logout
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        {menuAberto ? <Close fontSize="large" /> : <Menu fontSize="large" />}
      </div>

      <nav className={`${styles.navLeft} ${menuAberto ? styles.mobileMenuAberto : ''}`}>
        <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
        <div
          className={`${styles.dropdown} ${cadastrosOpen ? styles.open : ''}`}
        >
          <button
            className={styles.dropbtn}
            onClick={() => setCadastrosOpen(!cadastrosOpen)}
          >
            Cadastros
          </button>
          <div className={styles.dropdownContent}>
            <Link to="/cadastrarUsuario" onClick={() => setMenuAberto(false)}>
              Cadastrar Usuário
            </Link>
            <Link to="/cadastrarPet" onClick={() => setMenuAberto(false)}>
              Cadastrar Pet
            </Link>
          </div>
        </div>
        <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre nós</Link>
        <Link to="/faq" onClick={() => setMenuAberto(false)}>FAQ</Link>
      </nav>

      <div className={styles.userInfo}>
        <img src={UserPhoto} alt="Usuário" className={styles.userIcon} />
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