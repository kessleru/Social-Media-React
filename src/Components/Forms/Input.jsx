import Error from '../Helper/Error';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className='mb-4'>
      <label className='block text-lg pb-2' htmlFor={name}>
        {label}
      </label>
      <input
        className='text-neutral-800 border border-neutral-200 block w-full text-base rounded-md p-3 bg-neutral-100 transition duration-150 outline-none hover:border-amber-400/50 hover:bg-white hover:shadow-glow focus:border-amber-400 focus:bg-white focus:shadow-glow focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500'
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      <Error error={error} id={`${name}-error`} />
    </div>
  );
};

export default Input;
