import React, { useState } from "react";

const EditForm = ({ task, updateTask }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    updateTask(task.id, value);
  };

  return (
    <form
      className="w-[400px] flex items-center gap-2 bg-yellow-200 p-4 rounded-lg shadow-md"
      onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-1 p-3 border border-yellow-500 rounded-lg outline-none focus:ring-2 focus:ring-yellow-600"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        className="bg-yellow-600 px-5 py-3 text-white font-bold rounded-lg hover:bg-yellow-700 transition duration-200"
        type="submit">
        Save
      </button>
    </form>
  );
};

export default EditForm;
