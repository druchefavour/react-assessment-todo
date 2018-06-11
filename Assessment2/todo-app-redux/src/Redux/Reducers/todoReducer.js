const  todoReducers = (state = [], action) => {
    switch(action.type) {
            case "ADD_TODO_FUFILLED" :
                return  [
                    ...state,  
                    {
                     todos: action.payload
                    }
                ];
                break
            case "SET_TODODESCRIPTION_FUFILLED" :
                return  [
                    ...state,  
                    {
                     description: action.payload
                    }
                ];
                break;
            case 'TOGGLE_TASK_FUFILLED':
            return state.map(todo =>
              (todo.index === action.index)
                ? {...todo, completed: !todo.completed}
                : todo
            )

          default:
            return state
        }
      }
      
      export default todoReducers
           
           