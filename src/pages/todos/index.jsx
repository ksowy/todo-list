import { useFieldArray, useForm } from "react-hook-form";
import { TodoControlBar, TodosList } from "../../components";
import CrossIcon from "./cross-icon.svg";
import { useState } from "react";

const data = [
  { id: 0, todoText: "This is first task!", checked: false },
  { id: 1, todoText: "This is 2nd task!", checked: false },
  { id: 2, todoText: "Third task", checked: true },
  { id: 3, todoText: "Fourth task", checked: false },
];

export const Todos = () => {
  const [inputTextValue, setInputStateValue] = useState("");

  const { control, watch, getValues, handleSubmit } = useForm({
    defaultValues: { data },
  });
  const { fields, append, remove, update } = useFieldArray({
    name: "data",
    control,
  });

  const addTodoItem = () => {
    if (inputTextValue)
      return append({
        id: getValues().data.length,
        todoText: inputTextValue,
        checked: false,
      });

    setInputStateValue("");
  };

  const handleKeyAddTodoItem = (e) => {
    if (e.key === "Enter") addTodoItem(e);
  };

  return (
    <>
      <h1 className="pt-12 pb-8 text-slate-50 text-2xl">TODO</h1>

      <form
        className="w-full	rounded-md p-[18px] mb-6 bg-white drop-shadow-xl flex items-center justify-between"
        onSubmit={handleSubmit(addTodoItem)}
      >
        <div className="flex items-center justify-between flex-1 mr-6">
          <input
            type="text"
            value={inputTextValue}
            onKeyDown={handleKeyAddTodoItem}
            onChange={(e) => setInputStateValue(e.target.value)}
            className="cursor-text flex-1 border-0"
            placeholder="Write your task here"
          />

          {inputTextValue && (
            <span
              onClick={() => setInputStateValue("")}
              className="cursor-pointer"
            >
              <img
                src={CrossIcon}
                alt="cross-icon"
                className="w-[14px] h-[14px]"
              />
            </span>
          )}
        </div>

        <button
          className="border-0 text-slate-500 cursor-pointer"
          type="submit"
        >
          Create todo!
        </button>
      </form>

      <TodosList todos={fields} remove={remove} update={update} />

      {/* {fields.length !== 0 && (
        <TodoControlBar
          fields={fields}
          setTodos={setTodos}
          todoLength={todos.length}
        />
      )} */}
    </>
  );
};
