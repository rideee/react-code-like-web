import React from 'react';

import './Navigation.css';
import NavItem from './partials/NavItem';

const Navigation = () => {
  return (
    <div className="Navigation">
      <NavItem icon="fas fa-book-open">Blog</NavItem>
      <NavItem icon="fas fa-chevron-right" depth="1">Ostatnie wpisy</NavItem>
      <NavItem icon="fas fa-chevron-right" depth="1">Kategorie</NavItem>
      <NavItem icon="fas fa-chevron-right" depth="2">kategoria1</NavItem>
      <NavItem icon="fas fa-chevron-right" depth="2">kategoria2</NavItem>
      <NavItem icon="fas fa-chevron-right" depth="2">kategoria3</NavItem>
      <NavItem icon="fas fa-chevron-right" depth="1">Tagi</NavItem>

      <NavItem icon="fas fa-graduation-cap">Kursy</NavItem>
      <NavItem icon="fab fa-js" depth="1">Java Script</NavItem>
      <NavItem icon="fab fa-linux" depth="1">Linux</NavItem>
      <NavItem icon="fas fa-hashtag" depth="1">Bash</NavItem>

      <NavItem icon="fas fa-info">O mnie</NavItem>
    </div>
  );
}

export default Navigation;
