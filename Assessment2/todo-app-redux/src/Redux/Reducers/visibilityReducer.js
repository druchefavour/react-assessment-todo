import { VisibilityFilters } from '../Actions/todoActions';

const todoVisibility = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_TODOVISIBILITY_FUFILLED':
      return action.filter
    default:
      return state
  }
}

export default todoVisibility;