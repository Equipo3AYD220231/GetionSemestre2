// INICIO función para cargar los semestres en la tabla
const btnConsultarSemestres = document.getElementById('btn-consultar-semestres');
const listaSemetres = document.getElementById('lista-semestres');

btnConsultarSemestres.addEventListener('click', () => {
  fetch('http://localhost:8080/semesters')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al obtener la lista de semestres');
      }
    })
    .then(semestres => {
      listaSemetres.innerHTML = ''; // Limpiar la lista de tareas
      semestres.forEach(semestre => {
       //console.log(semestre);
        const li = document.createElement('li');
        li.textContent = `${semestre.id} - ${semestre.fechainicial} - ${semestre.fechafinal}- ${semestre.evaluacionFinal} - ${semestre.habilitacion} - ${semestre.evaluacion40}`;
        listaSemetres.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
      alert('Ocurrió un error al mostrar tablas de la lista de tareas');
    });
});

/****  Tratamiento respuesta POST       ***** */
const form = document.querySelector('#form-anadir-semestre');
 form.addEventListener('submit', (event) => {
 event.preventDefault(); // evitar que el formulario se envíe por defecto

  // obtener los valores ingresados en el formulario
  const fechainicial = document.querySelector('#fecha-inicio').value;
  const fechafinal = document.querySelector('#fecha-fin').value;
  const evaluacionFinal = document.querySelector('#evaluacion-final').value;
  const evaluacion40 = document.querySelector('#evaluacion-40').value;
  const habilitacion = document.querySelector('#habilitacion').value;

  // crear el objeto data con los valores del formulario
  const postData = {
    fechainicial : fechainicial,
    fechafinal : fechafinal,
    evaluacionFinal : evaluacionFinal,
    habilitacion : habilitacion,
    evaluacion40 : evaluacion40,
       };

     fetch('http://localhost:8080/savesemester', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'  },
      body: JSON.stringify(postData)
    })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
  
  });
  

  /****  Tratamiento respuesta PUT       ***** */
// Función para actualizar una tarea


const formPUT = document.querySelector('#form-modificar-semestre');
formPUT.addEventListener('submit', (event) => {
event.preventDefault(); // evitar que el formulario se envíe por defecto

 // obtener los valores ingresados en el formulario
  const Id = parseInt(document.querySelector('#id-semestre').value);
  const fechainicial = document.querySelector('#fecha-inicio').value;
  const fechafinal = document.querySelector('#fecha-fin').value;
  const evaluacionFinal = document.querySelector('#evaluacion-final').value;
  const evaluacion40 = document.querySelector('#evaluacion-40').value;
  const habilitacion = document.querySelector('#habilitacion').value;

 // crear el objeto data con los valores del formulario
 const putData = {
   fechainicial : fechainicial,
    fechafinal : fechafinal,
    evaluacionFinal : evaluacionFinal,
    habilitacion : habilitacion,
    evaluacion40 : evaluacion40,
    };


 // enviar el objeto data al servidor utilizando fetch
 fetch('http://localhost:8080/updatesemester/Id', {
   method: 'PUT',
   headers: {     'Content-Type': 'application/json'
  
  },
   body: JSON.stringify(putData)
 })
   .then(response => response.json()) 
   .then(json => console.log(json))
   .catch(error => console.log(error));

});
