var pestaña = "";

var tabla = "";

var imagenCard = "";
var textoCard = "";

var titulo1 = "";
var titulo2 = "";
var titulo3 = "";
var titulo4 = "";

$(document).ready(function(){
	$('#listas').hide();
	$('.dropdown-item').click(function(){
		$('#i').hide();
		pestaña = $(this).attr('id');

		switch(pestaña){
			case "Cliente": 
				tabla = "Tabla de Clientes";
				titulo1 = "Cédula";
				titulo2 = "Nombre";
				titulo3 = "Teléfono";
				titulo4 = "Dirección";
				imagenCard = "http://webcourier.ro/wp-content/uploads/Worker-delivering-a-package-in-a-house-PNG-400X400-300x240.png";
				textoCard = "Se visualizan los clientes registrados con sus respectivos datos";
				$.get('json/clientes.json',function(datos){
					$('#tablaListado').html('');
					$.each(datos["clientes"], function(idx,cliente){
						$('#tablaListado').append("<tr>"+
												  	"<td>"+cliente["cedula"]+"</td>"+
												  	"<td>"+cliente["nombre"]+"</td>"+
												  	"<td>"+cliente["telefono"]+"</td>"+
												  	"<td>"+cliente["direccion"]+"</td>"+
												    "<td><button type='button' class='btn btn-outline-dark' title='Editar' style='margin-right: 5%;'><span class='ion-eye'></span></button>"+
													"<button type='button' class='btn btn-danger' title='Eliminar'><span class='ion-close-round'></span></button></td>"+
												  "</tr>");
					});
				});
				break;
			case "Mensajero": 
				tabla = "Tabla de Mensajeros";
				titulo1 = "Cédula";
				titulo2 = "Nombre";
				titulo3 = "Teléfono";
				titulo4 = "Dirección";
				imagenCard = "https://img.milanuncios.com/fg/2150/32/215032702_1.jpg";
				textoCard = "Se visualizan los mensajeros registrados en la empresa con sus respectivos datos";
				$.get('json/mensajeros.json',function(datos){
					$('#tablaListado').html('');
					$.each(datos["mensajeros"], function(idx,mensajero){
						$('#tablaListado').append("<tr>"+
												  	"<td>"+mensajero["cedula"]+"</td>"+
												  	"<td>"+mensajero["nombre"]+"</td>"+
												  	"<td>"+mensajero["telefono"]+"</td>"+
												  	"<td>"+mensajero["direccion"]+"</td>"+
												    "<td><button href='#modal' type='button' class='btn btn-outline-dark' title='Editar' style='margin-right: 5%;'><span class='ion-eye'></span></button>"+
													"<button type='button' class='btn btn-danger' title='Eliminar'><span class='ion-close-round'></span></button></td>"+
												  "</tr>");
					});
				});
				break;
			case "Envio": 
				tabla = "Tabla de Envíos";
				titulo1 = "Remitente";
				titulo2 = "Origen";
				titulo3 = "Destino";
				titulo4 = "Destinatario";
				imagenCard = "http://shipgl.com/img/ph2.jpg";
				textoCard = "Se visualizan los envios que se han registrado con sus respectivos datos";
				$.get('json/envios.json',function(datos){
					$('#tablaListado').html('');
					$.each(datos["envios"], function(idx,envio){
						$('#tablaListado').append("<tr>"+
												  	"<td>"+envio["remitente"]+"</td>"+
												  	"<td>"+envio["origen"]+"</td>"+
												  	"<td>"+envio["destino"]+"</td>"+
												  	"<td>"+envio["destinatario"]+"</td>"+
												    "<td><button type='button' class='btn btn-outline-dark' title='Editar' style='margin-right:5%;'><span class='ion-eye'></span></button>"+
													"<button type='button' class='btn btn-danger' title='Eliminar'><span class='ion-close-round'></span></button></td>"+
												  "</tr>");
					});
				});
				break;
		}

		document.getElementById('tabla').innerHTML=tabla;

		document.getElementById('titulo1').innerHTML=titulo1;
		document.getElementById('titulo2').innerHTML=titulo2;
		document.getElementById('titulo3').innerHTML=titulo3;
		document.getElementById('titulo4').innerHTML=titulo4;

		document.getElementById('imagenCard').src = imagenCard;
		document.getElementById('textoCard').innerHTML=textoCard;
	
		$('#listas').show();

	});

	$('#modal').click(function(){
		alert("hola");
	});
});