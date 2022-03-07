import { useForm } from 'react-hook-form';
import { createPost, updatePost } from '../../_actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Form({ getId, setId }) {
  const post = useSelector(state =>
    state.posts.find(post => (post._id === getId ? post : null))
  );
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    if (getId !== 0) {
      dispatch(updatePost(getId, data));
    } else {
      dispatch(createPost(data));
    }
    reset();
  };

  useEffect(() => {
    if (getId !== 0) {
      let keys = Object.keys(post);
      keys.forEach(key => setValue(key, post[key]));
    }
  }, [getId, post, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            {...register('author')}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            {...register('title')}
          />
        </div>
        <div>
          <input
            type="text"
            name="content"
            placeholder="Content"
            {...register('content')}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
