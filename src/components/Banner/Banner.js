import styles from './Banner.module.scss';

function Banner(props) {
  return (
    <div className={styles.banner} >
            <img src={props.image} alt="banner" className={styles.bannerImage} />
            <div className={styles.overlay}></div>
            <h1 className={styles.title}>{props.title}</h1>
      </div>
    )
}

export default Banner