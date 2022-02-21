import { useState } from "react";
import './styles.css';

export const View = (props) => {

  // stateを作成
  const { todo, onCheck, onClick } = props;
  const [ tasktitle, settasktitle ] = useState(todo.Title);
  const [ taskcontents, settaskcontents ] = useState(todo.Contents);
  const [ Editing, setEditing ] = useState(true);


  // チェックボックスを押した時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  const handleChangeEdit = () => {
    setEditing(false)
  };

  // 削除ボタンを押した時、ToDoAppクラスの「deleteClick」関数を実行
  const deleteClick = () => {
    onClick(todo.key);
  };

return (
    <div className='all'>
      <input
        type="checkbox"
        className='check'
        checked={todo.done}
        onChange={handleChange}
      >
      </input>
      <div className='todo'>
        <p className={todo.done ? 'title done':'title'}>{tasktitle}</p>
        <p className={todo.done ? 'contents done':'contents'}>{taskcontents}</p>
      </div>
      <div className='frontbtn'>
        <button
          type="button"
          className="editbtn"
          disabled={todo.done}
          onClick={handleChangeEdit}
        >編集</button>
        <button
          type="button"
          className="deletebtn"
          onClick={deleteClick}
        >削除</button>
      </div>
    </div>
  );

}

export default View;