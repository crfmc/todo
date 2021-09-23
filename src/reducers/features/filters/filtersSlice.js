export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}


const initialState = {
  status: 'All',
  colors: []
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChange': {
      return {
        ...state,
        status: action.payload
      }
    }
    default:
      return state
  }
}