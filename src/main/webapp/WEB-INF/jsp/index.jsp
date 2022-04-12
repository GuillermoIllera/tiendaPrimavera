<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="js/main.js" type="module"></script>
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="index.jsp">Index</a></li>
                    <li><a href="administracion.jsp">Administracion</a></li>
                    <li><a href="tienda.jsp">Tienda</a></li>
                    <li><a href=""usuarios.jsp>Usuario</a></li>
                </ul>
            </nav>
        </header>
        <form id="login" class="login-form">
            <input type="text" placeholder="Correo" id="login-email">
            <input type="password" placeholder="Contraseña" id="login-pwd">
            <input type="submit" value="Iniciar sesion" class="btn btn-logIn">
            <input type="submit" value="Registrarse" class="btn btn-singIn">
        </form>
        <hr>
            <input type="text" placeholder="Nombre" id="nombreUsuario">
            <input type="text" placeholder="Apellido" id="apellidoUsuario">
            <input type="text" placeholder="DNI" id="dniUsuario">
            <input type="text" placeholder="Correo" id="emailUsuario">
            <input type="password" placeholder="Contraseña" id="pwdUsuario">
            <input type="password" placeholder="Repetir contraseña" id="repetirPWD"> 
            <button id="singIn">Registrar usuario</button>
        <hr>
        <button id="verUsuarios">Mostrar usuarios</button>
        <button id="verProductos">Mostrar productos </button>
        <button id="verRoles">Mostrar roles</button>
    </body>
</html>