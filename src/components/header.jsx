import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import menuIcon from "../assets/icon-hamburger.svg";
import MobileMenu from "./mobile-menu";

const Header = ({ planets, tablet }) => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    menu
      ? document.documentElement.classList.add("overflow-hidden")
      : document.documentElement.classList.remove("overflow-hidden");
  }, [menu]);

  if (tablet) {
    return (
      <>
        <header className="flex w-full justify-between gap-10 border-b border-darkGrey p-8 uppercase md:flex-col md:items-center lg:flex-row">
          <h1 className="font-antonio text-3xl">The Planets</h1>
          <nav className="w-full lg:w-fit">
            <ul className="flex justify-between lg:gap-4">
              {planets.map((planet, index) => (
                <li
                  className="font-spartan text-sm font-medium tracking-wide"
                  key={index}
                >
                  <Link to={`planet/${planet.name.toLowerCase()}`}>
                    {planet.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </>
    );
  }

  return (
    <>
      <header className="flex w-full justify-between border-b border-darkGrey p-4 uppercase">
        <h1 className="font-antonio text-3xl">The Planets</h1>
        <button onClick={() => setMenu(!menu)}>
          <img src={menuIcon} />
        </button>
      </header>
      {menu && (
        <MobileMenu
          location={location}
          onClick={() => setMenu(false)}
          planets={planets}
        />
      )}
    </>
  );
};

export default Header;
