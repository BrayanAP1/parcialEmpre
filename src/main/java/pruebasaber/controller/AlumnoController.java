package pruebasaber.controller;


import pruebasaber.model.Alumno;
import pruebasaber.service.AlumnoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/alumnos")
@CrossOrigin(origins = "*") // Para permitir acceso desde HTML/JS
public class AlumnoController {

    @Autowired
    private AlumnoService alumnoService;

    @PostMapping
    public Alumno crearAlumno(@RequestBody Alumno alumno) {
        return alumnoService.guardarAlumno(alumno);
    }

    @GetMapping
    public List<Alumno> listarAlumnos() {
        return alumnoService.obtenerTodosLosAlumnos();
    }

    @GetMapping("/{id}")
    public Optional<Alumno> obtenerAlumno(@PathVariable String id) {
        return alumnoService.obtenerAlumnoPorId(id);
    }

    @PutMapping("/{id}")
    public Alumno actualizarAlumno(@PathVariable String id, @RequestBody Alumno alumno) {
        return alumnoService.actualizarAlumno(id, alumno);
    }

    @DeleteMapping("/{id}")
    public void eliminarAlumno(@PathVariable String id) {
        alumnoService.eliminarAlumno(id);
    }
    
    @GetMapping("/documento/{numeroDocumento}")
    public Alumno buscarPorNumeroDocumento(@PathVariable String numeroDocumento) {
        return alumnoService.buscarPorNumeroDocumento(numeroDocumento);
    }

    
    
}
