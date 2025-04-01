import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";

function App() {
  const tablet = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <Wrapper>
        <Header tablet={tablet} planets={data} />
        <Outlet context={{ tablet, data }} />
      </Wrapper>
    </>
  );
}

export default App;
