import Banner from 'components/Banner/Banner'
import image from 'assets/images/home.png'
import styles from './Homepage.module.scss'
import Thumbnail from 'components/Thumbnail/Thumbnail'
import { useEffect } from 'react'

let logements = require('../../datas/logements.json')

function Home() {
  useEffect(() => {
    console.log('bbb')
    document.title = `Kasa`
  })
  const title = 'Chez vous, partout et ailleurs'
  return (
    <section className={styles.container}>
      <Banner image={image} title={title} />
      <div className={styles.logementWrapper}>
        {logements.map((logement) => (
          <Thumbnail key={logement.id} logement={logement} />
        ))}
      </div>
    </section>
  )
}

export default Home
