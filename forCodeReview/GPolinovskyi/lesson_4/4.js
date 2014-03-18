/*

написать функцию Car, которая имеет приватные свойства model, stand, price, owner
и публичные методы геттеры и сеттеры для этих свойств ( getModel, setModel, etc. )
Так же создайте внутри функции приватные методы standToMiles(), milesStandToKm -для преоброзования пробега в километрах в мили
и наоборот ( эти методы должны использовать публичные getStand, setStand
у публичного метода getStand(type), setStand(newVal, type) -  тип километры/мили
используя замыкание

*/

function car(model, stand, type, price, owner) {
	var model = model,
		stand = stand,
		price = price,
		owner = owner,
		type = type,
		standToMiles = function() {
			return stand = stand * 0.62137;
		},
		milesStandToKm = function() {
			return stand = stand / 0.62137;
		};
		
		
	return {
		getModel : function() {
			return model;
		},
		
		setModel : function(newModel) {
			return model = newModel;
		},
		
		getPrice : function() {
			return price;
		},
	
		setPrice : function(newPrice) {
			return price = newPrice;
		},
		
		getStand : function(newType) {
			var result;
			
			if (newType === type){
				result = stand;
			} else if (newType === 'km'){
				result = milesStandToKm();			
			} else if (newType === 'mi'){
				result = standToMiles();
			} else {
				alert ('Enter km or mi ');
			}
			
			return result;
		},
		
		setStand : function(newVal, newType) {
			type = newType;
			stand = newVal;
			return type, stand;
		}
	};	
	
	
}

/*
var bmw =  new car('bmw', 35, 'km', 4590, 'Nick');
bmw.setModel('Opel');
alert(bmw.getModel());
bmw.setStand(200, 'km');
alert(bmw.getStand('mi'));
*/



