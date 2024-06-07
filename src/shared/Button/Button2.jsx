const Button2 = ({children}) => {
  return (
    <div>
      <button className="border font-cinzel text-sm rounded px-6 py-2 border-[#FEA833] text-[#FEA833]  hover:animate-pulse">
        {children}
      </button>
    </div>
  );
};
export default Button2;
