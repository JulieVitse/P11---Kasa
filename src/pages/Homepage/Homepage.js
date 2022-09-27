import Banner from 'components/Banner/Banner'
import homeBanner from 'assets/images/home_image.png'
import styles from './Homepage.module.scss'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

let logements = require('../../datas/logements.json')

function Home() {
  const title = 'Chez vous, partout et ailleurs'
    return (
      <section className={styles.container}>
            <Banner image={homeBanner} title={title} />
            <div className={styles.logementWrapper}>
                {logements.map((logement) => (
                    <Thumbnail key={logement.id} logement={logement} />
                ))}
            </div>
      </section>
    )
}

export default Home 
