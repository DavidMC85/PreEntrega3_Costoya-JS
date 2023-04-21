const registro_button = document.querySelector(".button");
registro_button.onclick = (e) => {
	e.preventDefault();

	//datos que se van a recibir
	const nombre = document.getElementById("nombre").value;
	const email = document.getElementById("email").value;
	const contraseña = document.getElementById("contraseña").value;
	const ccontraseña = document.getElementById("ccontraseña").value;

	//crear objeto con los datos del userrr
	const usuario = {
		nombre,
		email,
		contraseña,
		ccontraseña
	};

	//JASON BOURNE
	const usuarioJSON = JSON.stringify(usuario);

	//guardar string en localS.
	localStorage.setItem('usuario', usuarioJSON);

	//condicionales
	if(nombre == "" && email == "" && contraseña == "" && ccontraseña == ""){
		swal("Advertencia!", "Debes completar todos los campos!", "error");
	}
	else
	{
		if(contraseña !== ccontraseña){
			swal("Advertencia!", "Las contraseñas no coinciden!", "error");
		}else{
			swal("Registro realizado con éxito", "success"),
			window.location.replace("index.html");
		}
	}
}

//login con los datos en localS.

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();

    const Direccionemail = document.getElementById("email").value;
    const passWord = document.getElementById("contraseña").value;
    const usuarioJSON = localStorage.getItem("usuario");
    const usuario = JSON.parse(usuarioJSON); //desarmar el string

    if(Direccionemail == "" && passWord == ""){
        swal("Advertencia!", "No completaste ningún campo", "error");
    }else{
        if(Direccionemail == usuario.email && passWord == usuario.contraseña){
            window.location.replace("./paginas/calcu.html"); 
        }else{
            swal("Advertencia!", "Controla bien tus datos", "error");
        }
    }
}
