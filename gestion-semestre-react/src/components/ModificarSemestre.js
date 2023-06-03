import React, { useState } from 'react';

const ModificarSemestre = () => {
  const [idSemestre, setIdSemestre] = useState('');
  const [fechainicial, setFechainicial] = useState('');
  const [fechafinal, setFechafinal] = useState('');
  const [evaluacionFinal, setEvaluacionFinal] = useState('');
  const [habilitacion, setHabilitacion] = useState('');
  const [evaluacion40, setEvaluacion40] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Crea el objeto putData con los valores del formulario
    const putData = {
      fechainicial,
      fechafinal,
      evaluacionFinal,
      habilitacion,
      evaluacion40
    };

    // Realiza la lógica para enviar los datos al servidor
    // Puedes utilizar fetch u otra biblioteca como axios para hacer la solicitud PUT

    // Limpia los valores del formulario después de enviarlos
    setIdSemestre('');
    setFechainicial('');
    setFechafinal('');
    setEvaluacionFinal('');
    setHabilitacion('');
    setEvaluacion40('');
  };

  return (
    <div>
      <h2>Modificar Semestre</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idSemestre">ID del semestre:</label>
        <input
          type="number"
          id="idSemestre"
          value={idSemestre}
          onChange={e => setIdSemestre(e.target.value)}
          required
        />

        <label htmlFor="fechainicial">Fecha de inicio:</label>
        <input
          type="date"
          id="fechainicial"
          value={fechainicial}
          onChange={e => setFechainicial(e.target.value)}
          required
        />

        <label htmlFor="fechafinal">Fecha de finalización:</label>
        <input
          type="date"
          id="fechafinal"
          value={fechafinal}
          onChange={e => setFechafinal(e.target.value)}
          required
        />

        <label htmlFor="evaluacionFinal">Fecha de evaluación final:</label>
        <input
          type="date"
          id="evaluacionFinal"
          value={evaluacionFinal}
          onChange={e => setEvaluacionFinal(e.target.value)}
          required
        />

        <label htmlFor="habilitacion">Fecha de habilitación:</label>
        <input
          type="date"
          id="habilitacion"
          value={habilitacion}
          onChange={e => setHabilitacion(e.target.value)}
          required
        />

        <label htmlFor="evaluacion40">Fecha de evaluación del 40%:</label>
        <input
          type="date"
          id="evaluacion40"
          value={evaluacion40}
          onChange={e => setEvaluacion40(e.target.value)}
          required
        />

        <button type="submit">Modificar semestre</button>
      </form>
    </div>
  );
};

export default ModificarSemestre;
