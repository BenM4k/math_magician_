import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/calculator', name: 'Calculator' },
    { path: '/quotes', name: 'Quotes' },
  ];
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Math Magician</h1>
      <ul className={styles.navlinks}>
        {links.map((link) => (
          <li key={link.name} className={styles.navlink}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? '#ff007f' : undefined,
              })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
