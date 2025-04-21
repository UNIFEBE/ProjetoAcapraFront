// src/componentes/Navbar/Navbar.tsx
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Close } from 'mdi-material-ui';

const Navbar = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
                {menuAberto ? <Close fontSize="large" /> : <Menu fontSize="large" />}
            </div>

            <nav className={`${styles.navLeft} ${menuAberto ? styles.mobileMenuAberto : ''}`}>
                <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
                <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre nós</Link>
                <Link to="/faq" onClick={() => setMenuAberto(false)}>FAQ</Link>
                <Link to="/cadastrarPet" onClick={() => setMenuAberto(false)}>Cadastrar animal</Link>
            </nav>

            <div className={styles.userInfo}>
                <span className={styles.userName}>Nome do Usuário</span>
                <span className={styles.userRole}>Tipo de Conta</span>
            </div>
        </header>
    );
};

export default Navbar;
