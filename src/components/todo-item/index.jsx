import classnames from "classnames";
import { Icon } from "../../components/icon";

export const TodoItem = ({ todo, setTodos, todos }) => {
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
    <div className="bg-white flex items-center justify-between py-4 px-6 border-b-[1px] border-solid border-gray-300 first:rounded-t-lg">
      <input
        className="mr-4"
        type="checkbox"
        defaultChecked={todo.checked}
        checked={todo.checked}
        onClick={() => toggleTodo(todo.id)}
      />

      <div className="mr-5 cursor-pointer w-full">
        <input
          type="text"
          name="todoText"
          className={classnames(
            "bg-white cursor-text flex-none border-0 text-slate-500",
            { "line-through": todo.checked }
          )}
          disabled
          defaultValue={todo.todoText}
        />
      </div>

      {/* <Icon
            icon="Edit"
            className="w-5 cursor-pointer stroke-1 mr-2"
            onClick={() => setIsEdit(true)}
          /> */}

      <Icon
        icon="Trash"
        className="w-5 cursor-pointer stroke-1"
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  );
};
