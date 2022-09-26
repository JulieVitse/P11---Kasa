import Gallery from '../../components/Gallery/Gallery'
import { useParams } from 'react-router-dom'
import styles from './Logement.module.scss'

//let logements = require('../../datas/logements.json')

function Logement({ logements }) {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  return (
    <section className={styles.container}>
      <Gallery pictures={logement.pictures} title={logement.title} />
    </section>
  )
}

export default Logement
