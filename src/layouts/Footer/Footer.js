import logo from '../../assets/images/logo.svg'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <img src={logo} className={styles.logo} alt="kasa logo" />
      <p className={styles.copyrights}>&copy; 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer
