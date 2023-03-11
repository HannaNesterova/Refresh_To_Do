import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';




const Column = (props) => {
  //const [searchString, setSearchString] = useState('');

  const searchString = useSelector ((state) => state.searchString);
  //const allCards = useSelector((state) => state.cards);
  const cards = useSelector((state) => state.cards).filter(
    (card) => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()));



  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

/*const Column = (props) => {
  const searchString = useSelector((state) => state.searchString);
  const allCards = useSelector((state) => state.cards);

  const cards = allCards.filter(
    (card) => 
    card.columnId === props.id && card.title.includes(searchString)
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {allCards
          .filter((card) => card.columnId === props.id)
          .map((card) => (
            <Card key={card.id} title={card.title} />
          ))}
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};*/


export default Column;