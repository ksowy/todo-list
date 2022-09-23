export const TodoForm = ({ todoText, handleKeySubmit, onChange, onClick }) => {
  return (
    <div>
      <input
        type='text'
        value={todoText}
        onChange={onChange}
        onKeyDown={handleKeySubmit}
        placeholder='Write your message here...'
      ></input>
      <button onClick={onClick}>Submit</button>
    </div>
  )
}
