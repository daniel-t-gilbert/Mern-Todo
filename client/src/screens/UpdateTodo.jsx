import React from "react";
import { useParams } from "react-router-dom";

function UpdateTodo() {
  const { id } = useParams();
  console.log(id);
  return <div>UpdateTodo</div>;
}

export default UpdateTodo;
