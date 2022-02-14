import 'bulma/css/bulma.css';
import './styles.css';

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, onClick } = props;

  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  // ×ボタン押下時、ToDoAppクラスの「handleClick」関数を実行
  const handleClick = () => {
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
      <div className={todo.done ? 'text done':'text'}      >
      <p className='text1'>
        {todo.text}
      </p>
      <p className='text2'>
        {todo.Content}
      </p>
      </div>
      <button
        type="button"
        className="deletebutton"
        onClick={handleClick}
        >削除</button>
    </div>
  );
}

export default ToDo;