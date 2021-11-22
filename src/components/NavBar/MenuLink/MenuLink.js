function MenuLink({ children, to, isActive }) {
  const bgStyle = { color: isActive ? "#fff" : null };

  return (
    <li className="left--nav__bar__li">
      <a href={to} className="left--nav__bar__a" style={bgStyle}>
        {children}
      </a>
    </li>
  );
}

export default MenuLink;
