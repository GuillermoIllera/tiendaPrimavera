package es.prueba.spring.main.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Usuarioss {
    @JsonProperty("nombre")
    private String nombre;   
    @JsonProperty("apellidos")
    private String apellidos;
    @JsonProperty("email")
    private String email;
    @JsonProperty("dni")
    private String dni;
    @JsonProperty("pwd")
    private String pwd;

    public Usuarioss(String nombre, String apellidos, String email, String dni, String pwd) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.dni = dni;
        this.pwd = pwd;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "Usuarios{" + "nombre=" + nombre + ", apellidos=" + apellidos + ", email=" + email + ", dni=" + dni + ", pwd=" + pwd + '}';
    }
    
    
    
}
