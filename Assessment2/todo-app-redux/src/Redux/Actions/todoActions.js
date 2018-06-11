let newTodoId = 0;

export const addNewTODO = title => ({
        type: "ADD_TODO_FUFILLED",
        payload: {
            title: " ",
            index: newTodoId++,
            isCompleted: false,  
        }
    })

export const setTODOvissibility = filter => ({
        type: "SET_TODOVISIBILITY_FUFILLED",
        payload: filter
    })

export const toggleTask = index => ({
        type: "TOGGLE_TASK_FUFILLED",
        payload: {
            index: newTodoId++,
            title: ""
        }
    })

export const setTododescription = description => ({
        type: "SET_TODODESCRIPTION_FUFILLED",
        payload: {
            title :  "",
            desciption: " ",
            index: newTodoId++
        }
    })

export const VisibilityFilters = {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_COMPLETED: 'SHOW_COMPLETED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
      }