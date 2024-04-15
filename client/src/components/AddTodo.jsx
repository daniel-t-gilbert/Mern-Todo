import { useState } from "react";
import axios from "axios";

function AddTodo({ getTodo }) {
  const [title, setTitle] = useState("ssss");
  const [desc, setDesc] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("/api/todo", { title, desc });

    getTodo();
    setDesc("");
    setTitle("");
  };

  return (
    <>
      <h1 className="text-black font-bold text-center">Add Todo</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={submitHandler}>
          <input
            className="border"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button>Add Todo</button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
