package pruebasaber.service;

import pruebasaber.model.Alumno;
import pruebasaber.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlumnoService {

    @Autowired
    private AlumnoRepository alumnoRepository;

    public Alumno guardarAlumno(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    public List<Alumno> obtenerTodosLosAlumnos() {
        return alumnoRepository.findAll();
    }

    public Optional<Alumno> obtenerAlumnoPorId(String id) {
        return alumnoRepository.findById(id);
    }

    public Alumno actualizarAlumno(String id, Alumno alumnoActualizado) {
        Optional<Alumno> alumnoExistente = alumnoRepository.findById(id);
        if (alumnoExistente.isPresent()) {
            alumnoActualizado.setId(id);
            return alumnoRepository.save(alumnoActualizado);
        } else {
            return null;
        }
    }

    public void eliminarAlumno(String id) {
        alumnoRepository.deleteById(id);
    }
    public Alumno buscarPorNumeroDocumento(String numeroDocumento) {
        return alumnoRepository.findByNumeroDocumento(numeroDocumento);
    }
}