const Input = ({ label, type, name }) => {
  return (
    <div className='mb-4'>
      <label className="block text-base pb-2 " htmlFor={name}>{label}</label>
      <input
        className=' border border-neutral-100 block w-full text-base rounded-md p-3 bg-neutral-100 transition-all duration-200 outline-none hover:border-amber-400/50 hover:bg-white hover:shadow-glow focus:border-amber-400/50 focus:bg-white focus:shadow-glow'
        id={name} 
        name={name}
        type={type}
      />
      <p className="text-red-500 text-sm mt-1">Error</p>  
    </div>
  );
};

export default Input;
