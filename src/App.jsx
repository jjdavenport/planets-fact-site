import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <Wrapper>
        <Header desktop={desktop} planets={data} />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
