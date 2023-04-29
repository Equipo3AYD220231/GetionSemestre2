// INICIO función para cargar los semestres en la tabla
const btnConsultarSemestres = document.getElementById('btn-consultar-semestres');
const listaSemetres = document.getElementById('lista-semestres');

btnConsultarSemestres.addEventListener('click', () => {
  fetch('http://localhost:8080/semestres')
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
        const li = document.createElement('li');
        li.textContent = `${semestre.id} - ${semestre.title} - ${semestre.description}- ${semestre.date}`;
        listaTareas.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
      alert('Ocurrió un error al obtener la lista de tareas');
    });
});


/*



const miBoton = document.getElementById('mi-boton');
function cargarSemestres() {
    // limpiar tabla
    document.getElementById("tbody-semestres").innerHTML = "";
   
  
    // obtener los semestres de la API
    fetch("http://localhost:8080/semesters" , {
      method: "GET"  })
      .then((response) => response.json())
      .then((data) => {
        // recorrer los semestres y agregarlos a la tabla
        data.forEach((semesters) => {
          let row = `<tr>
                          <td>${semester.id}</td>
                          <td>${semester.fechainicial}</td>
                          <td>${semester.fechafinal}</td>
                          <td>${semester.evaluacion40}</td>
                          <td>${semester.evaluacionFinal}</td>
                          <td>${semester.habilitacion}</td>
                          <td>
                              <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editarSemestreModal" onclick="editarSemestre(${semester.id})">
                                  Editar
                              </button>
                              <button class="btn btn-danger btn-sm" onclick="eliminarSemestre(${semester.id})">
                                  Eliminar
                              </button>
                          </td>
                      </tr>`;
          document.getElementById("tbody-semestres").innerHTML += row;
        });
      })
      .catch((error) => console.log(error));
 
    }
    miBoton.addEventListener('click', cargarSemestres);
    console.log("hola el boton funciona");

    */

// fiNAL función para cargar los semestres en la tabla

  // función para agregar un nuevo semestre
 /* function agregarSemestre() {
    // obtener datos del formulario
    let fechainicial = document.getElementById("fechainicial").value;
    let fechafinal = document.getElementById("fechafinal").value;
    let evaluacion40 = document.getElementById("evaluacion40").value;
    let evaluacionFinal = document.getElementById("evaluacionFinal").value;
    let habilitacion = document.getElementById("habilitacion").value;
  
    // crear objeto semestre
    let semestre = {
      fechainicial: fechainicial,
      fechafinal: fechafinal,
      evaluacion40: evaluacion40,
      evaluacionFinal: evaluacionFinal,
      habilitacion: habilitacion,
    };
  
    // enviar semestre a la API
    fetch("/savesemester", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(semestre),
    })
      .then((response) => {
        if (response.ok) {
          // limpiar formulario
          document.getElementById("form-agregar-semestre").reset();
          // cerrar modal
          $("#agregarSemestreModal").modal("hide");
          // recargar tabla
          cargarSemestres();
        } else {
          throw new Error("Error al agregar semestre");
        }
      })
      .catch((error) => console.log(error));
  }
  
 */