import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const addColumn = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={addColumn}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add Column</Button>
    </form>
  );
};
export default ColumnForm;
