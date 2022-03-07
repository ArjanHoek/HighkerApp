import { useDispatch } from 'react-redux';
import { deletePost } from '../../../_actions/posts';

export default function Post({
  author,
  title,
  content,
  createAt,
  setId,
  postId,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(postId));
  };

  const handleUpdate = () => {
    setId(postId);
  };

  return (
    <div style={style}>
      <p>Author: {author}</p>
      <h1>{title}</h1>
      <h3>{content}</h3>
      <span>{createAt}</span>
      <div>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

const style = {
  border: '1px solid black',
  margin: '10px 0',
  padding: '10px',
};
