import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Image from "./image";
import Tabs from "./tabs";
import Content from "./content";
import List from "./list";

const Page = () => {
  const { tablet, data } = useOutletContext();
  const [pageData, setPageData] = useState(data[2]);
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

  if (tablet) {
    return (
      <>
        <main className="flex flex-1 flex-col items-center gap-4 p-4">
          <section className="flex items-center gap-4 md:flex-col lg:flex-row lg:items-start">
            <Image data={pageData.images.planet} />
            <div className="flex flex-1 gap-4 lg:flex-col lg:items-center">
              <Content data={pageData} />
              <Tabs tab={tab} setTab={setTab} tablet={tablet} />
            </div>
          </section>
          <List data={pageData} />
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex flex-1 flex-col items-center gap-16 pb-16">
        <Tabs tab={tab} setTab={setTab} />
        <Image data={pageData.images.planet} />
        <section className="flex flex-col gap-10 px-4">
          <Content data={pageData} />
          <List data={pageData} />
        </section>
      </main>
    </>
  );
};

export default Page;
