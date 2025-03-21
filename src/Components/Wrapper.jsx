import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditForm from "./EditForm";

const Wrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.trim()) return; // Prevent adding empty tasks
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col items-center py-10">
      <h3 className="text-4xl text-white font-bold mb-6">To-Do List</h3>
      <Form addTodo={addTodo} />
      <div className="w-full flex flex-col items-center gap-3">
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditForm key={todo.id} task={todo} updateTask={updateTask} />
          ) : (
            <ToDo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleEdit={toggleEdit}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Wrapper;
