const Image = ({ data }) => {
  return (
    <>
      <img className="w-1/2 object-contain md:w-5/12" src={`.${data}`} />
    </>
  );
};

export default Image;
