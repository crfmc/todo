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
    case 'filters/colorFilterChanged': {
      const { color, changeType } = action.payload;
      const { colors } = state;

      switch (changeType) {
        case 'added': {
          if (colors.includes(color)) {
            return state
          }
          else {
            return {
              ...state,
              colors: state.colors.concat(color) 
            }
          }
        }
        case 'removed': {
          return {
            ...state,
            colors: state.colors.filter(existingColor => existingColor !== color)
          }
        }
        default:
          return state
      }
    }
    default:
      return state
  }
}