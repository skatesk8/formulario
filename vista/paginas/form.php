<?php 
				echo "<pre>";
				var_dump($_POST);
				echo "</pre>";
			 ?>
<form name="addForm" method="post">
	  	<div id="alerta"></div>

		  <div class="form-row">
		  	<div class="form-group col-md-6">
		  	  <div class="wrap-input100 validate-input" data-validate="Tu nombre es necesario">
		      <label for="text">Nombre</label>
		      <input type="text" class="form-control" name="nombre" placeholder="Nombre" minlength="5" maxlength="20" onkeypress="return soloLetras(event)" onblur="limpia()" id="txt_nombre" required="">
		    </div>
		  </div> 
		    <div class="form-group col-md-6">
		      <label for="text">Apellido</label>
		      <input type="text" class="form-control" name="apellido" placeholder="Apellido" minlength="5" maxlength="20" onkeypress="return soloLetras(event)" onblur="limpia()" id="txt_apellido" required="">
		    </div>
		  </div>
		  <div class="form-row">
		  	<div class="form-group col-md-6">
		  	  <div class="wrap-input100 validate-input" data-validate="Tu nombre es necesario">
		      <label for="text">Email</label>
		      <input type="email" class="form-control" name="email" placeholder="Ingrese Email" minlength="15" maxlength="30" required="" id="txt_email">
		    </div>
		  </div> 
		    <div class="form-group col-md-6">
		      <label for="text">DPI</label>
		      <input type="text" class="form-control" name="dpi" placeholder="DPI" minlength="13" maxlength="13" onkeypress="return soloNumeros(event)" onblur="limpia()" id="txt_dpi" required="">
		    </div>
		  </div>
		  <div class="form-row">
		    <div class="form-group col-md-5">
		      <label for="inputCasa">Telefono de casa</label>
		      <input type="text" class="form-control" name="telecas" placeholder="Telefono de casa" minlength="8" onkeypress="return soloNumeros(event)" onblur="limpia()" maxlength="8" id="txt_tel" required>
		    </div>
		    <div class="form-group col-md-5">
		      <label for="inputCelular">Telefono celular</label>
			  <input type="text" class="form-control" name="telecel" placeholder="Telefono Celular" minlength="8" onkeypress="return soloNumeros(event)" onblur="limpia()" maxlength="8" id="txt_cel" required>
		    </div>
		    <div class="form-group col-md-2">
		      <label for="inputFecha">Fecha de Nacimiento</label>
		      <input type="date" class="form-control" id="txt_fecha" name="fecha" placeholder="Fecha de Nacimiento" required>
		    </div>
		  </div>
		  <div class="form-row">
   	  	  <div class="form-group col-md-4">
		      <label for="inputFecha">Edad</label>
		      <input type="text" class="form-control" id="txt_edad" name="Edad" onKeyPress="return soloNumeros(event)"  placeholder="Edad"  minlength="2" maxlength="3" required>	    
		  </div>  
		    <div class="form-group col-md-4">
		    <div class="form-check">
		      <input class="form-check-input" type="radio" name="opcion">
		      <label class="form-check-label" for="gridCheck">
		        Soltero
		      </label>
		    </div>
		    <div class="form-check">
		      <input class="form-check-input" type="radio" name="opcion">
		      <label class="form-check-label" for="gridCheck">
		        Casado
		      </label>
		    </div>	
		    <div class="form-check">
		      <input class="form-check-input" type="radio" name="opcion">
		      <label class="form-check-label" for="gridCheck">
		        Viudo
		      </label>
		    </div>			    		    			      
		    </div>
		    <div class="form-group col-md-4">
		    <div class="form-check">
		      <input class="form-check-input" type="radio" id="opcion" name="">
		      <label class="form-check-label" for="gridCheck">
		        Hombre
		      </label>
		    </div>
		    <div class="form-check">
		      <input class="form-check-input" type="radio" id="opcion" name="">
		      <label class="form-check-label" for="gridCheck">
		        Mujer
		      </label>
		    </div>		    		    
		  </div>
		  </div>
		  <div class="form-row">
		    <div class="form-group col-md-3">
		      <label for="inputCasa">Nombre Usuario</label>
		      <input type="text" class="form-control" id="txt_usuario" name="usuario"  placeholder="Usuario" minlength="8" maxlength="25"  required>
		    </div>
		    <div class="form-group col-md-4">
		      <label for="inputCelular">Contraseña</label>
			  <input type="password" class="form-control" name="txt_contraseña" id="txt_contraseña" placeholder="Contraseña" minlength="5" required>
		    </div>
		    <div class="form-group col-md-4">
		      <label for="inputFecha">Confirmar contraseña</label>
		      <input type="password" class="form-control" name="txt_confirmar" id="txt_confirmar" placeholder="Contraseña" minlength="5" required>
		    </div>
		  </div>

		  <div class="form-group">
			<span class="label-input100">Pregunta</span>
			<span class="label-input100">¿Vive en la Ciudad o Capital?</span>		  	
		    <div class="form-check">
		      <input class="form-check-input" type="radio" name="">
		      <label class="form-check-label" for="gridCheck">
		        Ciudad
		      </label>
		    </div>
		    <div class="form-check">
		      <input class="form-check-input" type="radio" name="">
		      <label class="form-check-label" for="gridCheck">
		        Capital
		      </label>
		    </div>
		  </div>
		  <span id="error2"></span>
		  <input type="button" onclick="validarFormulario();" value="Enviar" id="boton" name="boton" class="btn btn-warning">
      </form>