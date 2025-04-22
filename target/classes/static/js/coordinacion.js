function listarAlumnos() {
    fetch("http://localhost:8104/api/alumnos")
        .then(response => response.json())
        .then(alumnos => {
            const tbody = document.querySelector("#tablaAlumnos tbody");
            tbody.innerHTML = ""; // Limpiar tabla antes de cargar

            alumnos.forEach(alumno => {
                const fila = `
                    <tr>
                        <td>${alumno.tipoDocumento || ''}</td>
                        <td>${alumno.numeroDocumento || ''}</td>
                        <td>${alumno.primerNombre || ''} ${alumno.segundoNombre || ''} ${alumno.primerApellido || ''} ${alumno.segundoApellido || ''}</td>
                        <td>${alumno.correoElectronico || ''}</td>
                        <td>${alumno.numeroTelefonico || ''}</td>
                        <td>${alumno.numeroRegistro || ''}</td>
                        <td>${alumno.puntaje || ''}</td>
                        <td>${alumno.saberProPuntajeNivel || ''}</td>
                        <td>${alumno.mediaNacional || ''}</td>                  
                        <td>${alumno.comunicacionEscrita || ''}</td>
                        <td>${alumno.comunicacionEscritaNivel || ''}</td>
                        <td>${alumno.razonamientoCuantitativo || ''}</td>
                        <td>${alumno.razonamientoCuantitativoNivel || ''}</td>
                        <td>${alumno.lecturaCritica || ''}</td>
                        <td>${alumno.lecturaCriticaNivel || ''}</td>
                        <td>${alumno.competenciasCiudadanas || ''}</td>
                        <td>${alumno.competenciasCiudadanasNivel || ''}</td>
                        <td>${alumno.ingles || ''}</td>
                        <td>${alumno.inglesNivel || ''}</td>
                        <td>${alumno.formulacionDeProyectosDeIngenieria || ''}</td>
                        <td>${alumno.formulacionDeProyectosDeIngenieriaNivel || ''}</td>
                        <td>${alumno.pensamientoCientificoMatematicasYEstadistica || ''}</td>
                        <td>${alumno.pensamientoCientificoMatematicasYEstadisticaNivel || ''}</td>
                        <td>${alumno.disenoDeSoftware || ''}</td>
                        <td>${alumno.disenoDeSoftwareNivel || ''}</td>
                        <td>${alumno.nivelIngles || ''}</td>
						<td>
						    <button class="boton-accion boton-editar" onclick="editarAlumno('${alumno.id}')">Editar</button>
						    <button class="boton-accion boton-eliminar" onclick="eliminarAlumno('${alumno.id}')">Eliminar</button>
						</td>

                    </tr>
                `;
                tbody.innerHTML += fila;
            });
        })
        .catch(error => {
            console.error("Error al cargar alumnos:", error);
        });
}

