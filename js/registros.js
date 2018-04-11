var pestaña = "";
var titulo = "";
var spanTitulo = "";
var d = new Date();

var atrib1 = "";
var atrib2 = "";
var atrib3 = "";
var atrib4 = "";
var atrib5 = "";

var input1 = "";
var input2 = "";
var input3 = "";
var input4 = "";
var input5 = "";

var imagenCard = "";
var textoCard = "";

var span1 = "";
var span2 = "";
var span3 = "";
var span4 = "";
var span5 = "";

var boton1 = "";

$(document).ready(function(){
	$('#registros').hide();
	$('.dropdown-item').click(function(){
		$('#i').hide();
		pestaña = $(this).attr('id');

		$('.input-group-prepend').children("#span1").removeClass(span1);
		$('.input-group-prepend').children("#span2").removeClass(span2);
		$('.input-group-prepend').children("#span3").removeClass(span3);
		$('.input-group-prepend').children("#span4").removeClass(span4);

		switch(pestaña){
			case "Cliente": 

			 	$('#fechaSistema').hide();
			 	$('#formulario').hide();
			 	titulo="Registro de Clientes";
			 	spanTitulo = "ion-clipboard";
			 	atrib1 = "Nombre";
			 	atrib2 = "Cédula";
			 	atrib3 = "Correo";
			 	atrib4 = "Dirección";
			 	atrib5 = "Teléfono";
			    input1 = "Nombre del Cliente";
			    input2 = "Cédula del Cliente";
			    input3 = "Correo del Cliente";
			    input4 = "Dirección del Cliente";
			    input5 = "Teléfono del Cliente";
			 	span1="ion-person";
			 	span2="ion-person";
			 	span3="ion-email";
			 	span4="ion-android-home";
			 	span5="ion-ios-telephone";
			 	boton1 ="Registrar Cliente";
				imagenCard = "http://webcourier.ro/wp-content/uploads/Worker-delivering-a-package-in-a-house-PNG-400X400-300x240.png";
				textoCard = "Se pueden registrar los clientes con sus respectivos datos";
				break;

			case "Mensajero": 

			 	$('#fechaSistema').hide();
				titulo="Registro de Mensajeros";
				spanTitulo = "ion-clipboard";
			 	atrib1 = "Nombre";
			 	atrib2 = "Cédula";
			 	atrib3 = "Correo";
			 	atrib4 = "Dirección";
			 	atrib5 = "Teléfono";
			    input1 = "Nombre del Mensajero";
			    input2 = "Cédula del Mensajero";
			    input3 = "Correo del Mensajero";
			    input4 = "Dirección del Mensajero";
			    input5 = "Teléfono del Mensajero";
			 	boton1 ="Registrar Mensajero";
			 	span1="ion-person";
			 	span2="ion-person";
			 	span3="ion-email";
			 	span4="ion-android-home";
			 	span5="ion-ios-telephone";
				imagenCard = "https://img.milanuncios.com/fg/2150/32/215032702_1.jpg";
				textoCard = "Se pueden registrar los mensajeros de la empresa con sus respectivos datos";
			 	document.getElementById('formulario').innerHTML="<label>Estado Civil</label>"+
			 													"<select class='form-control'>"+
      															"<option>Soltero</option>"+
      															"<option>Casado</option>"+
      															"<option>Divorciado</option>"+
      															"<option>Viudo</option>"+
      															"</select>"+
      															"<label>Fecha de Nacimiento</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-calendar'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Fecha de Nacimiento' id='fecha' required></div>"+
											                    "<label>Ciudad</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-location'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Ciudad' id='ciudad' required></div>"+
											                    "<label>Ocupación</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-man'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Ocupación' id='ocupacion' required></div>"+
											                    "<label>Referencia Personal</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-person'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Nombre Referencia Personal' required></div>"+
											                    "<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-ios-telephone'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Teléfono Referencia Personal' required></div>"+
											                    "<div class='input-group mb-3'>"+
																"<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-location'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Dirección Referencia Personal' required></div>"+
											                     "<label>Referencia Familiar</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-location'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Nombre Referencia Familiar' required></div>"+
											                    "<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-ios-telephone'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Teléfono Referencia Familiar' required></div>"+
											                    "<div class='input-group mb-3'>"+
																"<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-location'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Dirección Referencia Familiar' required></div>";
				
			 	$('#formulario').show();
				break;

			case "Envio": 

			 	$('#formulario').hide();
			 	$('#fechaSistema').show();
				titulo="Registro de Envíos";
				document.getElementById('fechaSistema').innerHTML="<label>Fecha de Envío: "+d.getDate()+"/"+(d.getMonth()+1)+"/"+(d.getYear()+1900)+"</label>";
				spanTitulo = "ion-clipboard";
			 	atrib1 = "Remitente";
			 	atrib2 = "Origen";
			 	atrib3 = "Destino";
			 	atrib4 = "Nombre";
			 	atrib5 = "Cédula";
			    input1 = "Cédula del Cliente";
			    input2 = "Lugar de Origen";
			    input3 = "Lugar de Destino";			    
			    input4 = "Nombre Destinatario";
			    input5 = "Cédula del Destinatario";
			 	boton1 ="Registrar Envío";
			 	span1="ion-person";
			 	span2="ion-location";
			 	span3="ion-location";
			 	span4="ion-person";
			 	span5="ion-person";
				imagenCard = "http://shipgl.com/img/ph2.jpg";
				textoCard = "Se pueden registrar los envios con sus respectivos datos";

			 	document.getElementById('formulario').innerHTML="<label>Teléfono</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-ios-telephone'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Teléfono del Destinatario' required></div>"+
											                    "<label>Dirección</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-location'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Dirección del Destinatario' required></div>"+
											                    "<label>Valor del Envío</label>"+
																"<div class='input-group mb-3'>"+
											                    "<div class='input-group-prepend'>"+
											                    "<span class='input-group-text ion-social-usd-outline'></span></div>"+
											                    "<input type='text' class='form-control' placeholder='Valor del Envío' id='ocupacion' required></div>";

			 	$('#formulario').show();
				break;
		}

		document.getElementById('titulo').innerHTML=titulo;
		$('.der').children("#spanTitulo").addClass(spanTitulo);

		document.getElementById('atrib1').innerHTML=atrib1;
		document.getElementById('atrib2').innerHTML=atrib2;
		document.getElementById('atrib3').innerHTML=atrib3;
		document.getElementById('atrib4').innerHTML=atrib4;
		document.getElementById('atrib5').innerHTML=atrib5;

		document.getElementById('imagenCard').src = imagenCard;
		document.getElementById('textoCard').innerHTML=textoCard;

		document.getElementById('input1').placeholder=input1;
		document.getElementById('input2').placeholder=input2;
		document.getElementById('input3').placeholder=input3;
		document.getElementById('input4').placeholder=input4;
		document.getElementById('input5').placeholder=input5;

		$('.input-group').children("#input3").addClass("email");
		document.getElementById('input3').type="email";

		$('.input-group-prepend').children("#span1").addClass(span1);
		$('.input-group-prepend').children("#span2").addClass(span2);
		$('.input-group-prepend').children("#span3").addClass(span3);
		$('.input-group-prepend').children("#span4").addClass(span4);
		$('.input-group-prepend').children("#span5").addClass(span5);

		document.getElementById('boton1').innerHTML=boton1;

		$('#registros').show();
	});
});