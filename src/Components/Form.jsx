import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form
      className=" w-[400px] flex items-center justify-between gap-1 bg-blue-100 p-3 my-10 mx-auto"
      onSubmit={handleSubmit}>
      <input
        type="text"
        name="list"
        id="list"
        placeholder="Enter your task..."
        className="outline-none border-2 border-purple-400 p-4"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-blue-600 p-4 text-2xl text-white" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
