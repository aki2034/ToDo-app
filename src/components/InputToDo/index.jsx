import React, { useState } from 'react';
import './styles.css'

export const InputToDo = (props) => {

    //stateを作成
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');

    //入力値をtextに反映
    const handleChange = e => setTitle(e.target.value);
    const handleChange2 = e => setContents(e.target.value);

    const now = new Date();
    const time = ("0" + (now.getMonth() + 1)).slice(-2) + '/' + ("0" + now.getDate()).slice(-2) + ' ' + ("0" + now.getHours()).slice(-2) + ':' + ("0" + now.getMinutes()).slice(-2);

    //Button押下時、ToDoに追加
    const handleClick = e => {
          // 入力値が空白文字の場合終了
          if (!title.match(/\S/g) )return;
          if (!contents.match(/\S/g) )return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(time, title, contents);
        setTitle('');
        setContents('');
    };
    
    return (
      <div className='inputall'>
        <div className='inputtodo'>
          <input className='inputtitle'
            type="text"
            placeholder="タイトル"  
            value={title}
            onChange={handleChange}
          />
          <input className='inputcontents'
            type="text"
            placeholder="内容"  
            value={contents}
            onChange={handleChange2}
          />
        </div>
        <button 
          className='inputbtn'
          type="button"
          onClick={handleClick}
          >追加</button>
      </div>
    );
  }