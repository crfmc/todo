import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { availableColors, capitalize } from '../filters/colors'


import '../../../styles/css/todolist.css'


const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}


export default function TodoListItem({ id }) {
  const todo = useSelector(state => selectTodoById(state, id));
  const { text, completed, color } = todo;
  
  const dispatch = useDispatch();

  const handleCompletedChange = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })    
  }

  const handleColorChange = (e) => {
    const color = e.target.value;
    dispatch({
      type: 'todos/colorSelected',
      payload: { todoId: todo.id, color }
    })
  }

  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id})
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
            onChange={handleCompletedChange}
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
