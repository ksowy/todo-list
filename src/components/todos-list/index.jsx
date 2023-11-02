import { TodoItem } from "../../components/todo-item";

export const TodosList = ({ todos, remove, update }) => {
  return (
    <div className="w-full drop-shadow-xl">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          todos={todos}
          update={update}
          remove={remove}
        />
      ))}
    </div>
  );
};
