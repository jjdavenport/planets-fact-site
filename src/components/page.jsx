import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Image from "./image";
import Tabs from "./tabs";
import Content from "./content";
import List from "./list";

const Page = () => {
  const { desktop, data } = useOutletContext();
  const [pageData, setPageData] = useState(data[2]);

  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

  if (desktop) {
    return (
      <>
        <Tabs />
        <Image data={pageData.images.planet} />
        <Content data={pageData} />
        <List data={pageData} />
      </>
    );
  }

  return (
    <>
      <Tabs />
      <Image data={pageData.images.planet} />
      <Content data={pageData} />
      <List data={pageData} />
    </>
  );
};

export default Page;
