import Error from "../Helper/error";

const Input = ({ label, type, name , value, onChange, error, onBlur}) => {
  return (
    <div className='mb-4'>
      <label className="block text-base pb-2 " htmlFor={name}>{label}</label>
      <input
        className='text-neutral-800 border border-neutral-100 block w-full text-base rounded-md p-3 bg-neutral-100 transition-all duration-200 outline-none hover:border-amber-400/50 hover:bg-white hover:shadow-glow focus:border-amber-400/50 focus:bg-white focus:shadow-glow'
        id={name} 
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Error error={error}/>
    </div>
  );
};

export default Input;
