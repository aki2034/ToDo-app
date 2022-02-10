import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {

    //stateを作成
    const [ Texts, setTexts ] = useState('');

    //入力値をtextに反映
    const handleChange = e => setTexts( e.target.value );
  
    //Enter押下時、ToDoに追加
    const handleEnter = e => {
      if (e.key === 'Enter') {
          // 入力値が空白文字の場合終了
          if (!Texts.match(/\S/g) ) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(Texts);
        setTexts('');
      }
    };
    
    return (
      <div className="panel-block">
        <label>
          追加
        <input
          class="input"
          type="text"
          placeholder="タイトル"  
          value={Texts}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
        </label>
      </div>
    );
  }

export default InputToDo;