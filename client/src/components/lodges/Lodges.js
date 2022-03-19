import { useSelector } from 'react-redux';
import Lodge from './lodge/Lodge';

export default function Lodges() {
  const lodges = useSelector(state => state.lodges);
  return lodges.map(lodge => <Lodge key={lodge._id} id={lodge._id} />);
}
