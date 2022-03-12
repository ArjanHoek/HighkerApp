import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/form/Form';
import Lodges from './components/lodges/Lodges';
import Header from './layout/header/Header';
import { getLodges } from './_actions/lodges';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLodges());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Form />
      <Lodges />
    </div>
  );
}

export default App;
