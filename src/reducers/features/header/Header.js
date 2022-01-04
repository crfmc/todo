import React, { useState} from 'react'
import { useDispatch } from 'react-redux';

import '../../../styles/css/header.css'

export default function Header() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setNewTodo(e.target.value);

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim();
    if (e.key === 'Enter' && trimmedText) {
      dispatch(({ type: 'todos/todoAdded', payload: trimmedText }))
      setNewTodo('');
    }
  }

  return (
    <header className="todos">
      <h1 className="todos-h1">Todos</h1>
      <input
        className="todos-input"
        type="text"
        placeholder="Add a new item"
        autoFocus={true}
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}
