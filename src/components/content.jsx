const Content = ({ data }) => {
  return (
    <>
      <article className="md:w-1/2">
        <h1>{data.name}</h1>
        <p>{data.structure.content}</p>
        <a href={data.structure.source}>Source:</a>
      </article>
    </>
  );
};

export default Content;
