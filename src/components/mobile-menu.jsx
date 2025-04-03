import { Link } from "react-router";
import chevronIcon from "../assets/icon-chevron.svg";

const MobileMenu = ({ planets }) => {
  const colorMap = {
    mercury: "bg-mercury",
    venus: "bg-venus",
    earth: "bg-earth",
    mars: "bg-mars",
    jupiter: "bg-jupiter",
    saturn: "bg-saturn",
    uranus: "bg-uranus",
    neptune: "bg-neptune",
  };

  return (
    <>
      <aside className="fixed inset-0 top-[4.4rem] z-10 bg-black bg-stars p-4">
        <nav>
          <ul className="flex flex-col divide-y divide-darkGrey">
            {planets.map((planet, index) => (
              <li key={index}>
                <Link
                  className="flex items-center justify-between py-4 font-semibold uppercase"
                  to={`planet/${planet.name}`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`size-4 rounded-full ${colorMap[planet.name.toLowerCase()]}`}
                    ></div>
                    {planet.name}
                  </div>
                  <img src={chevronIcon} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;
