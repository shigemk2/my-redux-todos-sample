import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// ビューの部分の実装。connectで実際に使えるようにする
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => { // フォームの送信ボタンを押したときのハンドラー　http://qiita.com/kazusa-qooq/items/d99fc5c86f0907f09d24
        e.preventDefault() // イベントキャンセル。これがないとずっと描画し続ける http://stackoverflow.com/questions/40877148/is-there-a-good-way-to-preventdefault-when-dispatching-an-action-in-react-redux
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node // 出力された任意のコンポーネントに割り当てる http://js.studio-kingdom.com/react/guides/more_about_refs
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
