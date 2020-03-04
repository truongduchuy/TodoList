import { CHANGE_USER, TODO_ITEM_CHANGE, UPDATE_TODO_LIST, UPDATE_TODO_ITEM, EDIT_TODO_ITEM, CANCEL_EDIT } from "./types";
import { combineReducers } from 'redux';

// user Reducer
const initialUserState = { user: { username: '', password: '' }, isLogined: false };

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      const { key, value } = action.payload;

      return {
        ...state,
        user: { ...state.user, [key]: value }
      }
    default: return state
  }
}

// todo Reducer
const initialTodoState = {
  todoList: [
    { name: "Huy", priority: 2, endsAt: "2020-02-28" },
    { name: "Truong", priority: 1, endsAt: "2020-02-28" },
  ],
  todoItem: { name: "", priority: 1, endsAt: "" },
  isAdd: true,
  indexUpdate: 0
}

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case TODO_ITEM_CHANGE: return {
      ...state,
      todoItem: action.payload
    }
    case UPDATE_TODO_LIST: return {
      ...state,
      todoList: action.payload
    }
    case UPDATE_TODO_ITEM:
      return {
        ...state,
        todoList: action.payload,
        isAdd: true
      }
    case EDIT_TODO_ITEM:
      const { isAdd, indexUpdate, todoItem } = action.payload;
      return {
        ...state,
        isAdd,
        indexUpdate,
        todoItem
      }
    case CANCEL_EDIT: return {
      ...state,
      isAdd: true,
      todoItem: { name: "", priority: 1, endsAt: "" }
    }
    default: return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
});

export default rootReducer;