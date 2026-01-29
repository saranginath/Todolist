import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("")
  }
  const deletes = (index) => {
    return setTodos(todos.filter((_, i) => i !== index))
  }
  
  return (
    <>
      <h1>Todo Lsit</h1>
      <input type="text" placeholder="Add todo" value={todo} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => { deletes(i) }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
export default App;