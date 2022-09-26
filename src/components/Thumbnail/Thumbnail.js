import styles from './Thumbnail.module.scss'
import { Link } from 'react-router-dom'

function Thumbnail(props) {
  return (
    <Link
      to={`/logement/${props.logement.id}`}
      className={styles.thumbLogement}
      style={{
        backgroundImage: `url(${props.logement.cover})`,
      }}
    >
      <p className={styles.title}>{props.logement.title}</p>
      <div className={styles.overlay}></div>
    </Link>
  )
}

export default Thumbnail
