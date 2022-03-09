import { useDispatch, useSelector } from 'react-redux';
import { deleteLodge } from '../../../_actions/lodges';

export default function Lodge({ id }) {
  const dispatch = useDispatch();

  const { name } = useSelector(state =>
    state.lodges.find(lodge => lodge._id === id)
  );

  const handleDelete = () => {
    dispatch(deleteLodge(id));
  };

  return (
    <div style={style}>
      <p>{name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

const style = {
  border: '1px solid black',
  margin: '10px 0',
  padding: '10px',
};
