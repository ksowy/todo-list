import styles from "./todo-form.module.css";

export const TodoForm = ({ todoText, handleKeySubmit, onChange, onClick }) => (
  <div className={styles.form}>
    <input
      type="text"
      value={todoText}
      onChange={onChange}
      onKeyDown={handleKeySubmit}
      placeholder="Write your message here"
      className={styles.input}
    />

    <button className={styles.create} onClick={onClick}>
      Create todo!
    </button>
  </div>
);
