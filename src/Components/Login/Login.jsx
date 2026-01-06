import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to='/conta' />;

  return (
    <section className='grid grid-cols-2 min-h-screen gap-8 before:block before:content-[""] before:bg-login max-sm:grid-cols-1 max-sm:gap-0 max-sm:min-h-[calc(100dvh-4rem)] max-sm:grid-rows-[1fr_auto]'>
      <div className='max-w-120 p-4 max-sm:max-w-full'>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
