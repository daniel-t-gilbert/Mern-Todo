import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function TodoList({ todos, getTodo }) {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(null);

  const deleteHandler = async (id) => {
    setIsLoading(id);
    await axios.delete(`/api/todo/${id}`);
    setIsLoading(null);
    getTodo();
  };

  return (
    <>
      {todos &&
        todos.map((todo) => {
          return (
            <div className="flex justify-center items-center" key={todo._id}>
              {isloading == todo._id ? (
                <Loader />
              ) : (
                <div className="bg-green-500 w-36 h-12 m-10">
                  <h1>{todo.title}</h1>
                  <h3>{todo.desc}</h3>
                  <button
                    className="bg-red-500 w-full"
                    onClick={() => deleteHandler(todo._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 w-full"
                    onClick={() => navigate(`/todo/${todo._id}`)}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </>
  );
}

export default TodoList;
