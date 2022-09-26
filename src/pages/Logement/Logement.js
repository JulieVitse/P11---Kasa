import Gallery from '../../components/Gallery/Gallery'
import Tag from '../../components/Tag/Tag'
import { useParams } from 'react-router-dom'
import styles from './Logement.module.scss'

//let logements = require('../../datas/logements.json')

function Logement({ logements }) {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  return (
    <section className={styles.container}>
      <Gallery pictures={logement.pictures} title={logement.title} />
      <h2 className={styles.title}>{logement.title}</h2>
      <h3 className={styles.location}>{logement.location}</h3>
      <div className={styles.tags_wrapper}>
        {logement.tags.map((tag, index) => (
          <Tag key={index} tags={tag} />
        ))}
      </div>
    </section>
  )
}

export default Logement
