import styles from "./todo-nav.module.css";

export const TodoNav = ({ todoLength }) => {
  return (
    <div className="w-full bg-white flex items-center justify-between py-1 px-6 rounded-b-lg text-sm drop-shadow-xl text-slate-700">
      <span className="text-slate-400">{todoLength} items left</span>
      <span className={styles.item}>all</span>
      <span className={styles.item}>active</span>
      <span className={styles.item}>completed</span>
      <span className={styles.item}>clear completed</span>
    </div>
  );
};
