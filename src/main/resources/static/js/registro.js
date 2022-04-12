export async function registrarUsuario(event) {
	if (!document.getElementById('errores')) {
		let section = document.createElement('section');
		section.setAttribute('id', 'errores');
		document.body.appendChild(section);
	}
	else {
		document.getElementById('errores').innerHTML = '';
	}

	let datos = {};
	let nombreUsuario = document.getElementById("nombreUsuario").value;
	if (nombreUsuario.length < 3 || nombreUsuario.length > 30 || nombreUsuario.indexOf(' ') !== -1 || !isNaN(nombreUsuario)) {
		let p = document.createElement('p');
		p.innerHTML = 'El nombre de usuario debe tener entre 3 y 30 caracteres, sin espacios en blanco ni numeros.';
		document.getElementById('errores').appendChild(p);
	} else {
		datos.nombre = nombreUsuario;
	}
	let apellidosUsuario = document.getElementById("apellidoUsuario").value;
	if (apellidosUsuario.length < 3 || apellidosUsuario.length > 30 || apellidosUsuario.indexOf(' ') !== -1 || !isNaN(apellidosUsuario)) {
		let p = document.createElement('p');
		p.innerHTML = 'Los apellidos deben tener entre 3 y 30 caracteres, sin espacios en blanco ni numeros.';
		document.getElementById('errores').appendChild(p);
	} else {
		datos.apellidos = apellidosUsuario;
	}

	let emailUsuario = document.getElementById("emailUsuario").value;
	let expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!expresion.test(emailUsuario)) {
		let p = document.createElement('p');
		p.innerHTML = 'El email no tiene un formato correcto.';
		document.getElementById('errores').appendChild(p);
	} else {
		datos.email = emailUsuario;
	}
	var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;

	let dniUsuario = document.getElementById("dniUsuario").value;
	if (!nifRexp.test(dniUsuario)) {
		let p = document.createElement('p');
		p.innerHTML = 'El DNI no tiene un formato correcto.';
		document.getElementById('errores').appendChild(p);
	} else {
		datos.dni = dniUsuario;
	}

	let pwdUsuario = document.getElementById("pwdUsuario").value;
	let repetirPwdUsuario = document.getElementById("repetirPWD").value;
	if (pwdUsuario.length < 6 || pwdUsuario.length > 30 || pwdUsuario.indexOf(' ') !== -1 || pwdUsuario !== repetirPwdUsuario) {
		let p = document.createElement('p');
		p.innerHTML = 'La contraseña debe tener entre 6 y 30 caracteres.';
		document.getElementById('errores').appendChild(p);
	} else {
		datos.pwd = pwdUsuario;
	}

	if (document.getElementById('errores').childElementCount === 0) {
		const request = await fetch('http://localhost:8080/post/usuario', {
			method: 'POST',
			body: JSON.stringify(datos)
		});
	}
}