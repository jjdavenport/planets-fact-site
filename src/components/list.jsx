import ListItem from "./list-item";

const List = ({ data }) => {
  return (
    <>
      <ul className="flex w-full flex-col gap-4 md:flex-row">
        <ListItem text="Rotation time" data={data.rotation} />
        <ListItem text="Revolution time" data={data.revolution} />
        <ListItem text="Radius" data={data.radius} />
        <ListItem text="Average temp." data={data.temperature} />
      </ul>
    </>
  );
};

export default List;
