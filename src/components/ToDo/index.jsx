import { useState } from "react";
import './styles.css';

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, onClick, onChange } = props;
  const [ tasktitle, settasktitle ] = useState(todo.Title);
  const [ taskcontents, settaskcontents ] = useState(todo.Contents);
  const [ modeChange, setmodeChange ] = useState(true);

  // チェックボックスを押した時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  const handleChangetasktitle = (e) => {
    const value = e.target.value;
    settasktitle(value)
  };

  //
  const handleChangetasktcontents = (e) => {
    const value = e.target.value;
    settaskcontents(value)
  };

  const handlemodeChange = () => {
    setmodeChange(!modeChange)
  };

  // 
  const handleEdit = () => {
    onChange(todo.key, tasktitle, taskcontents);
    handlemodeChange();
  };

  // 削除ボタンを押した時、ToDoAppクラスの「deleteClick」関数を実行
  const deleteClick = () => {
    onClick(todo.key);
  };

return (
    <div className='all'>
      <>
      {modeChange ? <input
        type="checkbox"
        className='check'
        checked={todo.done}
        onChange={handleChange}
      /> : <input
        type="checkbox"
        className='check'
        disabled='disabled'
      />}
      </>
      <div className='todo'>
        {modeChange ? 
        <>
          <p className={todo.done ? 'title done':'title'}>{todo.Title}</p>
          <p className={todo.done ? 'contents done':'contents'}>{todo.Contents}</p>
        </> : 
        <>
          <input className='titlein'
            type='text'
            value={tasktitle}
            onChange={handleChangetasktitle}
        />
          <input className='contentsin'
            type='text'
            value={taskcontents}
            onChange={handleChangetasktcontents}
        />
        </>
        }
      </div>
      <div className='btn'>
        <button
          type="button"
          className="editbtn"
          disabled={todo.done}
          onClick={handlemodeChange}
        >{modeChange ? '編集' : 'キャンセル' }</button>
        <button
          type="button"
          className="deletebtn"
          onClick={modeChange ? deleteClick : handleEdit}
        >{modeChange ? '削除' : '保存' }</button>
      </div>
    </div>
  );

}