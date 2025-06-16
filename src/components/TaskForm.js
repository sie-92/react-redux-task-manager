import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

function TaskForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="border rounded px-3 py-2 w-full"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
