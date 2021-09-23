import React from 'react'

import { availableColors, capitalize } from '../filters/colors';
import { StatusFilters } from '../filters/filtersSlice';

import '../../../styles/css/footer.css';

export default function Footer(props) {

  const colors = [];
  const status = StatusFilters.All
  const todosRemaining = 1;

  // Listener for change of color
  const onColorChange = (color, changeType) => {
    console.log('Color change: ', { color, changeType });
  }

  // Listener for change in status
  const onStatusChange = (status) => {
    console.log('Status change: ', status);
  }

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
            className="color-checkbox"
            type="checkbox"
            name={color}
            checked={checked}
            onChange={handleChange}
          />
          <span className="color-block" style={{ backgroundColor: color}}>
          </span>
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


  return (
    <footer className="footer">
      <div className="footer-actions">
        <h2>Actions</h2>
        <button>Mark all as completed</button>
        <button>Clear completed</button>
      </div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}
