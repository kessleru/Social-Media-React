import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className='shadow-sm fixed w-full z-50 bg-white top-0'>
      <nav className='container flex justify-between items-center h-16'>
        <Link className='inline-block py-2' to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link
              className='text-neutral-800 font-semibold flex items-center after:p-4 after:border after:rounded-full after:bg-neutral-200/50 after:content-[""] after:inline-block after:ml-2 after:w-3.5 after:h-4.25 after:user-icon after:bg-no-repeat after:bg-center after:relative after:-top-0.5px active:scale-95 duration-150 transition'
              to='/conta'
            >
              {data.nome}
            </Link>
          </>
        ) : (
          <Link
            className='relative inline-flex items-center text-neutral-800 font-semibold select-none transition duration-150 ease-out active:scale-95 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-neutral-800 after:transition-[width] after:duration-200 hover:after:w-full'
            to='/login'
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
