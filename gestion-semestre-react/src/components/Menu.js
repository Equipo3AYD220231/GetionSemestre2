import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <a href="/">Inicio</a>
      <a href="/semestres">Semestres</a>
      <a href="/agregar-semestre">Agregar Semestre</a>
      <a href="/modificar-semestre">Modificar Semestre</a>
      <a href="/eliminar-semestre">Eliminar Semestre</a>
    </div>
  );
};

export default Menu;
