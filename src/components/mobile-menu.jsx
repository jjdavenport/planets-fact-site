const MobileMenu = ({ planets }) => {
  return (
    <>
      <aside>
        <nav>
          <ul className="flex gap-16">
            {planets.map((planet, index) => (
              <li key={index}>
                <a href={`/planet/${planet.name}`}>{planet.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;
