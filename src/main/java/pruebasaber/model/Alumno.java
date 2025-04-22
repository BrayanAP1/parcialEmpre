package pruebasaber.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "alumno")
public class Alumno {

    @Id
    private String id;

    private String tipoDocumento;
    private String numeroDocumento;
    private String primerApellido;
    private String segundoApellido;
    private String primerNombre;
    private String segundoNombre;
    private String correoElectronico;
    private String numeroTelefonico;
    private String numeroRegistro;
    private double puntaje;
    private String saberProPuntajeNivel;
    private String mediaNacional;
    private double comunicacionEscrita;
    private String comunicacionEscritaNivel;
    private double razonamientoCuantitativo;
    private String razonamientoCuantitativoNivel;
    
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTipoDocumento() {
		return tipoDocumento;
	}
	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}
	public String getNumeroDocumento() {
		return numeroDocumento;
	}
	public void setNumeroDocumento(String numeroDocumento) {
		this.numeroDocumento = numeroDocumento;
	}
	public String getPrimerApellido() {
		return primerApellido;
	}
	public void setPrimerApellido(String primerApellido) {
		this.primerApellido = primerApellido;
	}
	public String getSegundoApellido() {
		return segundoApellido;
	}
	public void setSegundoApellido(String segundoApellido) {
		this.segundoApellido = segundoApellido;
	}
	public String getPrimerNombre() {
		return primerNombre;
	}
	public void setPrimerNombre(String primerNombre) {
		this.primerNombre = primerNombre;
	}
	public String getSegundoNombre() {
		return segundoNombre;
	}
	public void setSegundoNombre(String segundoNombre) {
		this.segundoNombre = segundoNombre;
	}
	public String getCorreoElectronico() {
		return correoElectronico;
	}
	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}
	public String getNumeroTelefonico() {
		return numeroTelefonico;
	}
	public void setNumeroTelefonico(String numeroTelefonico) {
		this.numeroTelefonico = numeroTelefonico;
	}
	public String getNumeroRegistro() {
		return numeroRegistro;
	}
	public void setNumeroRegistro(String numeroRegistro) {
		this.numeroRegistro = numeroRegistro;
	}
	public double getPuntaje() {
		return puntaje;
	}
	public void setPuntaje(double puntaje) {
		this.puntaje = puntaje;
	}
	public String getSaberProPuntajeNivel() {
		return saberProPuntajeNivel;
	}
	public void setSaberProPuntajeNivel(String saberProPuntajeNivel) {
		this.saberProPuntajeNivel = saberProPuntajeNivel;
	}
	
	
	
	
	public String getMediaNacional() {
		return mediaNacional;
	}
	public void setMediaNacional(String mediaNacional) {
		this.mediaNacional = mediaNacional;
	}
	public double getComunicacionEscrita() {
		return comunicacionEscrita;
	}
	public void setComunicacionEscrita(double comunicacionEscrita) {
		this.comunicacionEscrita = comunicacionEscrita;
	}
	public String getComunicacionEscritaNivel() {
		return comunicacionEscritaNivel;
	}
	public void setComunicacionEscritaNivel(String comunicacionEscritaNivel) {
		this.comunicacionEscritaNivel = comunicacionEscritaNivel;
	}
	public double getRazonamientoCuantitativo() {
		return razonamientoCuantitativo;
	}
	public void setRazonamientoCuantitativo(double razonamientoCuantitativo) {
		this.razonamientoCuantitativo = razonamientoCuantitativo;
	}
	public String getRazonamientoCuantitativoNivel() {
		return razonamientoCuantitativoNivel;
	}
	public void setRazonamientoCuantitativoNivel(String razonamientoCuantitativoNivel) {
		this.razonamientoCuantitativoNivel = razonamientoCuantitativoNivel;
	}
	public double getLecturaCritica() {
		return lecturaCritica;
	}
	public void setLecturaCritica(double lecturaCritica) {
		this.lecturaCritica = lecturaCritica;
	}
	public String getLecturaCriticaNivel() {
		return lecturaCriticaNivel;
	}
	public void setLecturaCriticaNivel(String lecturaCriticaNivel) {
		this.lecturaCriticaNivel = lecturaCriticaNivel;
	}
	public double getCompetenciasCiudadanas() {
		return competenciasCiudadanas;
	}
	public void setCompetenciasCiudadanas(double competenciasCiudadanas) {
		this.competenciasCiudadanas = competenciasCiudadanas;
	}
	public String getCompetenciasCiudadanasNivel() {
		return competenciasCiudadanasNivel;
	}
	public void setCompetenciasCiudadanasNivel(String competenciasCiudadanasNivel) {
		this.competenciasCiudadanasNivel = competenciasCiudadanasNivel;
	}
	public double getIngles() {
		return ingles;
	}
	public void setIngles(double ingles) {
		this.ingles = ingles;
	}
	public String getInglesNivel() {
		return inglesNivel;
	}
	public void setInglesNivel(String inglesNivel) {
		this.inglesNivel = inglesNivel;
	}
	public double getFormulacionDeProyectosDeIngenieria() {
		return formulacionDeProyectosDeIngenieria;
	}
	public void setFormulacionDeProyectosDeIngenieria(double formulacionDeProyectosDeIngenieria) {
		this.formulacionDeProyectosDeIngenieria = formulacionDeProyectosDeIngenieria;
	}
	public String getFormulacionDeProyectosDeIngenieriaNivel() {
		return formulacionDeProyectosDeIngenieriaNivel;
	}
	public void setFormulacionDeProyectosDeIngenieriaNivel(String formulacionDeProyectosDeIngenieriaNivel) {
		this.formulacionDeProyectosDeIngenieriaNivel = formulacionDeProyectosDeIngenieriaNivel;
	}
	public double getPensamientoCientificoMatematicasYEstadistica() {
		return pensamientoCientificoMatematicasYEstadistica;
	}
	public void setPensamientoCientificoMatematicasYEstadistica(double pensamientoCientificoMatematicasYEstadistica) {
		this.pensamientoCientificoMatematicasYEstadistica = pensamientoCientificoMatematicasYEstadistica;
	}
	public String getPensamientoCientificoMatematicasYEstadisticaNivel() {
		return pensamientoCientificoMatematicasYEstadisticaNivel;
	}
	public void setPensamientoCientificoMatematicasYEstadisticaNivel(
			String pensamientoCientificoMatematicasYEstadisticaNivel) {
		this.pensamientoCientificoMatematicasYEstadisticaNivel = pensamientoCientificoMatematicasYEstadisticaNivel;
	}
	public double getDisenoDeSoftware() {
		return disenoDeSoftware;
	}
	public void setDisenoDeSoftware(double disenoDeSoftware) {
		this.disenoDeSoftware = disenoDeSoftware;
	}
	public String getDisenoDeSoftwareNivel() {
		return disenoDeSoftwareNivel;
	}
	public void setDisenoDeSoftwareNivel(String disenoDeSoftwareNivel) {
		this.disenoDeSoftwareNivel = disenoDeSoftwareNivel;
	}
	public String getNivelIngles() {
		return nivelIngles;
	}
	public void setNivelIngles(String nivelIngles) {
		this.nivelIngles = nivelIngles;
	}
	private double lecturaCritica;
    private String lecturaCriticaNivel;
    private double competenciasCiudadanas;
    private String competenciasCiudadanasNivel;
    private double ingles;
    private String inglesNivel;
    private double formulacionDeProyectosDeIngenieria;
    private String formulacionDeProyectosDeIngenieriaNivel;
    private double pensamientoCientificoMatematicasYEstadistica;
    private String pensamientoCientificoMatematicasYEstadisticaNivel;
    private double disenoDeSoftware;
    private String disenoDeSoftwareNivel;
    private String nivelIngles;

    // Getters y setters
}
