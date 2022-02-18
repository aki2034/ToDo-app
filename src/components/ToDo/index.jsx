import { useState } from 'react';
import './styles.css';

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, onChange, onClick } = props;
  const [ tasktitle, settasktitle ] = useState(todo.Title);
  const [ taskcontents, settaskcontents ] = useState(todo.Contents);
  const [ Editing, setEditing ] = useState(true);

  // チェックボックスを押した時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  // 
  const handleChangetasktitle = (e) => {
    const value = e.target.value;
    settasktitle(value)
  };

  //
  const handleChangetasktcontents = (e) => {
    const value = e.target.value;
    settaskcontents(value)
  };

  // 
  const handleOnEdit = () => {
    onChange(todo.key, tasktitle, taskcontents);
  };

  // 削除ボタンを押した時、ToDoAppクラスの「deleteClick」関数を実行
  const deleteClick = () => {
    onClick(todo.key);
  };

  const handleChangeNotEdit = () => {
    setEditing(true)
  }

  const handleChangeEdit = () => {
    setEditing(false)
  }

  const input = (
    <div className='all'>
      <input
        type="checkbox"
        className='check'
        disabled='disabled'
        onChange={handleChange}
      >
      </input>
      <div className='todoin'>
        <input className='titlein'
          type='text'
          value={tasktitle}
          onChange={handleChangetasktitle}
        >
        </input>
        <input className='contentsin'
          type='text'
          value={taskcontents}
          onChange={handleChangetasktcontents}
        >
        </input>
      </div>
      <div className='backbtn'>
        <button
          type="button"
          className="CNbtn"
          onClick={handleChangeNotEdit}
        >キャンセル</button>
        <button
          type="button"
          className="savebtn"
          onClick={() => {
            handleOnEdit();
            handleChangeNotEdit();
          }}
        >保存</button>
      </div>
    </div>
  )

  const p = (
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

  return (
    <div>{Editing ? p : input}</div>
  );
}

export default ToDo;