import { useForm } from "react-hook-form";
import { useState } from "react";
import { TodoControlBar, TodosList } from "../../components";

const data = [
  { id: 0, todoText: "This is first task!", checked: false },
  { id: 1, todoText: "This is 2nd task!", checked: false },
  { id: 2, todoText: "Third task", checked: true },
  { id: 3, todoText: "Fourth task", checked: false },
];

export const Todos = () => {
  const [todos, setTodos] = useState(data);

  const { register, handleSubmit, reset } = useForm();

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
    if (e.key === "Enter") onSubmit(e);
  };

  return (
    <>
      <h1 className="pt-12 pb-8 text-slate-50 text-2xl">TODO</h1>

      <form
        className="w-full	rounded-md p-[18px] mb-6 bg-white drop-shadow-xl flex items-center justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="todoText"
          {...register("todoText")}
          onKeyDown={handleKeySubmit}
          className="cursor-text flex-1 border-0"
          placeholder="Write your message here"
        />

        <button
          className="border-0 text-slate-500 cursor-pointer"
          type="submit"
        >
          Create todo!
        </button>
      </form>

      <TodosList todos={todos} setTodos={setTodos} />

      {todos.length !== 0 && (
        <TodoControlBar
          todos={todos}
          setTodos={setTodos}
          todoLength={todos.length}
        />
      )}
    </>
  );
};
