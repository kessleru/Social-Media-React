import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import PageHead from '../Helper/PageHead';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className='container mainContainer'>
      <PageHead title={user} description={`Perfil de ${user}`} />
      <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
        {user}
      </h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
