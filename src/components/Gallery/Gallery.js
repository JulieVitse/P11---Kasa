import iconPrev from 'assets/images/icon_prev.svg'
import iconNext from 'assets/images/icon_next.svg'
import { useState } from 'react'
import styles from './Gallery.module.scss'

function Gallery({ pictures, title }){

    const [galleryIndex, setGalleryIndex] = useState(0)

    const nextPicture = () => {
        galleryIndex < pictures.length - 1 
        ? setGalleryIndex(galleryIndex + 1)
        : setGalleryIndex(0)
    }

    const prevPicture = () => {
        galleryIndex > 0
        ? setGalleryIndex(galleryIndex - 1)
        : setGalleryIndex(pictures.length - 1)
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.controls}>
          {pictures.length > 1 &&
            <button className={styles.btn} onClick={() => prevPicture()}>
              <img src={iconPrev} alt="" className={styles.icon} />
            </button>
          }
          {pictures.length > 1 &&
            <button className={styles.btn} onClick={() => nextPicture()}>
              <img src={iconNext} alt="" className={styles.icon} />
            </button>
          }
        </div>
        <img
          src={pictures[galleryIndex]}
          alt={title}
          className={styles.picture}
        />
      </div>
    )
}

export default Gallery