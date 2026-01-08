import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext, useState } from 'react';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className='grid grid-cols-4 gap-4 *:bg-neutral-100 *:rounded-md *:size-10 *:flex *:items-center *:justify-center *:transition *:duration-150 *:border *:border-transparent *:outline-none *:active:scale-95 *:hover:bg-white *:hover:shadow-[0_0_0_3px_#eee] *:focus:bg-white *:focus:shadow-[0_0_0_3px_#eee] [&_.active]:bg-white [&_.active]:shadow-glow [&_.active]:border-amber-400/50 [&_.active_svg_*]:fill-[#fb1]'>
      <NavLink to='/conta' end>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas />
        {mobile && 'Estastísticas'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout} className='cursor-pointer'>
        <Sair />
        {mobile && Sair}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
