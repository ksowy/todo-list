import { useForm } from "react-hook-form";
import { useState } from "react";
import { Icon, TodoNav } from "../../components";

const data = [
  { id: 0, todoText: "This is first task!", checked: false },
  { id: 1, todoText: "This is 2nd task!", checked: false },
  { id: 2, todoText: "Third task", checked: true },
  { id: 3, todoText: "Fourth task", checked: false },
];

export const Todo = () => {
  const [todos, setTodos] = useState(data);
  const [isEdit, setIsEdit] = useState(false);

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

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const toggleTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
      ),
    ]);
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
          className="cursor-text flex-none border-0"
          placeholder="Write your message here"
        />

        <button
          className="border-0 text-slate-500 cursor-pointer"
          type="submit"
        >
          Create todo!
        </button>
      </form>

      <div className="w-full drop-shadow-xl">
        {todos.map((todo) => (
          <div
            className="bg-white flex items-center justify-between py-4 px-6 border-b-[1px] border-solid border-gray-300 first:rounded-t-lg"
            key={todo.id}
          >
            <input
              className="mr-4"
              type="checkbox"
              onClick={() => toggleTodo(todo.id)}
            />

            <div className="mr-5 cursor-pointer w-full">
              {isEdit ? (
                <div className="flex justify-between text-slate-500">
                  <input
                    type="text"
                    name="todoText"
                    className="bg-white cursor-text flex-none border-0"
                    defaultValue={todo.todoText}
                  />

                  <button onClick={() => setIsEdit(false)}>Submit</button>
                </div>
              ) : (
                <input
                  type="text"
                  name="todoText"
                  className="bg-white cursor-text flex-none border-0 text-slate-500"
                  disabled
                  defaultValue={todo.todoText}
                />
              )}
            </div>

            <Icon
              icon="Edit"
              className="w-5 cursor-pointer stroke-1 mr-2"
              onClick={() => setIsEdit(true)}
            />

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
