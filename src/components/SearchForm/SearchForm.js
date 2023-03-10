import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';



const SearchForm = () => {
    const [searchLet, setSearchLet] = useState('');
    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);


    const handleSubmit = (e) => {
        e.preventDefault();
          dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchLet });
          setSearchLet('');
    }
    const handleInputChange = (e) => {
        setSearchLet(e.target.value);
      }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." 
            value={searchLet} 
            onChange={handleInputChange}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };


export default SearchForm;