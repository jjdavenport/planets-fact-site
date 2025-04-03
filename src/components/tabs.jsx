import TabButton from "./tab-buttton";

const Tabs = ({ tablet, tab, setTab }) => {
  return (
    <>
      <ul className="flex w-full justify-between border-b border-darkGrey px-4 md:w-1/2 md:flex-col md:justify-center md:gap-4 md:border-b-0 md:px-0">
        <li className="relative">
          <TabButton
            className={
              tab === "overview"
                ? "border-b-purple-500 text-white md:border-transparent md:bg-purple-500"
                : "border-b-transparent text-gray-500 md:border-darkGrey md:bg-transparent"
            }
            onClick={() => setTab("overview")}
          >
            {tablet && <span className="font-medium">01</span>} Overview
          </TabButton>
        </li>
        <li className="relative">
          <TabButton
            className={
              tab === "structure"
                ? "border-b-purple-500 text-white md:border-transparent md:bg-purple-500"
                : "border-b-transparent text-gray-500 md:border-darkGrey md:bg-transparent"
            }
            onClick={() => setTab("structure")}
          >
            {tablet && <span className="font-medium">02</span>} Structure
          </TabButton>
        </li>
        <li className="relative">
          <TabButton
            className={
              tab === "surface"
                ? "border-b-purple-500 text-white md:border-transparent md:bg-purple-500"
                : "border-b-transparent text-gray-500 md:border-darkGrey md:bg-transparent"
            }
            onClick={() => setTab("surface")}
          >
            {tablet && <span className="font-medium">03</span>} Surface
          </TabButton>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
