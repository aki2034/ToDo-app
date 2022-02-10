import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '../styles.css';

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
    <label className="panel-block">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleChange}
      />
      <span
        className={classNames({
          'has-text-grey-light': todo.done
        })}
      >
        {todo.text}
      </span>
      <button
        type="button"
        className="deletebutton"
        onClick={handleClick}
        >×</button>
    </label>
  );
}

export default ToDo;