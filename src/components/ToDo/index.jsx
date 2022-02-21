import './styles.css';

import { Edit } from './Edit';
import { View } from './View';
import { useState } from 'react';

export const ToDo = (props) => {
  const [ Editing, setEditing ] = useState(true);
  
  const Editer = () => {
    setEditing(Editing ? View : Edit)
  };

  
  return (
    <div>{Editer}</div>
  );
}

export default ToDo;