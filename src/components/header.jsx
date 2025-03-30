import { Link } from "react-router";
import menuIcon from "../assets/icon-hamburger.svg";

const Header = ({ planets, desktop }) => {
  if (desktop) {
    return (
      <>
        <header className="flex w-full justify-between">
          <h1>The Planets</h1>
          <nav>
            <ul className="flex gap-16">
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
      <header className="flex w-full justify-between">
        <h1>The Planets</h1>
        <button>
          <img src={menuIcon} />
        </button>
      </header>
    </>
  );
};

export default Header;
