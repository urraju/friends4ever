const ShareButton = ({ children }) => {
  return (
    <div>
      <button type='submit' className="text-white font-cinzel  text-sm bg-[#7532D4] px-6 py-2 rounded hover:animate-pulse">
        {children}
      </button>
    </div>
  );
};
export default ShareButton;
