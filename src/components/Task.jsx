import { useState } from "react";

function Task({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const taskId = task._id;

  const handleSave = () => {
    editTask(taskId, newText);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(taskId)}
          aria-label={`Mark ${task.text} as ${task.completed ? "active" : "complete"}`}
        />
        <span />
      </label>

      <div className="task-content">
        {isEditing ? (
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            autoFocus
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>

      {isEditing ? (
        <button className="icon-button success" onClick={handleSave} aria-label="Save task">
          Save
        </button>
      ) : (
        <button className="icon-button" onClick={() => setIsEditing(true)} aria-label="Edit task">
          Edit
        </button>
      )}

      <button className="icon-button danger" onClick={() => deleteTask(taskId)} aria-label="Delete task">
        Delete
      </button>
    </li>
  );
}

export default Task;
