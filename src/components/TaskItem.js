import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasks/tasksSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className="bg-white p-4 shadow rounded flex justify-between items-center">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
      </div>
      <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
