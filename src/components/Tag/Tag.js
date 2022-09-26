import styles from './Tag.module.scss'

function Tag({ tags }){
    return (
        <span className={styles.tag}>{tags}</span>
    )
}

export default Tag