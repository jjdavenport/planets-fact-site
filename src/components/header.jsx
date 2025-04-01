import { Link } from "react-router";
import menuIcon from "../assets/icon-hamburger.svg";

const Header = ({ planets, tablet }) => {
  if (tablet) {
    return (
      <>
        <header className="flex w-full justify-between p-4 md:flex-col md:items-center lg:flex-row">
          <h1>The Planets</h1>
          <nav className="w-full lg:w-fit">
            <ul className="flex justify-between lg:gap-4">
              {planets.map((planet, index) => (
                <li key={index}>
                  <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
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
      <header className="flex w-full justify-between p-4">
        <h1>The Planets</h1>
        <button>
          <img src={menuIcon} />
        </button>
      </header>
    </>
  );
};

export default Header;
