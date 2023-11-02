import classnames from "classnames";
import { Icon } from "../../components/icon";

export const TodoItem = ({ todo, remove, todos, update }) => {
  const updateTodo = (id) => {
    update([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="bg-white flex items-center justify-between py-4 px-6 border-b-[1px] last:border-b-0 border-solid border-gray-300 first:rounded-t-lg last:rounded-b-lg">
      <input
        className="mr-4"
        type="checkbox"
        defaultChecked={todo.checked}
        onChange={(e) => console.log(e)}
        onClick={() => updateTodo(todo.id)}
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
        onClick={() => remove(todo.id)}
      />
    </div>
  );
};
