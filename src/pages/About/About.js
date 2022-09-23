import styles from './About.module.scss'
import aboutBanner from '../../assets/images/about_image.png'
import Banner from '../../components/Banner/Banner'

function About() {
    return (
        <div className={styles.container}>
            <Banner image={aboutBanner} />
        </div>
    )
}

export default About