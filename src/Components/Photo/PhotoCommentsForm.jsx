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
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className='grid grid-cols-[1fr_auto] items-stretch m-4 gap-2'
      onSubmit={handleSubmit}
    >
      <textarea
        className='block w-full font-first resize-none border border-neutral-200 p-2 rounded-md bg-neutral-100 transition duration-150 focus:outline-none focus:border-amber-400 focus:shadow-glow focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1 hover:border-amber-400/50 hover:shadow-glow'
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        aria-label='Escreva seu comentário'
        rows={2}
      />
      <button
        className={styles.comment}
        type='submit'
        aria-label='Enviar comentário'
      >
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
