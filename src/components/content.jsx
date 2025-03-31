const Content = ({ data }) => {
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.structure.content}</p>
      <a href={data.structure.source}>Source:</a>
    </>
  );
};

export default Content;
