import { useState } from "react";
import './styles.css';

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, onClick, onChange } = props;
  const [ taskTitle, setTaskTitle ] = useState(todo.title);
  const [ taskContents, setTaskContents ] = useState(todo.contents);
  const [ modeChange, setModeChange ] = useState(true);

  // チェックボックスを押した時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  const handleChangeTaskTitle = (e) => {
    const value = e.target.value;
    setTaskTitle(value)
  };

  //
  const handleChangeTaskContents = (e) => {
    const value = e.target.value;
    setTaskContents(value)
  };

  const handleModeChange = () => {
    setModeChange(!modeChange)
  };

  // 
  const handleEdit = () => {
    onChange(todo.key, taskTitle, taskContents);
    handleModeChange();
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
        <p className='time'>{todo.time}</p>
        {modeChange ? 
        <>
          <p className={todo.done ? 'displaytitle done':'displaytitle'}>{todo.title}</p>
          <p className={todo.done ? 'displaycontents done':'displaycontents'}>{todo.contents}</p>
        </> : 
        <>
          <input className='edittitle'
            type='text'
            value={taskTitle}
            onChange={handleChangeTaskTitle}
        />
          <input className='editcontents'
            type='text'
            value={taskContents}
            onChange={handleChangeTaskContents}
        />
        </>
        }
      </div>
      <div className='btn'>
        <button
          type="button"
          className={modeChange ? 'editbtn' : 'cancelbtn'}
          disabled={todo.done}
          onClick={handleModeChange}
        >{modeChange ? '編集' : 'キャンセル' }</button>
        <button
          type="button"
          className={modeChange ? 'deletebtn' : 'savebtn'}
          onClick={modeChange ? deleteClick : handleEdit}
        >{modeChange ? '削除' : '保存' }</button>
      </div>
    </div>
  );

}