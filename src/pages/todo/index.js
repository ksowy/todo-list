import styles from "./todo.module.css";
import { Icon } from "../../components/icon";
import { useForm } from "react-hook-form";
import { TodoNav } from "../../components/todo-nav";
import { useState } from "react";

const data = [
  { id: 0, todoText: "This is first task!", checked: false },
  { id: 1, todoText: "This is 2nd task!", checked: false },
  { id: 2, todoText: "Third task", checked: true },
  { id: 3, todoText: "Fourth task", checked: false },
];

export const Todo = () => {
  const { register, handleSubmit, reset } = useForm();

  const [todos, setTodos] = useState(data);

  const onSubmit = (data) => {
    if (data.todoText) {
      const newTodo = {
        todoText: data.todoText,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      reset();
    }
  };

  const handleKeySubmit = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
      ),
    ]);
  };

  return (
    <>
      <h1 className="pt-12 pb-8 text-slate-50 text-2xl">TODO</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="todoText"
          {...register("todoText")}
          onKeyDown={handleKeySubmit}
          className={styles.input}
          placeholder="Write your message here"
        />

        <button className={styles.create} type="submit">
          Create todo!
        </button>
      </form>

      <div className={styles.list}>
        {todos.map((todo) => (
          <div className={styles.item} key={todo.id}>
            <input
              className={styles.itemToggle}
              type="checkbox"
              onClick={() => handleToggle(todo.id)}
            />

            <div className={styles.itemText}>
              <span className={styles.text}>{todo.todoText}</span>
            </div>

            <Icon icon="Edit" className="w-5 cursor-pointer stroke-1 mr-2" />
            <Icon
              icon="Trash"
              className="w-5 cursor-pointer stroke-1"
              onClick={() => removeTodo(todo.id)}
            />
          </div>
        ))}
      </div>

      {todos.length > 0 && <TodoNav todoLength={todos.length} />}
    </>
  );
};
