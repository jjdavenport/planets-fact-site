const Image = ({ data }) => {
  return (
    <>
      <img className="object-contain md:w-1/2" src={`.${data}`} />
    </>
  );
};

export default Image;
