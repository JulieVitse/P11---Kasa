import styles from './Error.module.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Error() {
  useEffect(() => {
    document.title = `Erreur 404`
  })
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.message}>
          Oups! La page que vous demandez n'existe pas
        </h2>
      </div>
      <Link to="/" className={styles.link}>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
