import styles from "./todo-nav.module.css";

export const TodoControlBar = ({ todos, setTodos, todoLength }) => {
  return (
    <div className="w-full bg-white flex items-center justify-between py-1 px-6 rounded-b-lg text-sm drop-shadow-xl text-slate-700">
      <div className="text-slate-400">{todoLength} items left</div>

      <div className="flex items-center justify-between">
        <div
          className="mr-4 cursor-pointer"
          onClick={() =>
            setTodos(todos.map((todo) => ({ ...todo, checked: true })))
          }
        >
          all
        </div>

        <div className="mr-4">active</div>

        <div>completed</div>
      </div>

      <div
        className={styles.item}
        onClick={() => setTodos([...todos.filter((todo) => !todo.checked)])}
      >
        clear completed
      </div>
    </div>
  );
};