function buscarAlumno() {
    const numeroDocumento = document.getElementById("documentoBuscar").value;

    if (!numeroDocumento) {
        alert("Por favor ingresa un número de documento.");
        return;
    }

    fetch(`http://localhost:8104/api/alumnos/documento/${numeroDocumento}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Alumno no encontrado.");
            }
            return response.json();
        })
        .then(alumno => {
            const div = document.getElementById("resultadoAlumno");
            div.innerHTML = `
			<h3>Resultado del alumno</h3>
			                <p><strong>Tipo y Número de Documento:</strong> ${alumno.tipoDocumento || ''} ${alumno.numeroDocumento || ''}</p>
			                <p><strong>Nombre Completo:</strong> ${alumno.primerNombre || ''} ${alumno.segundoNombre || ''} ${alumno.primerApellido || ''} ${alumno.segundoApellido || ''}</p>
			                <p><strong>Correo Electrónico:</strong> ${alumno.correoElectronico || ''}</p>
			                <p><strong>Número Telefónico:</strong> ${alumno.numeroTelefonico || ''}</p>
			                <p><strong>Número de Registro:</strong> ${alumno.numeroRegistro || ''}</p>
			                <p><strong>Puntaje Total:</strong> ${alumno.puntaje || ''}</p>
			                <p><strong>Nivel Saber Pro:</strong> ${alumno.saberProPuntajeNivel || ''}</p>
			                <p><strong>Media Nacional:</strong> ${alumno.mediaNacional || ''}</p>
			                <p><strong>Comunicación Escrita:</strong> ${alumno.comunicacionEscrita || ''}</p>
			                <p><strong>Nivel Comunicación Escrita:</strong> ${alumno.comunicacionEscritaNivel || ''}</p>
			                <p><strong>Razonamiento Cuantitativo:</strong> ${alumno.razonamientoCuantitativo || ''}</p>
			                <p><strong>Nivel Razonamiento Cuantitativo:</strong> ${alumno.razonamientoCuantitativoNivel || ''}</p>
			                <p><strong>Lectura Crítica:</strong> ${alumno.lecturaCritica || ''}</p>
			                <p><strong>Nivel Lectura Crítica:</strong> ${alumno.lecturaCriticaNivel || ''}</p>
			                <p><strong>Competencias Ciudadanas:</strong> ${alumno.competenciasCiudadanas || ''}</p>
			                <p><strong>Nivel Competencias Ciudadanas:</strong> ${alumno.competenciasCiudadanasNivel || ''}</p>
			                <p><strong>Inglés:</strong> ${alumno.ingles || ''}</p>
			                <p><strong>Nivel Inglés:</strong> ${alumno.inglesNivel || ''}</p>
			                <p><strong>Formulación de Proyectos de Ingeniería:</strong> ${alumno.formulacionDeProyectosDeIngenieria || ''}</p>
			                <p><strong>Nivel Formulación de Proyectos:</strong> ${alumno.formulacionDeProyectosDeIngenieriaNivel || ''}</p>
			                <p><strong>Pensamiento Científico, Matemáticas y Estadística:</strong> ${alumno.pensamientoCientificoMatematicasYEstadistica || ''}</p>
			                <p><strong>Nivel Pensamiento Científico:</strong> ${alumno.pensamientoCientificoMatematicasYEstadisticaNivel || ''}</p>
			                <p><strong>Diseño de Software:</strong> ${alumno.disenoDeSoftware || ''}</p>
			                <p><strong>Nivel Diseño de Software:</strong> ${alumno.disenoDeSoftwareNivel || ''}</p>
			                <p><strong>Nivel General de Inglés:</strong> ${alumno.nivelIngles || ''}</p>
            `;
        })
        .catch(error => {
            document.getElementById("resultadoAlumno").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}


function editarAlumno(id) {
    fetch(`http://localhost:8104/api/alumnos/${id}`)
        .then(res => res.json())
        .then(alumno => {
            document.getElementById("formEditar").style.display = "block";

            document.getElementById("editId").value = alumno.id;
            document.getElementById("editTipoDocumento").value = alumno.tipoDocumento;
            document.getElementById("editNumeroDocumento").value = alumno.numeroDocumento;
            document.getElementById("editPrimerNombre").value = alumno.primerNombre;
            document.getElementById("editSegundoNombre").value = alumno.segundoNombre;
            document.getElementById("editPrimerApellido").value = alumno.primerApellido;
            document.getElementById("editSegundoApellido").value = alumno.segundoApellido;
            document.getElementById("editCorreo").value = alumno.correoElectronico;
            document.getElementById("editTelefono").value = alumno.numeroTelefonico;
            document.getElementById("editNumeroRegistro").value = alumno.numeroRegistro;
            document.getElementById("editPuntaje").value = alumno.puntaje;
            document.getElementById("editSaberProPuntajeNivel").value = alumno.saberProPuntajeNivel;
			document.getElementById("editMediaNacional").value = alumno.mediaNacional;
            document.getElementById("editComunicacionEscrita").value = alumno.comunicacionEscrita;
            document.getElementById("editComunicacionEscritaNivel").value = alumno.comunicacionEscritaNivel;
            document.getElementById("editRazonamientoCuantitativo").value = alumno.razonamientoCuantitativo;
            document.getElementById("editRazonamientoCuantitativoNivel").value = alumno.razonamientoCuantitativoNivel;
            document.getElementById("editLecturaCritica").value = alumno.lecturaCritica;
            document.getElementById("editLecturaCriticaNivel").value = alumno.lecturaCriticaNivel;
            document.getElementById("editCompetenciasCiudadanas").value = alumno.competenciasCiudadanas;
            document.getElementById("editCompetenciasCiudadanasNivel").value = alumno.competenciasCiudadanasNivel;
            document.getElementById("editIngles").value = alumno.ingles;
            document.getElementById("editInglesNivel").value = alumno.inglesNivel;
            document.getElementById("editFormulacionDeProyectosDeIngenieria").value = alumno.formulacionDeProyectosDeIngenieria;
            document.getElementById("editFormulacionDeProyectosDeIngenieriaNivel").value = alumno.formulacionDeProyectosDeIngenieriaNivel;
            document.getElementById("editPensamientoCientificoMatematicasYEstadistica").value = alumno.pensamientoCientificoMatematicasYEstadistica;
            document.getElementById("editPensamientoCientificoMatematicasYEstadisticaNivel").value = alumno.pensamientoCientificoMatematicasYEstadisticaNivel;
            document.getElementById("editDisenoDeSoftware").value = alumno.disenoDeSoftware;
            document.getElementById("editDisenoDeSoftwareNivel").value = alumno.disenoDeSoftwareNivel;
            document.getElementById("editNivelIngles").value = alumno.nivelIngles;
        });
}


function guardarCambios(event) {
    event.preventDefault();

    const id = document.getElementById("editId").value;

    const alumno = {
        tipoDocumento: document.getElementById("editTipoDocumento").value,
        numeroDocumento: document.getElementById("editNumeroDocumento").value,
        primerNombre: document.getElementById("editPrimerNombre").value,
        segundoNombre: document.getElementById("editSegundoNombre").value,
        primerApellido: document.getElementById("editPrimerApellido").value,
        segundoApellido: document.getElementById("editSegundoApellido").value,
        correoElectronico: document.getElementById("editCorreo").value,
        numeroTelefonico: document.getElementById("editTelefono").value,
        numeroRegistro: document.getElementById("editNumeroRegistro").value,
        puntaje: parseFloat(document.getElementById("editPuntaje").value),
        saberProPuntajeNivel: document.getElementById("editSaberProPuntajeNivel").value,
		mediaNacional: document.getElementById("editMediaNacional").value,
        comunicacionEscrita: parseFloat(document.getElementById("editComunicacionEscrita").value),
        comunicacionEscritaNivel: document.getElementById("editComunicacionEscritaNivel").value,
        razonamientoCuantitativo: parseFloat(document.getElementById("editRazonamientoCuantitativo").value),
        razonamientoCuantitativoNivel: document.getElementById("editRazonamientoCuantitativoNivel").value,
        lecturaCritica: parseFloat(document.getElementById("editLecturaCritica").value),
        lecturaCriticaNivel: document.getElementById("editLecturaCriticaNivel").value,
        competenciasCiudadanas: parseFloat(document.getElementById("editCompetenciasCiudadanas").value),
        competenciasCiudadanasNivel: document.getElementById("editCompetenciasCiudadanasNivel").value,
        ingles: parseFloat(document.getElementById("editIngles").value),
        inglesNivel: document.getElementById("editInglesNivel").value,
        formulacionDeProyectosDeIngenieria: parseFloat(document.getElementById("editFormulacionDeProyectosDeIngenieria").value),
        formulacionDeProyectosDeIngenieriaNivel: document.getElementById("editFormulacionDeProyectosDeIngenieriaNivel").value,
        pensamientoCientificoMatematicasYEstadistica: parseFloat(document.getElementById("editPensamientoCientificoMatematicasYEstadistica").value),
        pensamientoCientificoMatematicasYEstadisticaNivel: document.getElementById("editPensamientoCientificoMatematicasYEstadisticaNivel").value,
        disenoDeSoftware: parseFloat(document.getElementById("editDisenoDeSoftware").value),
        disenoDeSoftwareNivel: document.getElementById("editDisenoDeSoftwareNivel").value,
        nivelIngles: document.getElementById("editNivelIngles").value
    };

    fetch(`http://localhost:8104/api/alumnos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(alumno)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la actualización.");
        }
        alert("Alumno actualizado correctamente.");
        document.getElementById("formEditar").reset();
        document.getElementById("formEditar").style.display = "none";
        listarAlumnos(); // recarga la tabla
    })
    .catch(err => {
        console.error("Error al actualizar:", err);
        alert("Hubo un error al guardar los cambios.");
    });
}


function eliminarAlumno(id) {
    if (confirm("¿Estás seguro de eliminar este alumno?")) {
        fetch(`http://localhost:8104/api/alumnos/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            alert("Alumno eliminado.");
            listarAlumnos(); // refrescar tabla
        });
    }
}

function cancelarEdicion() {
    document.getElementById("formEditar").reset();
    document.getElementById("formEditar").style.display = "none";
}


