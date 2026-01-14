import React from 'react';
import { PageHead } from './Helper/PageHead';

const NotFound = () => {
  return (
    <div className='container mainContainer'>
      <PageHead title='404' description='Página não encontrada' />
      <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
        Erro: 404
      </h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export default NotFound;
