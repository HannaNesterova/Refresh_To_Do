import { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';




const CardForm = (props) => {
const {columnId} = props;


const [title, setTitle] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };
    return (

        <form onSubmit={handleSubmit} className={styles.cardForm}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    )
}

export default CardForm;