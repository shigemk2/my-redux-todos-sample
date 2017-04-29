import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// todoのリストを見る
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    // 全部
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED': // 完了したやつ
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE': // 完了していないやつ
      return todos.filter(t => !t.completed)
    default: // どれでもなかったらエラー
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

// connectでバインドする
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
