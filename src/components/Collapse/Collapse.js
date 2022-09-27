import { useState } from 'react'
import arrowDown from 'assets/images/arrow_down.png'
import arrowUp from 'assets/images/arrow_up.png'
import styles from './Collapse.module.scss'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        {props.title}
        {isOpen ? <img src={arrowUp} alt="" /> : <img src={arrowDown} alt="" />}
      </button>

      <div
        className={
          `${styles.textWrapper}` + (isOpen ? ` ${styles.isOpen}` : '')
        }
      >
        {Array.isArray(props.content) ? (
          <ul className={styles.description}>
            {props.content.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.description}> {props.content} </p>
        )}
      </div>
    </div>
  )
}

export default Collapse
