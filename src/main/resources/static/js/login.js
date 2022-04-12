//export async function iniciarSesion(e) {
//	e.preventDefault();
//	let datos = {};
//	datos.email = document.getElementById("login-email").value;
//	datos.pwd = document.getElementById("login-pwd").value;
//	const request = await fetch('/TiendaSpringMVC/control' , {
//		method: 'POST',
//		headers: {
//			'Accept': 'application/json',
//			'Content-Type': 'application/json'
//		},
//		body: JSON.stringify(datos)
//	});
//	
//	const response = await request.json();
//}