import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import  usePersist  from '../Persist'

export const InputToDo = (props) => {
  
  //stateの作成
  const [memo, setMemo] = usePersist("memo", [])
  const [Title, setTitle] = useState('')

  //入力値をtextに反映
  const handleChange = (e)=> {
    setTitle(e.target.value)
  }

  //追加ボタンを押したときにToDoに追加
  const handleBtn = (e)=> {
    const data = {
      Title: Title,
      created: new Date()
    }
    memo.unshift(data)
    setMemo(memo)
    setTitle('')
  }

    /* stateを作成
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
  
    //Enter押下時、ToDoに追加
    const handleEnter = e => {
      if (e.key === 'Enter') {
          // 入力値が空白文字の場合終了
          if (!Texts.match(/\S/g) ) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(Texts);
        setTexts('');
      }
    };*/
    
    return (
      <form onSubmit={handleBtn} action="">
      <div className="panel-block">
        <label>
          項目
        <input
          class="input"
          type="text"
          name="Title"
          placeholder="タイトル"  
          value={Title}
          onChange={handleChange}
        />
        <input
          class="btn"
          type="submit" 
          value="追加" 
        />
        </label>
      </div>
      </form>
    );
  }

export default InputToDo;