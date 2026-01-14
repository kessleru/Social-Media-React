import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import PageHead from '../Helper/PageHead';

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
      <PageHead title='Login' description='Faça login para acessar sua conta' />
      <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
        Login
      </h1>
      <form action='' onSubmit={handleSubmit} className='mb-4'>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        <div className='flex flex-col items-start'>
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error} />
        </div>
      </form>
      <Link
        to='/login/perdeu'
        className='relative inline-block text-neutral-600 mt-4 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-[width] after:duration-200 hover:text-amber-600 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm'
      >
        Perdeu a Senha?
      </Link>
      <div className='mt-8 sm:mt-16'>
        <h2 className='text-neutral-800 font-second text-3xl after:block after:bg-neutral-200 after:w-12 after:h-2 after:rounded-md'>
          Cadastrar-se
        </h2>
        <p className='mt-4'>Ainda não possue conta? Cadastrar-se no site.</p>
        <Link
          to='/login/criar'
          className='inline-block text-amber-900 tracking-wider font-bold text-center font-first text-sm cursor-pointer rounded-md bg-amber-400 py-3 px-5 min-w-32 mt-4 sm:mt-8 transition duration-150 select-none uppercase hover:brightness-105 hover:shadow-glow focus:shadow-glow focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus:outline-none'
        >
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
