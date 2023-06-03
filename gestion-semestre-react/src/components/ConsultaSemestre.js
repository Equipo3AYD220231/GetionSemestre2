import React, { useEffect, useState } from 'react';

const ConsultaSemestre = () => {
  const [semestres, setSemestres] = useState([]);

  const fetchSemestres = () => {
    fetch('http://localhost:8080/semesters')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al obtener la lista de semestres');
        }
      })
      .then(semestres => {
        setSemestres(semestres);
      })
      .catch(error => {
        console.error(error);
        alert('Ocurrió un error al mostrar la lista de semestres');
      });
  };

  useEffect(() => {
    fetchSemestres();
  }, []);

  const renderSemestres = () => {
    return semestres.map(semestre => (
      <li key={semestre.id}>
        {`${semestre.id} - ${semestre.fechainicial} - ${semestre.fechafinal} - ${semestre.evaluacionFinal} - ${semestre.habilitacion} - ${semestre.evaluacion40}`}
      </li>
    ));
  };

  return (
    <div>
      <h2>Consultar Semestres</h2>
      <button onClick={fetchSemestres}>Consultar Semestres</button>
      <ul>{renderSemestres()}</ul>
    </div>
  );
};

export default ConsultaSemestre;
