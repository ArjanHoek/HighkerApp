import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import { getPosts } from './_actions/posts';

function App() {
  const [id, setId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Form setId={setId} getId={id} />
      <Posts setId={setId} />
    </div>
  );
}

export default App;
