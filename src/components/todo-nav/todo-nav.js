import styles from './todo-nav.module.css'

export const TodoNav = ({ todoLength }) => {
  return (
    <div className={styles.nav}>
      <span className={styles.itemCount}> {todoLength} items left </span>
      <span className={styles.item}>all</span>
      <span className={styles.item}>active</span>
      <span className={styles.item}>completed</span>
      <span className={styles.item}>clear completed</span>
    </div>
  )
}
