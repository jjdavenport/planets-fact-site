const Wrapper = ({ children }) => {
  return (
    <div className="bg-stars flex h-full min-h-screen flex-col bg-black bg-center text-white md:gap-4">
      {children}
    </div>
  );
};

export default Wrapper;
