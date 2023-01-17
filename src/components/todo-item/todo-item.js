import styles from "./todo-item.module.css";

export const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className={styles.item} key={todo.id}>
      <input className={styles.itemToggle} type="checkbox" />

      <div className={styles.itemText}>
        <span className={styles.text} onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </span>
      </div>

      <button className={styles.remove} onClick={() => removeTodo(todo.id)}>
        ╳
      </button>
    </div>
  );
};
