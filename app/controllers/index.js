var url='http://www.amgnapp.com/iras/webservices/pruebas.php?mov=obtener_statuses_pruebas&key=@mgen_v1&formato=json';
var json;

arreglo = [];


var xhr=Ti.Network.createHTTPClient({
	onload:function(){
		Ti.API.info(this.responseData);
		alert(this.responseData);
		json=JSON.parse(this.responseText);
		Titanium.API.info(json);
		/*alert(json);*/
		/*Titanium.API.info(json.length);*/

		for(i=0;i<json.length;i++){			
		var row=Titanium.UI.createTableViewRow({
			width:200,
			height:50,
			id:json[i].resultados,
			nombre:json[i].nombre,
			fecha_alta:json[i].fecha_alta
		});	
			
		arreglo.push(row);	
			
		};
		
		$.display.setData(arreglo);
	},
	onerror:function(){
		alert('el archivo ya no existe');
	},
	timeout:5000,
		
});

xhr.open('GET', url);
xhr.send();


$.index.open();