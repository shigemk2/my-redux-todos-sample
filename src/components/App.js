import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

// ビューの部分。AddTodo/VisibleTodoList/Footerで実装を分離する
// HTMLのぶぶんは、ここで実装
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
