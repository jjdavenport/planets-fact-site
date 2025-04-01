const Tabs = ({ tablet }) => {
  return (
    <>
      <ul className="flex w-full justify-between md:w-1/2 md:flex-col">
        <li>
          <button>{tablet && "01"} Overview</button>
        </li>
        <li>
          <button>{tablet && "02"} Structure</button>
        </li>
        <li>
          <button>{tablet && "03"} Surface</button>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
