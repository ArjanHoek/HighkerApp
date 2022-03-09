import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createLodge } from '../../_actions/lodges';

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(createLodge(data));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register('name')}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            {...register('country')}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
