import React from 'react'
import { availableColors, capitalize } from '../filters/colors'


import '../../../styles/css/todolist.css'


export default function TodoListItem({todo, onColorChange, onCompletedChange, onDelete}) {
  const { text, completed, color } = todo;
  
  const handlecompletedChange = (e) => {
    onCompletedChange(e.target.checked);
  }

  const handleColorChange = (e) => {
    onColorChange(e.target.value);
  }

  const colorOptions = availableColors.map((c) => (
      <option key={c} value={c}>
        {capitalize(c)}        
      </option>
    ))
  

  return (
    <li className="todo-item">
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handlecompletedChange}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="color-picker"
            value={color}
            style={{ color }}
            onChange={handleColorChange}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            X
          </button>
        </div>
      </div>
    </li>
  )
}
