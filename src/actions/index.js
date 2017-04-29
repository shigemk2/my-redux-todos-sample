// Actionsはアプリからstoreにデータを送る情報のペイロード
// typeは基本的に文字列の定数で定義される。アプリが大規模になれば、別のモジュールに入れて管理すると良い
let nextTodoId = 0;
export const addTodo = (text) => ({
  // 必ずtypeが必要
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
