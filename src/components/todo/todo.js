export const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div key={todo.id}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  )
}
