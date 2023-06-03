import React from 'react';
import './App.css';
import Menu from './components/Menu';
import ConsultaSemestre from './components/ConsultaSemestre';
import AgregarSemestre from './components/AgregarSemestre';
import ModificarSemestre from './components/ModificarSemestre';
import EliminarSemestre from './components/EliminarSemestre';

const App = () => {
  return (
    <div className="app">
      <Menu />
      <ConsultaSemestre />
      <AgregarSemestre />
      <ModificarSemestre />
      <EliminarSemestre />
    </div>
  );
};

export default App;
