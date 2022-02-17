import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';

import { InputToDo, Filter, ToDo } from '../index';

export const  ToDoApp = () => {

  // ランダムなキーを取得
  const getKey = () => Math.random().toString(32).substring(2);

  // stateを作成
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState('ALL');


  useEffect(() => {
    console.log(todos)
  }, [todos] )

  // 入力値をtodos(配列)に設定
  const handleAdd = (Title, Contents) => {
    setToDos([...todos, { key: getKey(), Title, Contents, done: false }]);
  };

  //項目の編集
  const handleOnEdit = (key, Title, Contents) => {
    /**
     * ディープコピー:
     * 同じく Array.map() を利用するが、それぞれの要素をスプレッド構文で
     * いったんコピーし、それらのコピー (= Todo 型オブジェクト) を要素とする
     * 新しい配列を再生成する。
     *
     * 以下と同義:
     * const deepCopy = todos.map((todo) => ({
     *   value: todo.value,
     *   id: todo.id,
     * }));
     */
    const deepCopy = todos.map((todo) => ({ ...todo }));

    // ディープコピーされた配列に Array.map() を適用
    const newToDos = deepCopy.map((todo) => {
      if(todo.key === key) {
        todo.Title = Title;
        todo.Contents = Contents;
      }
      return todo;
    });
    
    setToDos(newToDos);
  };

  // 項目の削除
  const deleteClick = todokey => {
    setToDos((prevtodos) => prevtodos.filter(todo => todo.key !== todokey));
  };

  // フィルターの切り替え
  const handleFilterChange = value => setFilter(value);

  // フィルターに応じたToDoを表示
  const displayToDos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !todo.done;
    if (filter === 'DONE') return todo.done;
    return true;
  });

  // チェックボックス判定
  const handleCheck = checked => {
    // チェックがついたToDoの真偽値(done)を変更
    const newToDos = todos.map(todo => {
      if (todo.key === checked.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToDos(newToDos);
  };

  return (
    <div className="panel is-warning">
      <div className="panel-heading">
        ToDo
      </div>
      <InputToDo onAdd={handleAdd}/>
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayToDos.map(todo => (
        <ToDo
          key={todo.key}
          todo={todo}
          onCheck={handleCheck}
          onChange={handleOnEdit}
          onClick={deleteClick}
          />
      ))}
      <div className="panel-block">
        {displayToDos.length} todos
      </div>
    </div>
  );
}

export default ToDoApp;