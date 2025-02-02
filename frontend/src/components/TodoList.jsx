import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook

const TodoList = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [tasks, setTasks] = useState(null);
  const [lastAction, setLastAction] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("https://wellnest-5zry.onrender.com/api/tasks", {
        headers: { Authorization: `Bearer ${user.sub}` }, // Send user ID in header
      });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckboxChange = async (taskId, taskIndex, completed) => {
    try {
      const updatedTasks = [...tasks.tasks];
      updatedTasks[taskIndex].completed = completed;

      await axios.put(`https://wellnest-5zry.onrender.com/api/tasks/${taskId}`, {
        taskIndex,
        completed,
      });

      setLastAction({ taskId, taskIndex, previousState: !completed });
      setTasks({ ...tasks, tasks: updatedTasks });
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center">
        <button onClick={loginWithRedirect} className="bg-blue-500 text-white p-2 rounded">
          Log in to see your To-Do List
        </button>
      </div>
    );
  }

  if (!tasks) return <div className="text-center text-gray-500 mt-4">Loading...</div>;

  return (
    <div className="w-full mx-auto p-6 bg-cover">
      <div className="w-[60vw] m-auto mt-26">
        <h1 className="text-4xl sm:text-6xl font-semibold text-gray-800 w-full text-center">
          Your Mental Health To-Do List
        </h1>

        <div className="mb-6">
          <span className="text-sm text-gray-600">Completion: {tasks.completionPercentage}%</span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-[#29b5f6] h-2 rounded-full transition-all"
              style={{ width: `${tasks.completionPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tasks.tasks.map((task, index) => (
            <div
              key={index}
              className={`flex items-center p-3 rounded-lg shadow-md transition-all cursor-pointer ${
                task.completed ? "bg-gray-200 text-gray-500" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleCheckboxChange(tasks._id, index, !task.completed)}
            >
              <input type="checkbox" checked={task.completed} readOnly className="w-5 h-5 mr-3 accent-[#29b5f6]" />
              <span>{task.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
