const List = ({ data }) => {
  return (
    <>
      <ul className="flex w-full flex-col gap-4 md:flex-row">
        <li className="flex flex-1 justify-between border p-2 md:flex-col">
          <span>Rotation time</span>
          <span>{data.rotation}</span>
        </li>
        <li className="flex flex-1 justify-between border p-2 md:flex-col">
          <span>Revolution time</span>
          <span>{data.revolution}</span>
        </li>
        <li className="flex flex-1 justify-between border p-2 md:flex-col">
          <span>Radius</span>
          <span>{data.radius}</span>
        </li>
        <li className="flex flex-1 justify-between border p-2 md:flex-col">
          <span>Average temp.</span>
          <span>{data.temperature}</span>
        </li>
      </ul>
    </>
  );
};

export default List;
