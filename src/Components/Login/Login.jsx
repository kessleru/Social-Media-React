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
    <section className='grid grid-cols-2 min-h-[calc(100dvh-4rem)] gap-8 before:block before:content-[""] before:bg-login max-sm:grid-cols-1 max-sm:gap-0 max-sm:grid-rows-[1fr_auto] [@media_(max-height:800px)]:before:hidden [@media_(max-height:800px)]:grid-cols-1 [@media_(max-height:800px)]:gap-0'>
      <div className='max-w-120 p-4 max-sm:max-w-full sm:mt-8'>
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
