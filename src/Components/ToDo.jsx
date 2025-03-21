import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, deleteTodo, toggleComplete }) => {
  return (
    <div
      className={`w-[400px] flex items-center justify-between gap-2 p-4 my-3 rounded-lg shadow-lg 
        ${
          task.completed ? "bg-green-500" : "bg-blue-500"
        } transition duration-300`}>
      <p
        className={`text-lg font-semibold text-white cursor-pointer flex-1 ${
          task.completed ? "line-through opacity-75" : ""
        }`}
        onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>

      <div className="flex gap-3">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-xl text-white cursor-pointer hover:text-gray-300 transition duration-200"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="text-xl text-white cursor-pointer hover:text-red-400 transition duration-200"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default ToDo;
