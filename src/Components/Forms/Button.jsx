const Button = ({ children, ...props }) => {
  return (
    <button {...props} className='text-base cursor-pointer rounded-md bg-amber-400 text-amber-950 py-3 px-4 min-w-32 transition-all duration-200 hover:shadow-glow focus:shadow-glow focus:outline-none disabled:opacity-50 disabled:cursor-wait disabled:shadow-none'>
      {children}
    </button>
  );
};

export default Button;
