import Feed from './Feed/Feed';
import { PageHead } from './Helper/PageHead';

const Home = () => {
  return (
    <main>
      <PageHead
        title='Home'
        description='Página inicial da rede social com as fotos mais recentes'
      />
      <section className='container mainContainer'>
        <Feed />
      </section>
    </main>
  );
};

export default Home;
