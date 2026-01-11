const Error = ({ error, id }) => {
  if (!error) return null;

  return (
    <p
      id={id}
      role='alert'
      aria-live='polite'
      className='relative inline-block text-red-500 text-base mt-2 whitespace-pre-line'
    >
      {error}
    </p>
  );
};

export default Error;
