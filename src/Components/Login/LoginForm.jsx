import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animate-animeLeft'>
      <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
        Login
      </h1>
      <form action='' onSubmit={handleSubmit} className='mb-2'>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link
        to='/login/perdeu'
        className='relative inline-block text-neutral-600 mt-2 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-neutral-600 after:transition-[width] after:duration-200 hover:after:w-full'
      >
        Perdeu a Senha?
      </Link>
      <div className='mt-8 sm:mt-18'>
        <h2 className='font-second text-3xl after:block after:bg-neutral-200 after:w-12 after:h-2 after:rounded-md'>
          Cadastrar-se
        </h2>
        <p className='mt-4'>Ainda não possue conta? Cadastrar-se no site.</p>
        <Link
          to='/login/criar'
          className='inline-block text-center font-first text-base cursor-pointer rounded-md bg-amber-400 text-amber-950 py-3 px-5 min-w-32 mt-4 sm:mt-8 transition duration-150 select-none hover:shadow-glow focus:shadow-glow focus:outline-none disabled:opacity-50 disabled:cursor-wait disabled:shadow-none'
        >
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
