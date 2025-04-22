const API_URL = "http://localhost:8104/api/alumnos";

// Buscar resultado individual
document.getElementById("buscarAlumnoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const doc = document.getElementById("documento").value;

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const alumno = data.find(a => a.documento === doc);
      const resultadoDiv = document.getElementById("resultadoAlumno");

      if (alumno) {
        resultadoDiv.innerHTML = `
          <div class="alert alert-success">
            <strong>Nombre:</strong> ${alumno.nombre}<br>
            <strong>Programa:</strong> ${alumno.programa}<br>
            <strong>Puntaje:</strong> ${alumno.puntaje}
          </div>
        `;
      } else {
        resultadoDiv.innerHTML = `<div class="alert alert-danger">Alumno no encontrado.</div>`;
      }
    });
});

// Mostrar todos los resultados
function cargarTodos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("todosResultados");
      container.innerHTML = `
        <ul class="list-group">
          ${data.map(a => `<li class="list-group-item">${a.nombre} - ${a.programa} - Puntaje: ${a.puntaje}</li>`).join("")}
        </ul>
      `;
    });
}

// Mostrar ranking (ordenado por puntaje)
function mostrarRanking() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const ranking = data.sort((a, b) => b.puntaje - a.puntaje);
      const container = document.getElementById("rankingResultados");
      container.innerHTML = `
        <ol class="list-group list-group-numbered">
          ${ranking.map(a => `<li class="list-group-item">${a.nombre} - ${a.programa} - ${a.puntaje}</li>`).join("")}
        </ol>
      `;
    });
}
