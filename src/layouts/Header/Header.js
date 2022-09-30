import logo from 'assets/images/logo.svg'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

function Header() {
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="kasa logo" />
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={styles.navLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
                Accueil
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={styles.navLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header