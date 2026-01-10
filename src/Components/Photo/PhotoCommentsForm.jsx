import { useState } from 'react';
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../api';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    console.log(json);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className='grid grid-cols-[1fr_auto] items-stretch m-4'
      onSubmit={handleSubmit}
    >
      <textarea
        className='block w-full font-first resize-none border border-neutral-100 p-2 rounded-md bg-neutral-100 transition duration-150 focus:outline-none focus:border-amber-400/50 focus:shadow-glow hover:outline-none hover:border-amber-400/50 hover:shadow-glow'
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.comment}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
