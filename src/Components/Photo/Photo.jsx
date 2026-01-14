import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_ID_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import PageHead from '../Helper/PageHead';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_ID_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className='container mainContainer '>
        <PageHead
          title={data.photo.title}
          description={`Foto de ${data.photo.author}`}
        />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
