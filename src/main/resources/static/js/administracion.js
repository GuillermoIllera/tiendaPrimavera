import {verUsuarios as usuarios, verProductos as productos, verRoles as roles} from "./ver.js"

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("verUsuarios").addEventListener("click", usuarios, true);
    document.getElementById("verProductos").addEventListener("click", productos, true);
    document.getElementById("verRoles").addEventListener("click", roles, true);
});