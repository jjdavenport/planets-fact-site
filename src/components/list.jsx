const List = ({ data }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 p-4">
        <li className="flex justify-between border p-2">
          <span>Rotation time</span>
          <span>{data.rotation}</span>
        </li>
        <li className="flex justify-between border p-2">
          <span>Revolution time</span>
          <span>{data.revolution}</span>
        </li>
        <li className="flex justify-between border p-2">
          <span>Radius</span>
          <span>{data.radius}</span>
        </li>
        <li className="flex justify-between border p-2">
          <span>Average temp.</span>
          <span>{data.temperature}</span>
        </li>
      </ul>
    </>
  );
};

export default List;
