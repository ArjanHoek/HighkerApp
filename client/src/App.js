import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/form/Form';
import Lodges from './components/lodges/Lodges';
import { getLodges } from './_actions/lodges';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLodges());
  }, [dispatch]);

  return (
    <div className="App">
      <Form />
      <Lodges />
    </div>
  );
}

export default App;
