function  validarTexto(parametro) {
	var patron = /^[a-zA-Z\s]*$/;
	if (parametro.search(patron)) {
		return false;
	} else{
		return true;
	}
}

function validarCorreo(parametro) {
	var patron =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (!patron.test(parametro)) {
		return false;
	} else{
		return true; 
	}
}

function validarespacios(parametro) {
	var patron = /^\s+$/;
	if (patron.test(parametro)) {
		return false;
	} else{
		return true;
	}
}

function validarFormulario() {
	//alert("Todo en orden");
	var formulario = document.addForm;

	if (formulario.txt_nombre.value == "" ) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su nombre </div>';
		formulario.txt_nombre.focus("alerta");
		return false;
	} else if (validarTexto(formulario.txt_nombre.value) == false) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite valores numericos en el campo de nombre</div>';
		formulario.txt_nombre.value = "";
		formulario.txt_nombre.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_apellido.value == "" ) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su apellido </div>';
		formulario.txt_apellido.value = "";
		formulario.txt_apellido.focus("alerta");
		return false;
	}else if (validarTexto(formulario.txt_apellido.value) == false) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> No se permite valores numericos en el campo de apellidos</div>';
		formulario.txt_apellido.value = "";
		formulario.txt_apellido.focus();
		return false; 
	}else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_email.value == "") {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su email </div>';
		formulario.txt_email.focus();
		return false;
	} else if (validarCorreo(formulario.txt_email.value) == false) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar un correo valido.</div>';
		formulario.txt_email.value = "";
		formulario.txt_email.focus();
		return false; 
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_dpi.value == "") {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su número de DPI </div>';
		formulario.txt_dpi.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_tel.value == "") {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su numero de telefono </div>';
		formulario.txt_tel.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_cel.value == "") {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su número de celular </div>';
		formulario.txt_cel.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_fecha.value == "") {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar fecha </div>';
		formulario.txt_fecha.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_edad.value == "") {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su edad </div>';
		formulario.txt_edad.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_usuario.value == "" || validarespacios(formulario.txt_usuario.value) == false) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su usuario </div>';
		formulario.txt_usuario.value = "";
		formulario.txt_usuario.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_contraseña.value != formulario.txt_confirmar.value) {
	document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Contreseñas ingresadas no son iguales. </div>';
	formulario.txt_contraseña.value = "";
	formulario.txt_confirmar.value = "";
	formulario.txt_contraseña.focus();
	return false;
} else {
	document.getElementById("alerta").innerHTML = "";
}

	if (formulario.txt_contraseña.value == "" || validarespacios(formulario.txt_contraseña.value) == false) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-warning"><a href="" class="close" data-dismiss="alert">&times;</a> Favor ingresar su contraseña</div>';
		formulario.txt_contraseña.value = "";
		formulario.txt_contraseña.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	if (formulario.txt_confirmar.value == "" || validarespacios(formulario.txt_confirmar.value) == false) {
		document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a> Favor confirme su contraseña </div>';
		formulario.txt_confirmar.value = "";
		formulario.txt_confirmar.focus();
		return false;
	} else{
		document.getElementById("alerta").innerHTML = "";
	}

	formulario.submit();
}