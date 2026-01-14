import { useEffect, useState } from 'react';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { PHOTO_POST } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import { PageHead } from '../Helper/PageHead';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className='animate-animeLeft grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8'>
      <PageHead title='Postar Foto' description='Publique uma nova foto' />
      <form onSubmit={handleSubmit} className='order-2 md:order-1'>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input
          className='sr-only'
          type='file'
          name='img'
          id='img'
          onChange={handleImgChange}
          accept='image/*'
          aria-label='Selecionar imagem para upload'
        />
        <label
          htmlFor='img'
          className='mb-4 flex flex-col items-center justify-center gap-2 w-full py-4 px-4 border-2 border-dashed border-neutral-300 rounded-md cursor-pointer transition-colors duration-150 hover:border-amber-400 hover:bg-neutral-50 text-neutral-500 hover:text-amber-500 focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 focus-within:border-amber-400'
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <span className='text-sm'>
            {img.preview ? 'Clique para trocar' : 'Clique para enviar'}
          </span>
        </label>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
      <div className='sm:order-2'>
        {img.preview && (
          <div className='flex gap-4 sm:block'>
            <div className='w-40 h-40 sm:w-full sm:h-80 overflow-hidden rounded-md shrink-0'>
              <img
                className='w-full h-full object-cover object-center block'
                src={img.preview}
                alt='Preview'
              />
            </div>
            <div className='flex flex-col text-sm sm:hidden'>
              <p>
                <span className='font-semibold'>Nome:</span> {nome.value || '-'}
              </p>
              <hr className='border-t-2 border-amber-400 my-2' />
              <p>
                <span className='font-semibold'>Peso:</span> {peso.value || '-'}{' '}
                kg
              </p>
              <hr className='border-t-2 border-amber-400 my-2' />
              <p>
                <span className='font-semibold'>Idade:</span>{' '}
                {idade.value || '-'} anos
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
