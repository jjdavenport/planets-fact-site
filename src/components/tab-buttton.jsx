const TabButton = ({ onClick, className, children }) => {
  return (
    <>
      <button
        className={`relative -bottom-[1px] w-full border-b-4 py-4 font-spartan text-xs font-semibold uppercase tracking-wide md:border md:px-4 md:text-left ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default TabButton;
