import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  // 2つのReduceer
  todos,
  visibilityFilter
})

export default todoApp
