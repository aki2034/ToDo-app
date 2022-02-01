import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {
  
    // stateを作成
    const [Titletext, setTitleText] = useState('');
    const [Contenttext, setContentText] = useState('');

    //入力値をtextに反映
    const handleTitleChange = e => setTitleText(e.target.value);
    const handleContentChange = e => setContentText(e.target.value);

    // Enter押下時、ToDoに追加
    const handleEnter = e => {
      if (e.key === 'Enter') {
          // 入力値が空白文字の場合終了
          if (!Titletext.match(/\S/g) ) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(Titletext, Contenttext);
        setContentText('');
      }
    };
    
    return (
      <div className="panel-block">
        <label>
          項目
        <input
          class="input"
          type="text"
          placeholder="タイトル"  
          value={Titletext}
          onChange={handleTitleChange}
        />
        <input 
          class="input"
          type="text"
          placeholder='内容'
          value={Contenttext}
          onChange={handleContentChange}
          onKeyPress={handleEnter}
        ></input>
        </label>
      </div>
    );
  }

export default InputToDo;