import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { availableColors, capitalize } from '../filters/colors';
import { StatusFilters } from '../filters/filtersSlice';

import '../../../styles/css/footer.css';

// Display remaining todo items
const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <div className='todos-remaining'>
      <h2>Todos Remaining</h2>
      <p><strong>{count}</strong> item{suffix} remaining</p>
    </div>
  )
}

// Display status filters
const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    const className = value === status ? 'selected' : '';
  
    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  
  })

  return (
    <div className="filters statusFilters">
      <h2>Filter by Status</h2>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

// Display color filters
const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added';
      onChange(color, changeType);
    }
    
    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {capitalize(color)}
      </label>
      )
  })

  return (
    <div className="filters colorFilters">
      <h2>Filter by color</h2>
      <form className="filter-color-selection">{renderedColors}</form>
    </div>
  )
}


/**
 * Renders the footer section
 */
export default function Footer(props) {

  const dispatch = useDispatch();

  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed);
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector(state => state.filters);


  const onMarkCompletedClicked = () => dispatch({ type: 'todos/allCompleted' })
  const onClearCompletedClicked = () => dispatch({type: 'todos/completedCleared'})

  // Listener for change of color
  const onColorChange = (color, changeType) => {
      dispatch({ type: 'filters/colorFilterChanged', payload: { color, changeType } })
  }

  // Listener for change in status
  const onStatusChange = (status) => {
    dispatch({ type: 'filters/statusFilterChanged', payload: status})
  }

  return (
    <footer className="footer">
      <div className="footer-actions">
        <h2>Actions</h2>
        <button className="button" onClick={onMarkCompletedClicked}>Mark all as completed</button>
        <button className="button" onClick={onClearCompletedClicked}>Clear completed</button>
      </div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}
