import React, { useState } from 'react';

const AgregarSemestre = () => {
  const [fechainicial, setFechainicial] = useState('');
  const [fechafinal, setFechafinal] = useState('');
  const [evaluacionFinal, setEvaluacionFinal] = useState('');
  const [habilitacion, setHabilitacion] = useState('');
  const [evaluacion40, setEvaluacion40] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Crea el objeto postData con los valores del formulario
    const postData = {
      fechainicial,
      fechafinal,
      evaluacionFinal,
      habilitacion,
      evaluacion40
    };

    // Realiza la lógica para enviar los datos al servidor
    // Puedes utilizar fetch u otra biblioteca como axios para hacer la solicitud POST

    // Limpia los valores del formulario después de enviarlos
    setFechainicial('');
    setFechafinal('');
    setEvaluacionFinal('');
    setHabilitacion('');
    setEvaluacion40('');
  };

  return (
    <div>
      <h2>Añadir Semestre</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fechainicial">Fecha de inicio:</label>
          <input
            type="date"
            id="fechainicial"
            value={fechainicial}
            onChange={e => setFechainicial(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechafinal">Fecha de finalización:</label>
          <input
            type="date"
            id="fechafinal"
            value={fechafinal}
            onChange={e => setFechafinal(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="evaluacionFinal">Fecha de evaluación final:</label>
          <input
            type="date"
            id="evaluacionFinal"
            value={evaluacionFinal}
            onChange={e => setEvaluacionFinal(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="habilitacion">Fecha de habilitación:</label>
          <input
            type="date"
            id="habilitacion"
            value={habilitacion}
            onChange={e => setHabilitacion(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="evaluacion40">Fecha de evaluación del 40%:</label>
          <input
            type="date"
            id="evaluacion40"
            value={evaluacion40}
            onChange={e => setEvaluacion40(e.target.value)}
            required
          />
        </div>

        <button type="submit">Agregar semestre</button>
      </form>
    </div>
  );
};

export default AgregarSemestre;
