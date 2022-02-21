import { useState } from "react";
import './styles.css';

export const Edit = (props) => {

  // stateを作成
  const { todo, onChange, } = props;
  const [ tasktitle, settasktitle ] = useState(todo.Title);
  const [ taskcontents, settaskcontents ] = useState(todo.Contents);
  const [ Editing, setEditing ] = useState(true);


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

  const handleChangeNotEdit = () => {
    setEditing(true)
    };

return (
    <div className='all'>
      <input
        type="checkbox"
        className='check'
        disabled='disabled'
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
  );

}

export default Edit;