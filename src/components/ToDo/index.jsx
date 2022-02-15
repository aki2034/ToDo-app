import './styles.css';

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, onChange, onClick } = props;

  // チェックボックスを押した時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  // 
  const handleOnEdit = () => {
    onChange(todo);
  };

  // 削除ボタンを押した時、ToDoAppクラスの「deleteClick」関数を実行
  const deleteClick = () => {
    onClick(todo.key);
  };

  return (
    <div className="all" >
      <input
        type="checkbox"
        className='check'
        checked={todo.done}
        onChange={handleChange}
      />
      <div className={todo.done ? 'text done':'text'}>
        <input className='text1'
          type='text'
          value={todo.Title}
          onChange={(e) => handleOnEdit(todo.key, e.target.value)}
        >
        </input>
        <input className='text2'
          type='text'
          value={todo.Contents}
          onChange={(e) => handleOnEdit(todo.key, e.target.value)}
        >
        </input>
      </div>
      <div className='btn'>
        <button
          type="button"
          className="deletebtn"
          onClick={deleteClick}
        >削除</button>
      </div>
    </div>
  );
}

export default ToDo;