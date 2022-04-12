export async function verUsuarios(){
    let respuesta = await fetch('http://localhost:8080/get/usuarios');
    let usuarios = await respuesta.json();
    if(!document.getElementById('usuarios')){
        let section = document.createElement('section');
        section.setAttribute('id', 'usuarios');
        document.body.appendChild(section);
    }
    else{
        document.getElementById('usuarios').innerHTML = '';
    }
    let tabla = document.createElement('table');
    tabla.setAttribute('id', 'tablaUsuarios');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = 'Nombre';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Apellidos';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Email';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'DNI';
    tr.appendChild(th);
    th = document.createElement('th');

    thead.appendChild(tr);
    tabla.appendChild(thead);
    let tbody = document.createElement('tbody');
    for(let i = 0; i < usuarios.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = usuarios[i].nombreUsuario;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = usuarios[i].apellidosUsuario;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = usuarios[i].emailUsuario;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = usuarios[i].dniUsuario;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    document.getElementById('usuarios').appendChild(tabla);
}

export async function verProductos(){
    let respuesta = await fetch('http://localhost:8080/get/productos');
    let productos = await respuesta.json();
    console.log(productos);
    if(!document.getElementById('productos')){
        let section = document.createElement('section');
        section.setAttribute('id', 'productos');
        document.body.appendChild(section);
    }
    else{
        document.getElementById('productos').innerHTML = '';
    }
    let tabla = document.createElement('table');
    tabla.setAttribute('id', 'tablaProductos');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = 'Nombre';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Precio';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Descripcion';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Stock';
    tr.appendChild(th);
    th = document.createElement('th');
    
    thead.appendChild(tr);
    tabla.appendChild(thead);

    let tbody = document.createElement('tbody');

    for(let i = 0; i < productos.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = productos[i].nombreProducto;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = productos[i].precioProducto;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = productos[i].descripcionProducto;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = productos[i].stockProducto;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    document.getElementById('productos').appendChild(tabla);

}
export async function verRoles(){
    let respuesta = await fetch('http://localhost:8080/get/roles');
    let roles = await respuesta.json();
    console.log(roles);
    if(!document.getElementById('roles')){
        let section = document.createElement('section');
        section.setAttribute('id', 'roles');
        document.body.appendChild(section);
    }
    else{
        document.getElementById('roles').innerHTML = '';
    }
    let tabla = document.createElement('table');
    tabla.setAttribute('id', 'tablaRoles');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = 'Nombre';
    tr.appendChild(th);
    th = document.createElement('th');

    thead.appendChild(tr);
    tabla.appendChild(thead);
    let tbody = document.createElement('tbody');
    for(let i = 0; i < roles.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = roles[i].nombreRol;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    document.getElementById('roles').appendChild(tabla);

}