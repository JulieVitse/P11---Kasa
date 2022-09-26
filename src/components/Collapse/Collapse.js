import { useState } from 'react'
import arrowDown from '../../assets/images/arrow_down.png'
import arrowUp from '../../assets/images/arrow_up.png'
import styles from './Collapse.module.scss'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        {props.content.title}
        {isOpen ? <img src={arrowUp} alt="" /> : <img src={arrowDown} alt="" />}
      </button>
      {isOpen && (
        <div className={styles.textWrapper} isOpen={isOpen}>
          <p className={styles.description}>{props.content.description}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
