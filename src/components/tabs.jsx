import TabButton from "./tab-buttton";

const Tabs = ({ tablet, tab, setTab }) => {
  return (
    <>
      <ul className="flex w-full justify-between border-b border-darkGrey px-4 md:w-1/2 md:flex-col">
        <li className="relative">
          <TabButton
            className={
              tab === "overview"
                ? "border-b-purple-500 text-white"
                : "border-b-transparent text-gray-500"
            }
            onClick={() => setTab("overview")}
          >
            {tablet && "01"} Overview
          </TabButton>
        </li>
        <li className="relative">
          <TabButton
            className={
              tab === "structure"
                ? "border-b-purple-500 text-white"
                : "border-b-transparent text-gray-500"
            }
            onClick={() => setTab("structure")}
          >
            {tablet && "02"} Structure
          </TabButton>
        </li>
        <li className="relative">
          <TabButton
            className={
              tab === "surface"
                ? "border-b-purple-500 text-white"
                : "border-b-transparent text-gray-500"
            }
            onClick={() => setTab("surface")}
          >
            {tablet && "03"} Surface
          </TabButton>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
