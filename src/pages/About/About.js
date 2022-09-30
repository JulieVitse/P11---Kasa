import styles from './About.module.scss'
import aboutBanner from 'assets/images/about_image.png'
import Banner from 'components/Banner/Banner'
import Collapse from 'components/Collapse/Collapse'
import aboutContent from 'datas/about'


function About() {
  return (
    <div className={styles.container}>
      <Banner image={aboutBanner} />
      <div className={styles.wrapper}>
        {aboutContent.map((content, index) => (
          <Collapse key={index} content={content.description} title={content.title} />
        ))}
      </div>
    </div>
  )
}

export default About
