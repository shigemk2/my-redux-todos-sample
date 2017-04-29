import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  // 2つのReduceerがありまして、reducersをここでまとめる
  todos,
  visibilityFilter
})

export default todoApp
