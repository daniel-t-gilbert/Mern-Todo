import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import axios from "axios";
import TodoList from "../components/TodoList";

function HomePage() {
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    const data = await axios.get("/api/todo");
    setTodos(data.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <div>
        <AddTodo getTodo={getTodo} />
        <TodoList todos={todos} getTodo={getTodo} />
      </div>
    </>
  );
}

export default HomePage;
