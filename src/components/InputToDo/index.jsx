import React, { useState } from 'react';
import './styles.css'

export const InputToDo = (props) => {

    //stateを作成
    const [ Title, setTitle ] = useState('');
    const [ Contents, setContents ] = useState('');

    //入力値をtextに反映
    const handleChange = e => setTitle(e.target.value);
    const handleChange2 = e => setContents(e.target.value);

    //Enter押下時、ToDoに追加
    const handleEnter = e => {
      if (e.key === 'Enter') {
          // 入力値が空白文字の場合終了
          if (!Title.match(/\S/g) )return;
          if (!Contents.match(/\S/g) )return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(Title, Contents);
        setTitle('');
        setContents('');
      }
    };
    
    return (
      <div className='input'>
        <input className='title'
          class="input"
          type="text"
          placeholder="タイトル"  
          value={Title}
          onChange={handleChange}
        />
        <input className='contents'
          class="input"
          type="text"
          placeholder="内容"  
          value={Contents}
          onChange={handleChange2}
          onKeyPress={handleEnter}
        />
      </div>
    );
  }