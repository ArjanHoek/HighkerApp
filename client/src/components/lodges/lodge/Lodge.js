import { useDispatch, useSelector } from 'react-redux';
import { deleteLodge } from '../../../_actions/lodges';
import styles from './Lodge.module.css';

export default function Lodge({ id }) {
  const dispatch = useDispatch();

  const { name } = useSelector(state =>
    state.lodges.find(lodge => lodge._id === id)
  );

  const handleDelete = () => {
    dispatch(deleteLodge(id));
  };

  return (
    <div className={styles.container}>
      <p>{name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
