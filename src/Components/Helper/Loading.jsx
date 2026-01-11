const Loading = () => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-4 p-8'
      role='status'
      aria-label='Carregando conteúdo'
    >
      <div className='w-10 h-10 border-4 border-neutral-200 border-t-amber-400 rounded-full animate-spin' />
      <span className='text-neutral-500 text-sm'>Carregando...</span>
    </div>
  );
};

export default Loading;
