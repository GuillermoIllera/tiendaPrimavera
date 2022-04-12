import {registrarUsuario as registrar} from "./registro.js";
import {verUsuarios, verProductos, verRoles} from "./ver.js";

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("singIn").addEventListener("click", registrar, true);
    document.getElementById("verUsuarios").addEventListener("click", verUsuarios, true);
    document.getElementById("verProductos").addEventListener("click", verProductos, true);
    document.getElementById("verRoles").addEventListener("click", verRoles, true);

});

// Haz que al hacer click en el boton de ver usuarios llame a la funcion getUsuarios()