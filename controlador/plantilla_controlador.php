<?php 

class ControladorPlantilla 
{
	/*=============================================
	Llamada a la plantilla
	=============================================*/
	public function ctrTraerPlantilla()
	{
		#include() Se utiliza para invocar el archivo que contiene código html-php.
		include "vista/plantilla.php";
	}
}
?>