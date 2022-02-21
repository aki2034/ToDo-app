import './styles.css';

export const Filter = (props) => {

  // propsを定義
  const { value, onChange } = props;

  // フィルターの切り替え
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };

  return (
    <div className="tabs">
      <a
        href="/#"
        onClick={handleClick.bind(null, 'ALL')}
        className={`tab ${value === 'ALL' ? 'selected' : ""}`}
      >全て</a>
      <a
        href="/#"
        onClick={handleClick.bind(null, 'TODO')}
        className={`tab ${value === 'TODO' ? 'selected' : ""}`}
      >やる事</a>
      <a
        href="/#"
        onClick={handleClick.bind(null, 'DONE')}
        className={`tab ${value === 'DONE' ? 'selected' : ""}`}
      >やった事</a>
    </div>
  );
}

export default Filter;