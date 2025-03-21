import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form
      className="w-[400px] flex items-center gap-2 bg-blue-100 p-4 rounded-lg shadow-md"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task..."
        className="flex-1 p-3 border border-purple-400 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        className="bg-blue-600 px-5 py-3 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
        type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
