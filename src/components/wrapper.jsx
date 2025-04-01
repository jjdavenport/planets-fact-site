const Wrapper = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen flex-col gap-4">{children}</div>
  );
};

export default Wrapper;
