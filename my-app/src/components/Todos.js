import { useEffect, useState } from "react";
import { getAllTodos, createTodo } from "../services/BookService";
export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getAllTodos().then((el) => {
      setTodos([...todos, el[0]]);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>Show Todos</button>
      {isOpen && (
        <div>
          {todos.map((el, idx) => (
            <div key={idx}>{el.todo}</div>
          ))}
        </div>
      )}
    </div>
  );
}
