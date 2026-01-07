const Error = ({ error }) => {
  if (!error) return null;

  return (
    <p className='inline-block text-red-500 text-base mt-2 p-1 border rounded-md bg-red-100 whitespace-pre-line'>
      {error}
    </p>
  );
};

export default Error;
