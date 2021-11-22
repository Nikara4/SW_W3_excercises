function Menu({ children }) {
  return (
    <nav className="left--nav__bar">
      <ul className="left--nav__bar__menu">{children}</ul>
    </nav>
  );
}

export default Menu;
