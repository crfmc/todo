import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import TodoListItem from './TodoListItem'

import '../../../styles/css/todolist.css'


const selectTodoIds = state => state.todos.map(todo => todo.id);

export default function TodoList(props) {
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  const renderedListItems = todoIds.map(todoId => {
    return (
      <TodoListItem key={todoId} id={todoId} />
    )
  })

  return (
    <ul className="todo-list">
      {renderedListItems}
    </ul>
  )
}
