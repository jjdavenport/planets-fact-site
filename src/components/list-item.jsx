const ListItem = ({ data, text }) => {
  return (
    <>
      <li className="flex flex-1 items-center justify-between border border-darkGrey p-3 uppercase md:flex-col">
        <span className="font-spartan text-xs font-semibold tracking-wider text-lightGrey">
          {text}
        </span>
        <span className="font-antonio text-xl">{data}</span>
      </li>
    </>
  );
};

export default ListItem;
