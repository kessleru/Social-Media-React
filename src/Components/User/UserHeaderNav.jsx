import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext, useEffect, useState } from 'react';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`mobileButton ${mobileMenu && 'mobileButtonActive'}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? `navMobile ${mobileMenu && 'navMobileActive'}` : 'grid grid-cols-4 gap-4 *:bg-neutral-100 *:rounded-md *:size-10 *:flex *:items-center *:justify-center *:transition *:duration-150 *:border *:border-transparent *:outline-none *:active:scale-95 *:hover:bg-white *:hover:shadow-[0_0_0_3px_#eee] *:focus:bg-white *:focus:shadow-[0_0_0_3px_#eee] [&_.active]:bg-white [&_.active]:shadow-glow [&_.active]:border-[#fb1] [&_.active_svg_*]:fill-[#fb1]'}`}
      >
        <NavLink to='/conta' end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout} className='cursor-pointer'>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
