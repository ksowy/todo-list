import styles from './todo.module.css'

export const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className={styles.item} key={todo.id}>
      <input className={styles.itemToggle} type='checkbox' />

      <div className={styles.itemText}>
        <span className={styles.text} onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </span>
      </div>

      <button className={styles.remove} onClick={() => removeTodo(todo.id)}>
        ╳
      </button>
    </div>
  )
}
