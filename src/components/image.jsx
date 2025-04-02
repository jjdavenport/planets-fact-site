const Image = ({ data }) => {
  return (
    <>
      <img className="w-1/2 object-contain" src={`.${data}`} />
    </>
  );
};

export default Image;
