import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {
  
    // stateを作成
    const [Texts, setTexts] = useState({
      Title: '',
      Content: '',
    });

    //入力値をtextに反映
    const handleChange = e => {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      setTexts({ ...Texts, [name]: value });
    }
  
    // Enter押下時、ToDoに追加
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
          タイトル
        <input
          class="input"
          type="text"
          name="Title"
          placeholder="タイトル"  
          defaultValue={Texts.Title}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
        </label>
        <label>
          内容
        <input 
          class="input"
          type="text"
          name="Content"
          placeholder="内容"
          defaultValue={Texts.Content}
          onChange={handleChange}
          onKeyPress={handleEnter}
        ></input>
        </label>
      </div>
    );
  }

export default InputToDo;