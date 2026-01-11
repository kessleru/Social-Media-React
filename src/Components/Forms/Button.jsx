const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='font-first text-sm font-bold cursor-pointer rounded-md bg-amber-400 text-amber-900 tracking-wider py-3 px-5 min-w-32 transition duration-150 select-none uppercase hover:shadow-glow focus:shadow-glow focus:outline-none disabled:opacity-50 disabled:cursor-wait disabled:shadow-none active:scale-95'
    >
      {children}
    </button>
  );
};

export default Button;
