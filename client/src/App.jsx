import "./App.css";
import HomePage from "./screens/HomePage";
import { Routes, Route } from "react-router-dom";
import UpdateTodo from "./screens/UpdateTodo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo/:id" element={<UpdateTodo />} />
      </Routes>
    </>
  );
}

export default App;
