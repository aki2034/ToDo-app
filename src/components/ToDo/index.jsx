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
    <div className=''>
      <input className='title'
        type='text'
        value={tasktitle}
        onChange={handleChangetasktitle}
      >
      </input>
      <input className='contents'
        type='text'
        value={taskcontents}
        onChange={handleChangetasktcontents}
      >
      </input>
      <div className='btn'>
        <button
          type="button"
          className="editbtn"
          onClick={handleChangeNotEdit}
        >キャンセル</button>
        <button
          type="button"
          className="deletebtn"
          onClick={handleOnEdit}
        >保存</button>
      </div>
    </div>
  )

  const p = (
    <div className={todo.done ? 'text done':'text'}>
      <input
        type="checkbox"
        className='check'
        checked={todo.done}
        onChange={handleChange}
      >
      </input>
        <p className={todo.done ? 'text done':'text'}>{tasktitle}</p>
        <p className='contents'>{taskcontents}</p>
        <div className='btn'>
          <button
            type="button"
            className="editbtn"
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
    <div className="all" >
      <div >{Editing ? p : input}</div>
    </div>
  );
}

export default ToDo;