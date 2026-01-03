import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';

const Header = () => {
  return (
    <header  className='shadow-sm fixed w-full z-50 bg-white top-0'>
      <nav className='container flex justify-between items-center h-16'>
        <Link className='inline-block py-2' to='/' aria-label='Dogs - Home'>
          <Dogs/>
        </Link>
        <Link className='text-neutral-800 flex items-center after:content-[""] after:inline-block after:ml-2 after:w-[14px] after:h-[17px] after:bg-[url("../Assets/usuario.svg")] after:bg-no-repeat after:bg-center after:relative after:-top-px' to='login'>Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
