import React, { useState } from 'react';

const EliminarSemestre = () => {
  const [idSemestre, setIdSemestre] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Realiza la lógica para enviar los datos al servidor y eliminar el semestre
    // Puedes utilizar fetch u otra biblioteca como axios para hacer la solicitud DELETE

    // Limpia el valor del formulario después de enviarlo
    setIdSemestre('');
  };

  return (
    <div>
      <h2>Eliminar Semestre</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idSemestre">ID del semestre:</label>
        <input
          type="number"
          id="idSemestre"
          value={idSemestre}
          onChange={e => setIdSemestre(e.target.value)}
          required
        />

        <button type="submit">Eliminar semestre</button>
      </form>
    </div>
  );
};

export default EliminarSemestre;
