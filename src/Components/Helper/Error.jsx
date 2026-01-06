const Error = ({ error }) => {
  if (!error) return null;

  return <p className='text-red-500 text-sm mt-2'>{error}</p>;
};

export default Error;
