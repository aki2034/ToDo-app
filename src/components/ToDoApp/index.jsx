import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import { InputToDo, Filter, ToDo } from '../index';

export const  ToDoApp = () => {

  // ランダムなキーを取得
  const getKey = () => Math.random().toString(32).substring(2);

  // stateを作成
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  // 入力値をtodos(配列)に設定
  const handleAdd = (Title, Content) => {
    setToDos([...todos, { key: getKey(), Title, Content, done: false }]);
  };

  /* 項目の編集
  const handleEdit = (key, newTitle, newContent) => {
    const editToDo = todos.map(todo => {
      if(key === todo.key) {
        //
        return {...todo, Title: newTitle, Content: newContent}
      }
      return todo;
    });
    setToDos(editToDo);
  };*/

  // 項目の削除
  const handleDelete = todokey => {
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
          onClick={handleDelete}
          />
      ))}
      <div className="panel-block">
        {displayToDos.length} todos
      </div>
    </div>
  );
}

export default ToDoApp;