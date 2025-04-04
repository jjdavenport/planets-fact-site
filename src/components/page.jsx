import { useOutletContext, useParams } from "react-router";
import { useEffect, useState } from "react";
import Image from "./image";
import Tabs from "./tabs";
import Content from "./content";
import List from "./list";

const Page = () => {
  const { tablet, data } = useOutletContext();
  const { id } = useParams();

  const pathData = data?.find(
    (planet) => planet.name.toLowerCase() === id?.toLowerCase(),
  );

  const [pageData, setPageData] = useState(pathData);

  useEffect(() => {
    setPageData(pathData);
  }, [pathData]);

  const [page, setPage] = useState({
    tab: "overview",
    image: "",
    name: "",
    content: "",
    source: "",
  });

  useEffect(() => {
    setPage({
      tab: "overview",
      image: pageData.images.planet,
      name: pageData.name,
      content: pageData.overview.content,
      source: pageData.overview.source,
    });
  }, [pageData]);

  const innerPage = (button) => {
    if (button === "overview") {
      setPage({
        tab: "overview",
        image: pageData.images.planet,
        name: pageData.name,
        content: pageData.overview.content,
        source: pageData.overview.source,
      });
    } else if (button === "structure") {
      setPage({
        tab: "structure",
        image: pageData.images.internal,
        name: pageData.name,
        content: pageData.structure.content,
        source: pageData.structure.source,
      });
    } else {
      setPage({
        tab: "surface",
        image: pageData.images.geology,
        name: pageData.name,
        content: pageData.geology.content,
        source: pageData.geology.source,
      });
    }
  };

  if (tablet) {
    return (
      <>
        <main className="flex flex-1 flex-col items-center gap-8 px-8 py-16">
          <section className="flex items-center gap-16 md:flex-col lg:flex-row lg:items-start">
            <Image data={page.image} />
            <div className="flex flex-1 justify-between gap-4 lg:flex-col lg:items-center">
              <Content data={page} />
              <Tabs tab={page.tab} setTab={innerPage} tablet={tablet} />
            </div>
          </section>
          {pageData && <List data={pageData} />}
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex flex-1 flex-col items-center gap-16 pb-16">
        <Tabs tab={page.tab} setTab={innerPage} />
        <Image data={page?.image} />
        <section className="flex flex-col gap-10 px-4">
          <Content data={page} />
          {pageData && <List data={pageData} />}
        </section>
      </main>
    </>
  );
};

export default Page;
